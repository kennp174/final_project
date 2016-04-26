//variables//

var stars1 = [];
var stars2 = [];
var stars3 = [];
var baseDepth = .5;
var scaleValueX=0;
var scaleValueY=0;

function setup(){
	createCanvas(windowWidth,windowHeight);
	noStroke();

	for (var i =0; i< 100; i++){
		stars1.push(new Star1(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),"white"));
	}
	for (var i =0; i< 70; i++){
		stars2.push(new Star2(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),"white"));
	}
	for (var i =0; i< 50; i++){
		stars3.push(new Star3(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),"white"));

	}

}

	function draw () {
		background("black");
		scaleValueX = mouseX-windowWidth/2;
		scaleValueY = mouseY-windowHeight/2;
		for (var i=0; i< 100; i++){
			stars1[i].drawStar();
		}
			for (var i=0; i< 70; i++){
				stars2[i].drawStar();
			}
		for (var i=0; i< 50; i++){
			stars3[i].drawStar();
		}

}

function Star1 (x,y,col){
	this.x = x+windowWidth/2;
	this.y = y+windowHeight/2;
	this.col = col;
	this.depth = baseDepth/4;
	this.drawStar = function (){
		fill(col);
		ellipse(this.x+scaleValueX*this.depth,this.y+scaleValueY*this.depth,3,3);
	}
}

	function Star2 (x,y,col){
		this.x = x+windowWidth/2;
		this.y = y+windowHeight/2;
		this.col = col;
		this.depth = baseDepth/2;
		this.drawStar = function (){
			fill(col);
			ellipse(this.x+scaleValueX*this.depth,this.y+scaleValueY*this.depth,6,6);
		}
	}

		function Star3 (x,y,col){
			this.x = x+windowWidth/2;
			this.y = y+windowHeight/2;
			this.col = col;
			this.depth = baseDepth*5;
			this.drawStar = function (){
				fill(col);
				ellipse(this.x+scaleValueX*this.depth,this.y+scaleValueY*this.depth,9,9);
			}
		}
