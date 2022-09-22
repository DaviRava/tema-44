const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var jogador, jogadorIMG, jogadorA;
var ball, ballIMG;
var backgroundIMG;




function preload() {
  jogadorA = loadAnimation("./imagens/anima1.png", "./imagens/anima2.png", "./imagens/anima3.png");
  jogadorIMG = loadImage("./imagens/anima1.png")
  backgroundIMG = loadImage("./imagens/fundo.jpg");
  ballIMG = loadImage("./imagens/bola.png");


}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  jogadorIMG.frameDelay = 40
  jogador = createSprite(width/2 + 100, height - 120)
  jogador.addImage("jogadorIMG", jogadorIMG)
  jogador.addAnimation("jogadorA", jogadorA)
  jogador.scale = 0.25

  ball = createSprite(width/2 + 126, 180)
  ball.addImage("ball", ballIMG)
  ball.scale = 0.006
  console.log(ball.y)

  
}


function draw() {
  image(backgroundIMG, 0, 0, 1200, 600)
  Engine.update(engine);

  if(keyIsDown (UP_ARROW)){
    ball.y -= 1
    console.log(ball.y)
  }
  
  drawSprites()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    ball.y -= 1
    console.log(ball.y)
  }

  if(keyCode === DOWN_ARROW){
    ball.y += 1
  }

  if(keyCode === LEFT_ARROW){
    ball.x -= 1
  }

  if(keyCode === RIGHT_ARROW){
    ball.x += 1
  }
}

/*velocidade vai aumentar e diminuir com as teclas pra cima e para baixo e o espaco tecla para atirar a bola
e mudar o x tambem*/


