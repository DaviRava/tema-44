const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var jogador, jogadorIMG
var backgroundIMG  




function preload() {
  jogadorIMG = loadImage("./imagens/bola.png");
  backgroundIMG = loadImage("./imagens/fundo.jpg")


}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;


  jogador = createSprite(width/2 + 350, height - 120)
  jogador.addImage("jogador", jogadorIMG)
  
}


function draw() {
  image(backgroundIMG, 0, 0, 1200, 600)
  Engine.update(engine);



  drawSprites()
}

