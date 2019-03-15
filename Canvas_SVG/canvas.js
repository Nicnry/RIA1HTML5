var canvas = document.getElementById("myCanvas");
// var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Square
c.fillStyle = '#0e8ccc';
c.fillRect(150, 200, 500, 500);


// Circle
c.fillStyle = '#e94f37';
// c.strokeStyle = '#e94f37';
c.arc(1000, 450, 250, 0, Math.PI * 2, false)    // Draw a circle. arc(x: int, y: int, r: int, startAngle: float, endAngle: float, drawCounterClockwise: bool)
c.fill();                                       // Remplis la forme
// c.stroke();                                  // Dessiner la forme définis au dessus. Si on fill, le stroke n'est pas nécessaire et le strokeStyle non plus


// Triangle
c.fillStyle = '#393e41';
// c.strokeStyle = '#393e41';
c.beginPath();          // Définis une nouvelle forme
c.moveTo(1300, 700);    // Point de départ 1250;700
c.lineTo(1800, 700);    // Lieu du deuxième point
c.lineTo(1550, 200);    // Lieu du troisième point
c.lineTo(1300, 700);    // Retour au point de départ pour fermer la forme
c.fill();               // Remplis la forme
// c.stroke();             // Dessiner les traits définis au dessus. Si on fill, le stroke n'est pas nécessaire, le denier point (c.lineTo(1300, 700);) non plus, et définir le strokStyle non plus
