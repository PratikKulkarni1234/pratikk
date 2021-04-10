function setup(){
    canvas = createCanvas(600, 600);
    canvas.position(580, 400);
     video = createCapture(VIDEO);
     video.hide();
}

function draw(){
    image(video , 0 , 0 , 600 , 600)
}