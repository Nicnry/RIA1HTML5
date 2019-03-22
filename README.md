# RIA1HTML5

## Exercices manipulation de DOM

1. Créer une page HTML5 en suivant l'image en indication et y inclure la librairie Bulma.
2. Ajouter un formulaire qui, à l'envoi, rajoute la valeur d'un input dans la page (pas de rafraichissement ni AJAX).

### Exercice avancé
1. Ajoutez une couleur aléatoire à chaque création de div (voir exercice 2).

## Exercices SVG & Canvas

### Introduction

Le but de cet exercice est de recréer le schèma ci-dessous en "Canvas", ce schema se trouve déjà sur le template fourni pour l'éxercice, mais il ne contient pas les tailles des objets.

![Resultat](./data-help/ShapesPX.jpg "Premier resultat")

Une fois que la création du canvas sera terminé, il vous faudra apporter une modification au canvas, puis apporter la même modifcation au SVG.



### Pré-requis 

Copié/collé le code suivant, dans la section "SVG et canvas"

```html
<div class="Label">SVG</div>
<img id="mySvg" src="img\Shapes.svg" alt="img\Shapes">
<div class="Label">Canvas</div>
<canvas id="myCanvas"></canvas>
<script src="canvas.js"></script>
```



---

### Commandes utiles

- Choisir la couleur de remplissage d'une forme

```javascript
fillStyle = '#'
```

- Remplir un rectangle

```javascript
fillRect = 'x: int, y: int, width: int, height: int'
```

- Dessiner un cercle

```javascript
arc = 'x: int, y: int, r: int, startAngle: float, endAngle: float, drawCounterClockwise: bool'
// StartAngle : 0 
// endAngle : Math.PI * 2
// drawCounterClockwise : false
```

- Commencer un tracé

```javascript
beginPath();
```

- Définir un point de départ

```javascript
moveTo(x: int, y: int)
```

- Tirer un trait

```javascript
lineTo(x: int, y: int)
```

- Dessiner les traits

```javascript
stroke()
```

- Remplir une forme

```javascript
fill()
```

---

### Informations relatives au svg 

Dans un fichier .svg se trouve une partie "Style" qui fonctionne comme du CSS, l'attribut fill définis la couleur de remplissage. On peut également retrouvé le nom que la forme possède, son id et sa classe, il est également possible de modifier des points, positions ou tailles directement sur le SVG.

---

### Consignes

#### Exercice 1 :

Reproduire en canvas, le contenu du SVG directement disponible sur le template.

Le résultat final devra être le suivant : 

![Resultat](./data-help/Result1.PNG "Premier resultat")

---

#### Exercice 2 : 

- Rendre le carré rouge
- Rendre le rond noir
- Rendre le triangle bleu

Reproduire ceci également sur le SVG qui se trouve dans (/images/shapes.svg)

Le résultat final devra être le suivant : 

![Resultat](./data-help/Result2.PNG "Deuxieme resultat")
