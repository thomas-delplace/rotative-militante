const Ratios = require("./Ratios")

/**
 * @method orientation
 * @method ratio
 * @method hauteur
 * @method largeur
 */
class Format{
    #props = {
        largeur : "1080",
        hauteur : "1080",
        ratio : "1:1",
        orientation : "portrait"
    }
    /**
     * Calcul la hauteur à partir de la largeur de l'image entrée en paramètre et des informations de ratio et d'orientation en propriétés de l'objet
     * @returns {number} hauteur
     */
    #calculerHauteur(){
        this.#props.hauteur = Math.round(this.#props.largeur*(Ratios[this.#props.ratio][this.#props.orientation].grand))
        return this.#props.hauteur
    }
    /**
     * Calcul la largeur à partir de la hauteur de l'image entrée en paramètre et des informations de ratio et d'orientation en propriétés de l'objet
     * @returns {number} largeur
     */
    #calculerLargeur(){
        this.#props.largeur = Math.round(this.#props.hauteur*(Ratios[this.#props.ratio][this.#props.orientation].petit))
        return this.#props.largeur
    }
    /**
     * Appelée en cas de changement de ratio ou d'orientation : recalcule la hauteur et la largeur de la photo 
     */
    #recalcule(){
        this.#calculerHauteur()
        this.#calculerLargeur()
    }
    /**
     * Si un argument est passé à cette fonction, elle redefinit l'orientation de l'image puis retourne la valeur enregistrée
     * 
     * Sinon, elle retourne juste l'orientation
     * @param {string} arg 
     * @returns {string} orientation
     */
    orientation(arg){
        if(arg && Ratios.liste.orientation.includes(arg)){ // si un argument est entré et s'il correspond à une des valeurs possibles
                this.#props.orientation = arg // modification de la propriété orientation

                // les quatre lignes ci-dessous inversent juste les valeurs.
                // la hauteur devient la largeur et la largeur devient la hauteur
                const hauteur = this.#props.largeur
                const largeur = this.#props.hauteur
                this.#props.hauteur = hauteur
                this.#props.largeur = largeur
                // console.log("nouvelle orientation okay")
        }
        return this.#props.orientation
    }
    /**
     * Si un argument est passé à cette fonction, elle redefinit le ratio de l'image puis retourne la valeur enregistrée
     * 
     * Sinon, elle retourne juste le ratio
     * @param {string} arg 
     * @returns {string} ratio
     */
    ratio(arg){
        if(arg && Ratios.liste.ratio.includes(arg)){
            this.#props.ratio = arg
            this.#recalcule()
            // console.log("nouveau ratio okay")
        }
        return this.#props.ratio
    }
    /**
     * Définit la hauteur de l'image et retourne la valeur enregistrée
     * @param {number} arg
     * @returns {number} hauteur
     */
    hauteur(arg){
        if(arg && typeof arg === "number"){
            this.#props.hauteur = arg
            this.#calculerLargeur()
        }
        return this.#props.hauteur
    }
    /**
     * Définit la largeur de l'image et retourne la valeur enregistrée
     * @param {number} arg
     */
    largeur(arg){
        if(arg && typeof arg === "number"){
            this.#props.largeur = arg
            this.#calculerHauteur()
        }
        return this.#props.largeur
    }
}

module.exports = Format

//let dim = new Dimensions()
//console.log("Initialisé")
//console.log(`Hauteur : ${dim.hauteur()} - Largeur ${dim.largeur()}`)
//dim.hauteur(3125)
//console.log("Modifié hauteur")
//console.log(`Hauteur : ${dim.hauteur()} - Largeur ${dim.largeur()}`)
//dim.ratio("4:5")
//console.log("Modifié ratio")
//console.log(`Hauteur : ${dim.hauteur()} - Largeur ${dim.largeur()}`)
//dim.orientation("paysage")
//console.log("Modifié orientation")
//console.log(`Hauteur : ${dim.hauteur()} - Largeur ${dim.largeur()}`)