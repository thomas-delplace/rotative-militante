# LA ROTATIVE MILITANTE

Générateur de visuels pour les réseaux sociaux à l'usage des militant·e·s de gauche. Cette WebApp offre un outil simplifié permettant l'utilisation de templates pour générer rapidement des visuels, slides et affiches qui respectent les règles de base de design et permettent à des militant·e·s sans grande connaissance d'être autonomes.

**Technologies utilisées**
* ReactJS
* NextJS

## FONCTIONNALITÉS

### 1. Format

L'utilisateurice aura le choix entre plusieurs formats se déclinant en ***portrait*** et en ***paysage*** :

| portrait | paysage | utilisation |
| :--: | :--: | :-- |
| 1:1 | - | instagram, twitter, etc. |
| 4:5 | 5:4 | instagram, twitter, etc. |
| 3:4 | 4:3 | twitter, facebook, etc. |
| ISO | - | impression A4, A3, etc. |
| 2:3 | 3:2 | twitter, facebook, etc. |
| 9:16 | 16:9 | story instagram |

```js
const formats = {
    "1:1" : "1p1",
    "4:5" : "4p5",
    "3:4" : "3p4",

}

let aspectRatio
```

![Idée d'interface de selection du format](./_utils/formats.png)

### 2. Couleur de fond

![Idée d'interface de selection de couleur](./_utils/palette.png)
___

#### **Dégradés**
| COULEUR 1 | HEXCODE | COULEUR 2 | HEXCODE |
| :-- | :--: | :-- | :--: |
| VIOLET _rgb_ | `#7b13d6` | ROUGE _rgb_ | `#f91616` |
| VIOLET _cmjn_ | `#58398e` | ROUGE _cmjn_ | `#da3933` |
| ROSE | `#ed5fb1` | TURQUOISE | `#3885f4` |
| SAUMON | `#d25c50` | BLEU | `#13235f` |
___

#### **Palette LFI**
| COULEUR | RGB | CMJN |
| :-- | :--: | :--: |
| VIOLET | `#7b13d6` | `#58398e` |
| ROUGE | `#58398e` | `#da3933` |
| ROSE | `#ed5fb1` | `#e345fA` |
| BLEU | `#843473` | `#54baff` |
| JAUNE | `#f91616` | `#edc933` |
| VERT | `#da3933` | `#4afa4d` |
___

#### **Palette Générale**
| COULEUR | HEXCODE |
| :-- | :--: |
| rose foncé | `#843473` |
| saumon | `#d25c50` |
| orange | `#ff8518` |
| jaune or | `#f0a400` |
| jaune pâle | `#fffb56` |
| vert vif | `#4dc104` |
| vert foncé | `#126c00` |
| bleu canard | `#008890` |
| bleu foncé | `#13235f` |
| crême | `#ffdc98` |
| marron 1 | `#7a3c2d` |
| marron 2 | `#744b23` |
| marron 3 | `#a98b4e` |
| gris 1 | `#cbcbcb` |
| gris 2 | `#8f8f8f` |
| gris 3 | `#444444` |
| gris 4 | `#3d3d3d` |
| gris 5 | `#212121` |
___

#### **Palette CSS**
```css

:root{
    --lfi-rgb-violet : #7b13d6 ;
    --lfi-rgb-rouge : #f91616 ;
    --lfi-rgb-rose : #ed5fb1 ;
    --lfi-rgb-bleu : #3885f4 ;
    --lfi-rgb-jaune : #f9c900 ;
    --lfi-rgb-vert : #2e9959 ;

    --lfi-cmjn-violet : #58398e ;
    --lfi-cmjn-rouge : #da3933 ;
    --lfi-cmjn-rose : #e345fA ;
    --lfi-cmjn-bleu : #54baff ;
    --lfi-cmjn-jaune : #edc933 ;
    --lfi-cmjn-vert : #4afa4d ;

    --palette-rose-fonce : #843473 ;
    --palette-saumon : #d25c50 ;
    --palette-orange : #ff8518 ;
    --palette-or : #f0a400 ;
    --palette-jaune-pale : #fffb56 ;
    --palette-vert-vif : #4dc104 ;
    --palette-vert-fonce : #126c00 ;
    --palette-bleu-canard : #008890 ;
    --palette-bleu-fonce : #13235f ;
    --palette-creme : #ffdc98 ;
    --palette-marron-1 : #7a3c2d ;
    --palette-marron-2 : #744b23 ;
    --palette-marron-3 : #a98b4e ;
    --palette-gris-1 : #cbcbcb ;
    --palette-gris-2 : #8f8f8f ;
    --palette-gris-3 : #444444 ;
    --palette-gris-4 : #3d3d3d ;
    --palette-gris-5 : #212121 ;
}

```


### 3. Texture

- sans
- lin
- grés 
- bruit blanc
- quadrillage
- pointillisme / halftone
- papier chiffoné
- papier gauffré

### 4. Filigrane

L'utilisateurice peut appliquer un filigrane sur tout le slides ou un filigrane différent par slide.

### 5. Fil d'ariane

> **JAUGE ETENDUE CONTINUE**
> ![jauge étendue continue](./_utils/jauge_etendue_continue.png)

``` svg

<g id="fil_ariane">
    <rect x="0" y={hauteur_viewport - 20} width={largeur_viewport / total_slides * num_slide} height="20" fill="#ffffff" fill-opacity="1" stroke="0" />
</g>

```

> **JAUGE ETENDUE COUPÉE**
> ![jauge étendue coupée](./_utils/jauge_etendue_coupee.png)

``` svg



```

> **PUCES RONDES 1**
> ![puces rondes 1](./_utils/puces_rondes_1.png)

``` svg

<g id="fil_ariane">
    <circle id="puce_01" cx="22"  cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    <circle id="puce_02" cx="66"  cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    <circle id="puce_03" cx="110" cy="22" r="22" fill="#ffffff" fill-opacity="1"   stroke="#ffffff" stroke-width="4" />
    <circle id="puce_04" cx="154" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    <circle id="puce_05" cx="198" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    <circle id="puce_06" cx="242" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    <circle id="puce_07" cx="286" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    <circle id="puce_08" cx="330" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    <circle id="puce_09" cx="374" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    <circle id="puce_10" cx="418" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
</g>

```

> **PUCES RONDES 2**
> ![puces rondes 2](./_utils/puces_rondes_2.png)

``` svg
<defs>
    <radiaGradient id="radial_gradient" gradientUnits="userSpaceOnUse" r="" cx="" cy="" fx="" fy="" />
    <!-- A COMPLETER -->
</defs>
<g id="fil_ariane">
    <circle id="puce_01" cx="20"  cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
    <circle id="puce_02" cx="80"  cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
    <circle id="puce_03" cx="140" cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" transform="scale(0.3)"/> <!-- PUCE ACTIVE -->
    <circle id="puce_04" cx="200" cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
    <circle id="puce_05" cx="260" cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
    <circle id="puce_06" cx="320" cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
    <circle id="puce_07" cx="380" cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
    <circle id="puce_08" cx="440" cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
    <circle id="puce_09" cx="500" cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
    <circle id="puce_10" cx="560" cy="20" r="20" fill="url(#radial_gradient)" fill-opacity="1" stroke-width="0" />
</g>

```
> **PUCES CARRÉES 1**
> ![puces carrées 1](./_utils/puces_carrees_1.png)

> **PUCES CARRÉES 2**
> ![puces carrées 2](./_utils/puces_carrees_2.png)

> **A AJOUTER**
> `x/x` `jauge serrée pleine` `jauge serrée coupée` `jauge serrée pleine arrondie` `jauge serrée coupée arrondie`

### 6. Titre

| Style | Alignement |
| :--: | :--: |
| cutout 1 | gauche |
| cutout 2 | centre |
| cutout 3 | droit |
| bandeau 1 |  |
| bandeau 2 |  |
| bandeau 3 |  |
| simple 1 |  |
| simple 2 |  |
| simple 3 |  |

### 7. Texte
| Style | Alignement |
| :--: | :--: |
| simple 1 | gauche |
| simple 2 | centre |
| simple 3 | droit |
| simple 4 |  |
| liste 1 |  |
| liste 2 |  |
| liste 3 |  |
| liste 4 |  |

### 8. Logo

| Type | Boite | Placement | Couleur |
| :--: | :--: | :--: | :--: |
| aucun | sans | haut-gauche | blanc |
| LFI Horizontal | boite 1 | haut-droit | noir |
| LFI vertical | boite 2 | bas-gauche | dégradé rgb |
| LFI side | boite 3 | bas-droit | dégradé cmyk |
| LFI seul | boite 4 | centre-haut |  |
|  |  | centre-bas |  |

## SOUS LE CAPOT

### Projet

```js
Class Projet {

}
```

### Slide



```js
Class Slide {
    constructor()
}
```