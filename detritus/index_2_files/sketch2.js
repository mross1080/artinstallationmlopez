// var img_num = 43;
var img_num = 40;
// var img_num = 5;


var imgs = [];

var timing = 1;
var currentTime = 0;
var currentImage = 0;

var timer = 0;

var vel = 1;
var acce = 2;

var slow = false;
var stop = false;
var speed = false;

var frameR = 15;

function preload() {
  //img = loadImage('img/img_01.jpg');
  for(var i = 0; i <= 40; i++){

  		imgs[i] = loadImage('img/ML2018-033_' + (i+1) + '.jpg');
  	
  }
}
function setup(){
	createCanvas(windowWidth,windowHeight);
		// createCanvas(768,windowHeight);

	background(255);
	/*
	image(img, (windowWidth - img.width) / 2, 0);*/
}

function draw(){
	frameRate(frameR);

	
	currentTime++;

	
	imgs[currentImage].resize(0,windowHeight);
	// image(imgs[currentImage], (windowWidth - imgs[currentImage].width) / 2, 0);
		image(imgs[currentImage], 0, 0,windowWidth,windowHeight);

	// createImg('img/ML2018-033_' + (currentImage+1) + '.jpg')
	// document.getElementById("mainImage").src = 'img/ML2018-033_' + (currentImage+1) + '.jpg';


	getTiming();

	if(int(random(0,20)) == 5 && !slow && !speed){
		slow = true;
	}

	if(slow && frameR > 1){
		frameR -= vel;
	}

	if(frameR == 1 && slow && !speed && !stop){
		stop = true;
	}

	if(stop && frameR == 1 && slow && !speed) {
		timer++;
		console.log(timer);
	}

	if(stop && frameR == 1 && slow && !speed && timer == 15){
		slow = false;
		speed = true;
		stop = false;
		timer = 0;
	}

	if(speed && frameR < 15){
		frameR += vel;
	}

	if(frameR == 15){
		speed = false;
	}
	console.log("Processing image : " + currentImage);

	// console.log(frameR);
}

function getTiming(){

	if(currentTime == timing){
		currentTime = 0;
		//vel += acce;
		//timing += vel;
		if(currentImage < img_num - 1 && !stop)
			currentImage++;
		else if(!stop)
			currentImage = 0;
	}
}