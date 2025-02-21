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

![Idée d'interface de selection du format](./_utils/formats.png)

### 2. Couleur de fond

| couleur | infos | code |
| :-- | :--: | :--: |
| dégradé violet-rouge | LFI rgb | `#7b13d6` / `#f91616` |
| dégradé violet-rouge 2 | LFI cmyk | `#58398e` / `#da3933` |
| dégradé rose-turquoise  | LFI rgb | `#ed5fb1` / `#3885f4` |
| dégradé saumon-bleu  | Jeunes Insoumis | `#d25c50` / `#13235f` |
| violet 1 | LFI rgb | `#7b13d6` |
| violet 2 | LFI cmyk | `#58398e` |
| rouge 1 | LFI rgb | `#f91616` |
| rouge 2 | LFI cmyk | `#da3933` |
| bleu turquoise | LFI rgb | `#3885f4` |
| rose | LFI rgb | `#ed5fb1` |
| vert | LFI rgb | `#2e9959` |
| jaune | LFI rgb | `#f9c900` |
| bleu canard |  | `#008890` |
| bleu foncé | Jeunes Insoumis | `#13235f` |
| rose foncé |  | `#843473` |
| vert foncé |  | `#126c00` |
| vert vif |  | `#4dc104` |
| jaune or |  | `#f0a400` |
| jaune pâle |  | `#fffb56` |
| orange |  | `#ff8518` |
| saumon | Jeunes Insoumis | `#d25c50` |
| crême |  | `#ffdc98` |
| gris 1 |  | `#cbcbcb` |
| gris 2 |  | `#8f8f8f` |
| gris 3 |  | `#444444` |
| gris 4 |  | `#3d3d3d` |
| gris 5 |  | `#212121` |
| marron 1 |  | `#7a3c2d` |
| marron 2 |  | `#744b23` |
| marron 3 |  | `#a98b4e` |

![Idée d'interface de selection de couleur](./_utils/palette.png)

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
> ![puces rondes 1](./_utils/jauge_etendue_continue.png)

> **JAUGE ETENDUE COUPÉE**
> ![puces rondes 1](./_utils/jauge_etendue_coupee.png)

> **PUCES RONDES 1**
> ![puces rondes 1](./_utils/puces_rondes_1.png)

> **PUCES RONDES 2**
> ![puces rondes 1](./_utils/puces_rondes_2.png)

> **PUCES CARRÉES 1**
> ![puces rondes 1](./_utils/puces_carrees_1.png)

> **PUCES CARRÉES 2**
> ![puces rondes 1](./_utils/puces_carrees_2.png)

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