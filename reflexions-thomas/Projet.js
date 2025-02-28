//const Ratios = require("./Ratios")
const Format = require("./Format")

/**
 * ### Class Projet
 */
class Projet {
    /**
     * 
     */
    __date__ = new Date()
    format = new Format()
    backgroundColor = "#ffffff"
    backgroundTexture = false
    backgroundFiligrane = false
    titre = {
        color : "",
        style : "",
        alignment : ""
    }
    text = {
        color : "",
        style : "",
        alignment :""
    }
}
const projet = new Projet()

console.log(projet.format.hauteur())
console.log(projet.format.largeur())
console.log(projet.format.orientation())
console.log(projet.format.ratio())
console.log(projet.__date__)