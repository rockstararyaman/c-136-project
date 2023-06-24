// object_name = document.getElementById("object_name").value; }

Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(380,290);
    canvas.position(570,290);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
    input_text = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw(){
    image(video,0,0,523,290);
}