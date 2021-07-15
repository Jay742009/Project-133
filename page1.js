img = "";
status = "";
object = [];

function preload() {
    img = loadImage("Ac.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status1").innerHTML = "Status = Object Detecting";
}

function modelloaded() {
    console.log("cocossd is ready ");
    status = true;
    objectDetector.detect(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        object = results;
    }
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status1").innerHTML = "Status = Object Detected";

            fill("red");
            perscent = floor(object[i].confidence * 100);
            text(object[i].label + " " + perscent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }

}