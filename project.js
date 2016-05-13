//variables//

var stars1 = [];
var stars2 = [];
var stars3 = [];

var baseDepth = .5;
var scaleValueX=0;
var scaleValueY=0;
var img;
var signs =[];
var aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces;
var aries1, taurus1, gemini1, cancer1, leo1, virgo1, libra1, scorpio1, sagittarius1, capricorn1, aquarius1, pisces1;
var ariesSymbol, taurusSymbol, geminiSymbol, cancerSymbol, virgoSymbol, libraSymbol, scorpioSymbol, sagittariusSymbol, capricornSymbol, aquariusSymbol, piscesSymbol;
//var option;
//var date;
var activeSign = "none";
var topDisplay = "";
var midDisplay = "";
var botDisplay = "";
//var xNum;
//var yNum;




function preload (){
		aries = loadImage('img/aries.png');
		taurus = loadImage('img/taurus.png');
		gemini = loadImage('img/gemini.png');
		cancer = loadImage('img/cancer.png');
		leo = loadImage('img/leo.png');
		virgo = loadImage('img/virgo.png');
		libra = loadImage('img/libra.png');
		scorpio = loadImage('img/scorpio.png');
		sagittarius = loadImage('img/sagittarius.png');
		capricorn = loadImage('img/capricorn.png');
		aquarius = loadImage('img/aquarius.png');
		pisces = loadImage('img/pisces.png');

		ariesSymbol = loadImage('img/symbols/aries.png');
		taurusSymbol = loadImage('img/symbols/taurus.png');
		geminiSymbol = loadImage('img/symbols/gemini.png');
		cancerSymbol = loadImage('img/symbols/cancer.png');
		leoSymbol = loadImage('img/symbols/leo.png');
		virgoSymbol = loadImage('img/symbols/virgo.png');
		libraSymbol = loadImage('img/symbols/libra.png');
		scorpioSymbol = loadImage('img/symbols/scorpio.png');
		sagittariusSymbol = loadImage('img/symbols/sagittarius.png');
		capricornSymbol = loadImage('img/symbols/capricorn.png');
		aquariusSymbol = loadImage('img/symbols/aquarius.png');
		piscesSymbol = loadImage('img/symbols/pisces.png');

		ariesText = loadImage('img/text/ariestext.png');
		taurusText = loadImage('img/text/taurustext.png');
		geminiText = loadImage('img/text/geminitext.png');
		cancerText = loadImage('img/text/cancertext.png');
		leoText = loadImage('img/text/leotext.png');
		virgoText = loadImage('img/text/virgotext.png');
		libraText = loadImage('img/text/libratext.png');
		scorpioText = loadImage('img/text/scorpiotext.png');
		sagittariusText = loadImage('img/text/sagittariustext.png');
		capricornText = loadImage('img/text/capricorntext.png');
		aquariusText = loadImage('img/text/aquariustext.png');
		piscesText = loadImage('img/text/piscestext.png');


}


function setup(){
	createCanvas(windowWidth,windowHeight);
	noStroke();
	imageMode(CENTER);
	textFont("Georgia");
	textAlign(CENTER);
	for (var i =0; i< 100; i++){
		stars1.push(new Star1(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),"white"));
	}
	for (var i =0; i< 70; i++){
		stars2.push(new Star2(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),"white"));
	}
	for (var i =0; i< 50; i++){
		stars3.push(new Star3(random(-windowWidth,windowWidth),random(-windowHeight,windowHeight),"white"));
	}

		aries1 =  new Sign (windowWidth/2-425,windowHeight/2+175, aries, ariesSymbol);
		taurus1 =  new Sign (windowWidth/2-215,windowHeight/2+255, taurus, taurusSymbol);
		gemini1 = new Sign (windowWidth/2, windowHeight-100, gemini, geminiSymbol);
		cancer1 = new Sign (windowWidth/2+215,windowHeight/2+255, cancer, cancerSymbol);
		leo1 = new Sign (windowWidth/2+370,windowHeight/2+175, leo, leoSymbol);
		virgo1 = new Sign (windowWidth/2+475,windowHeight/2, virgo, virgoSymbol);
		libra1 = new Sign (windowWidth/2+380,windowHeight/2-150, libra, libraSymbol);
		scorpio1 = new Sign (windowWidth/2+260,windowHeight/2-270, scorpio, scorpioSymbol);
		sagittarius1 = new Sign (windowWidth/2,100, sagittarius,sagittariusSymbol);
		capricorn1 = new Sign (windowWidth/2-225,windowHeight/2-285, capricorn, capricornSymbol);
		aquarius1 = new Sign (windowWidth/2-400,windowHeight/2-195, aquarius, aquariusSymbol);
		pisces1 = new Sign (windowWidth/2-475,windowHeight/2, pisces, piscesSymbol);

		none = new SignText ("PAGE TITLE", "Select a sign.");

		ariesT = new SignText ("ARIES", "March 21 - April 19", ariesText);
		taurusT = new SignText ("Taurus", "It's a lion.");
		geminiT = new SignText ("GEMINI", "It's a lion.");
		cancerT = new SignText ("CANCER", "It's a crab.");
		leoT = new SignText ("LEO", "It's a lion.");
		virgoT = new SignText ("VIGRO", "It's a lion.");
		libraT = new SignText ("LIBRA", "It's a crab.");
		scorpioT = new SignText ("SCORPIO", "It's a crab.");
		sagittariusT = new SignText ("SAGITTARIUS", "It's a crab.");
		capricornT = new SignText ("CAPRICORN", "It's a crab.");
		aquariusT = new SignText ("AQUARIUS", "It's a crab.");
		piscesT = new SignText ("PISCES", "It's a crab.");


}

	function draw () {
		//xNum = windowWidth/2;
		//yNum = windowHeight/2;
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

		activeSign = "none";

		if (mouseX>815 && mouseX<890 && mouseY>550 && mouseY<690){
					activeSign = "cancer";
					cancer1.drawSymbol()
					cancerT.drawText();
			} else {cancer1.drawSign();}

		if (mouseX>980 && mouseX<1090 && mouseY>494 && mouseY<610){
					activeSign = "leo";
					leo1.drawSymbol();
					leoT.drawText();
		} else {leo1.drawSign();}

		if (mouseX>130 && mouseX<250 && mouseY>490 && mouseY<600){
					activeSign = "aries";
					aries1.drawSymbol();
					ariesT.drawText();
		} else {aries1.drawSign();}

		if (mouseX>140 && mouseX<270 && mouseY>136 && mouseY<235){
					activeSign = "aquarius";
					aquarius1.drawSymbol();
					aquariusT.drawText();
		} else {aquarius1.drawSign();}

		if (mouseX>380 && mouseX<468 && mouseY>45 && mouseY<150){
					activeSign = "capricorn";
					capricorn1.drawSymbol();
					capricornT.drawText();
		} else {capricorn1.drawSign();}

		if (mouseX>570 && mouseX<810 && mouseY>540 && mouseY<730){
					activeSign = "gemini";
					gemini1.drawSymbol();
					geminiT.drawText();
		} else {gemini1.drawSign();}

		if (mouseX>965 && mouseX<1075 && mouseY>145 && mouseY<260){
					activeSign = "libra";
					libra1.drawSymbol();
					libraT.drawText();
		} else {libra1.drawSign();}

		if (mouseX>349 && mouseX<489 && mouseY>578 && mouseY<700){
					activeSign = "taurus";
					taurus1.drawSymbol();
		} else {taurus1.drawSign();}

		if (mouseX>1090 && mouseX<1166 && mouseY>318 && mouseY<428){
					activeSign = "virgo";
					virgo1.drawSymbol();
					virgoT.drawText();
		} else {virgo1.drawSign();}

		if (mouseX>820 && mouseX<940 && mouseY>80 && mouseY<180){
					activeSign = "scorpio";
					scorpio1.drawSymbol();
					scorpioT.drawText();
		} else {scorpio1.drawSign();}

		if (mouseX>100 && mouseX<220 && mouseY>307 && mouseY<430){
					activeSign = "pisces";
					pisces1.drawSymbol();
					piscesT.drawText();
		} else {pisces1.drawSign();}

		if (mouseX>528 && mouseX<650 && mouseY>80 && mouseY<290){
					activeSign = "sagittarius";
					sagittarius1.drawSymbol();
					sagittariusT.drawText();
		} else {sagittarius1.drawSign();}



		if (activeSign=="cancer"){
				topDisplay=cancerT.name;
				botDisplay=cancerT.desc;
		}
		if (activeSign=="leo"){
				topDisplay=leoT.name;
				botDisplay=leoT.desc;
		}
		if (activeSign=="aries"){
				topDisplay=ariesT.name;
				botDisplay=ariesT.desc;
		}
		if (activeSign=="aquarius"){
				topDisplay=aquariusT.name;
				botDisplay=aquariusT.desc;
		}
		if (activeSign=="capricorn"){
				topDisplay=capricornT.name;
				botDisplay=capricornT.desc;
		}
		if (activeSign=="gemini"){
				topDisplay=geminiT.name;
				botDisplay=geminiT.desc;
		}
		if (activeSign=="libra"){
				topDisplay=libraT.name;
				botDisplay=libraT.desc;
		}
		if (activeSign=="pisces"){
				topDisplay=piscesT.name;
				botDisplay=piscesT.desc;
		}
		if (activeSign=="sagittarius"){
				topDisplay=sagittariusT.name;
				botDisplay=sagittariusT.desc;
		}
		if (activeSign=="scorpio"){
				topDisplay=scorpioT.name;
				botDisplay=scorpioT.desc;
		}
		if (activeSign=="taurus"){
				topDisplay=taurusT.name;
				botDisplay=taurusT.desc;
		}
		if (activeSign=="virgo"){
				topDisplay=virgoT.name;
				botDisplay=virgoT.desc;
		}
		if (activeSign=="none"){
				topDisplay=none.name;
				botDisplay=none.desc;
		}


		textSize (24);
		text (topDisplay,windowWidth/2,windowHeight/2-50);
		textSize (12);
		text (botDisplay,windowWidth/2,windowHeight/2);

// shows the xy values (delete when finished!!!!!!)

		text (mouseX+"," + mouseY, mouseX, mouseY);

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

		function Sign (x,y,img,symbol){
			this.png = img;
			this.symbol = symbol;
			this.x = x;
			this.y = y;
			this.drawSymbol = function(){
				image(this.symbol,this.x,this.y); }
			this.drawSign = function(){
				image(this.png, this.x, this.y);

			}
			this.drawText = function(){
				fill("blue");
				text (this.words,this.x,this.y);
			}
}
			function SignText (name, desc, img){
				this.name = name;
				this.desc = desc;
				this.png = img;
				this.drawText = function(){
					image(this.png, windowWidth/2,windowHeight/2);

			}
}
