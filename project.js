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
var option;
var date;
var activeSign = "none";
var topDisplay = "";
var botDisplay = "";
var xNum;
var yNum;




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

		ariesSymbol = loadImage('');
		taurusSymbol = loadImage('');
		geminiSymbol = loadImage('');
		cancerSymbol = loadImage('');
		leoSymbol = loadImage('');
		virgoSymbol = loadImage('');
		libraSymbol = loadImage('');
		scorpioSymbol = loadImage('');
		sagittariusSymbol = loadImage('');
		capricornSymbol = loadImage('');
		aquariusSymbol = loadImage('');
		piscesSymbol = loadImage('');
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

		aries1 =  new Sign (windowWidth/2-425,windowHeight/2+175, aries, ariesSymbol, "blah blah blah");
		taurus1 =  new Sign (windowWidth/2-215,windowHeight/2+255, taurus, taurusSymbol, "blah blah blah");
		gemini1 = new Sign (windowWidth/2, windowHeight-100, gemini, geminiSymbol, "blah blah blah");
		cancer1 = new Sign (windowWidth/2+215,windowHeight/2+255, cancer, cancerSymbol, "blah blah blah");
		leo1 = new Sign (windowWidth/2+370,windowHeight/2+175, leo, leoSymbol, "blah blah blah");
		virgo1 = new Sign (windowWidth/2+475,windowHeight/2, virgo, virgoSymbol, "blah blah blah");
		libra1 = new Sign (windowWidth/2+380,windowHeight/2-150, libra, libraSymbol, "blah blah blah");
		scorpio1 = new Sign (windowWidth/2+260,windowHeight/2-270, scorpio, scorpioSymbol, "blah blah blah");
		sagittarius1 = new Sign (windowWidth/2,100, sagittarius,sagittariusSymbol, "blah blah blah");
		capricorn1 = new Sign (windowWidth/2-225,windowHeight/2-285, capricorn, capricornSymbol, "blah blah blah");
		aquarius1 = new Sign (windowWidth/2-400,windowHeight/2-195, aquarius, aquariusSymbol,"blah blah blah");
		pisces1 = new Sign (windowWidth/2-475,windowHeight/2, pisces, piscesSymbol, "blah blah blah");

		none = new SignText ("PAGE TITLE", "Select a sign.");

		ariesT = new SignText ("ARIES", "It's a lion.");
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


		scorpio1.drawSign();
		sagittarius1.drawSign();
		pisces1.drawSign();

		activeSign = "none";

		if (mouseX>845 && mouseX<945){
				if (mouseY>550 && mouseY<690){
					activeSign = "cancer";
					cancer1.drawSymbol()
				}
			} else {cancer1.drawSign();}

		if (mouseX>980 && mouseX<1090){
				if (mouseY>441 && mouseY<641){
					activeSign = "leo";
					leo1.drawSymbol();
				}
		} else {leo1.drawSign();}

		if (mouseX>168 && mouseX<345){
				if (mouseY>490 && mouseY<600){
					activeSign = "aries";
					aries1.drawSymbol();
				}
		} else {aries1.drawSign();}

		if (mouseX>144 && mouseX<344){
				if (mouseY>80 && mouseY<290){
					activeSign = "aquarius";
					aquarius1.drawSymbol();
				}
		} else {aquarius1.drawSign();}

		if (mouseX>400 && mouseX<520){
				if (mouseY>10 && mouseY<180){
					activeSign = "capricorn";
					capricorn1.drawSymbol();
					}
		} else {capricorn1.drawSign();}

		if (mouseX>570 && mouseX<810){
				if (mouseY>540 && mouseY<730){
					activeSign = "gemini";
					gemini1.drawSymbol();
				}
		} else {gemini1.drawSign();}

		if (mouseX>144 && mouseX<344){
				if (mouseY>80 && mouseY<290){
					activeSign = "libra";
					libra1.drawSymbol();
				}
		} else {libra1.drawSign();}

		if (mouseX>144 && mouseX<344){
				if (mouseY>80 && mouseY<290){
					activeSign = "taurus";
					taurus1.drawSymbol();
				}
		} else {taurus1.drawSign();}

		if (mouseX>144 && mouseX<344){
				if (mouseY>80 && mouseY<290){
					activeSign = "virgo";
					virgo1.drawSymbol();
				}
		} else {virgo1.drawSign();}



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

		function Sign (x,y,img,symbol,words){
			this.png = img;
			this.symbol = symbol;
			this.x = x;
			this.y = y;
			this.words = words;
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
			function SignText (name, desc){
				this.name = name;
				this.desc = desc;
			}
