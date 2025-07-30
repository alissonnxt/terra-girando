function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(726, 100, 97); //cor de fundo
  rotateY(millis()/2000); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(500, 800); //esfera 3D
  
  
}
