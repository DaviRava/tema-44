const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var jogador, jogadorIMG, jogadorA;
var ball, ballIMG;
var backgroundIMG;
var protecao1, protecao2, protecao3, ponto
var placar = 0




function preload() {
  jogadorA = loadAnimation("./imagens/anima1.png", "./imagens/anima2.png", "./imagens/anima3.png");
  jogadorIMG = loadImage("./imagens/anima1.png")
  backgroundIMG = loadImage("./imagens/fundo.jpg");
  ballIMG = loadImage("./imagens/bola.png");


}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  jogadorIMG.frameDelay = 40
  jogador = createSprite(width / 2 + 100, height - 120)
  jogador.addImage("jogadorIMG", jogadorIMG)
  jogador.addAnimation("jogadorA", jogadorA)
  jogador.scale = 0.25

  ball = createSprite(width / 2 + 126, 420)
  ball.addImage("ball", ballIMG)
  ball.scale = 0.006
  console.log(ball.y)

  protecao1 = createSprite(972, 288, 5, 50)
  protecao3 = createSprite(1022, 288, 5, 50)
  protecao2 = createSprite(997, 313, 55, 5)
  ponto = createSprite(997, 307.5, 42.5, 5)


}


function draw() {
  image(backgroundIMG, 0, 0, 1200, 600)
  Engine.update(engine);

  if (keyIsDown(UP_ARROW)) {
    ball.y -= 10
    console.log(ball.y)
  }
  if (keyIsDown(DOWN_ARROW)) {
    ball.y += 10
    console.log(ball.y)
  }
  if (keyIsDown(LEFT_ARROW)) {
    ball.x -= 10
    console.log(ball.y)
  }
  if (keyIsDown(RIGHT_ARROW)) {
    ball.x += 10
    console.log(ball.y)
  }
  drawSprites()

  if (ball.isTouching(ponto)) {
    placar += 3
  }

}

/*velocidade vai aumentar e diminuir com as teclas pra cima e para baixo e o espaco tecla para atirar a bola
e mudar o x tambem*/


