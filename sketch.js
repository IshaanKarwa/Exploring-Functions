var fr, mr, xr, zr;



function setup() {
  createCanvas(800,400);
 fr = createSprite(400, 200, 50, 50);
 mr = createSprite(200, 200 , 80, 30);
 xr = createSprite(100, 100, 50, 50);
 zr = createSprite(400, 100, 50, 20);
 xr.velocityX = 5
 zr.velocityX = -5

}

function draw() {
  background(0);  
  mr.x = World.mouseX
  mr.y = World.mouseY

  if (mr.x - fr.x < fr.width/2+mr.width/2&&fr.x - mr.x < fr.width/2+mr.width/2&&mr.y - fr.y < fr.width/2+mr.width/2&&fr.y - mr.y < fr.width/2+mr.width/2 ){
    mr.shapeColor = "blue"
    fr.shapeColor = "red"
}
else{
  mr.shapeColor = "grey"
  fr.shapeColor = "grey"
}
  if (xr.x - zr.x < xr.width/2 + zr.width/2&&zr.x - xr.x < xr.width/2+zr.width/2) 
  {
xr.velocityX = xr.velocityX * (-1)
zr.velocityX = zr.velocityX * (-1)
  }
  if (xr.y - zr.y < xr.width/2 + zr.width/2&&zr.y - xr.y < xr.width/2+zr.width/2) 
  {
xr.velocityY = xr.velocityY * (-1)
zr.velocityY = zr.velocityY * (-1)
  }
  drawSprites();
}