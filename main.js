leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    sound = loadSound("HarryPotter.mp3");
    sound = loadSound("TheAvengers.mp3");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}

function draw() {
    image(video, 0, 0, 700, 500);
}

function modelLoaded() {
    console.log("Your Model Is Initialized");
}

function gotResult(results) {
    console.log(results);

    if (results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(leftWristX, leftWristY, rightWristX, rightWristY);
    }
}

function playMusic() {
    sound.play();
    sound.setVolume(1);
    sound.rate(1);
}