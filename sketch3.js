class Ball {
  constructor(){
    this.x = 0;
    this.y = 300;
  }
  movey(movey){
    this.y = movey;
  }
  movex(){
    this.x = this.x + 1;
  }
  draw(){
    fill(255,255,255)
    ellipse(this.x,this.y,6,6);
  }
};

var d = [];
var up = 150;
var kx = 1;
var i = 0;
function setup(){
  createCanvas(600,600);
  /*for (var i = 0; i < 100; i++) {
    d[i] = new Ball();
  } */
};

function draw(){
  background(155,155,155)
  noStroke()
  fill(0,0,0)
  rect(298,0,2,600)
  rect(0,298,600,2)
  d.push(new Ball())
  for (var i = 0; i < d.length-1; i++) {
      d[i].movey(up)
      d[i].movex(kx)
      up = up + Math.sin(kx)
      kx = kx + 0.01
      d[i].draw()
    }
};
