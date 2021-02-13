var balloon, balloonImage
var database
var background, backgroundImage

function preload() {
  balloonImage = loadImage("pro-CS5 images/Hot Air Ballon-04.png")
  backgroundImage = loadImage('pro-CS5 images/Hot Air Ballon-01.png')
}
  

function setup() {
  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImage)
  background.addImage(background)
}
    
function draw() {
  background(background);
  
  if (keyDown('RIGHT_ARROW')) {
    balloon.x = balloon.x + 10
  }

  if(keyDown('LEFT_ARROW')){
    balloon.x = balloon.x - 10
  }
  if (keyDown('UP_ARROW')) {
    balloon.y = balloon.y + 10
  }
   if (keyDown('DOWN_ARROW')) {
    balloon.y = balloon.y - 10
  }
  drawSprites();
}