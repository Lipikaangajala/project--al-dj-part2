
song1=""
song2=""

function setup(){
    
     canvas = createCanvas(550, 550);
     canvas.centre;

     video = createCapture(VIDEO);
 video.hide();
}

function preload(){
     song1 = loadSound("BTS-Mikrokosmos-(HiphopKit.com).mp3");
     song2 = loadSound("Life-Goes-On---BTS-320(PagalWorld).mp3");
}

function draw(){
     Image(video, 0, 0, 600, 500);
}
