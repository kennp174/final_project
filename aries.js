

var aries;
var sign;
var img;

function preload (){
		aries = loadImage('img/ariessign.png');
  }

  function setup(){
  	createCanvas(windowWidth,windowHeight);
  	noStroke();

  }

  function drawMyImage (){
    image(img)
  }


  function draw (){
    image(aries,0,0, aries.width, aries.height);
    imageMode(CENTER);
  }
