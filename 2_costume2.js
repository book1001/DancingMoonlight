// ml5.js: Pose Estimation with PoseNet
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/Courses/ml5-beginners-guide/7.1-posenet.html
// https://youtu.be/OIo-DIOkNVg
// https://editor.p5js.org/codingtrain/sketches/ULA97pJXR

let video;
let poseNet;
let poses = [];
let pose;
let skeleton;
// let bg;
let s = 250;
let t = 255;

function setup() {
  createCanvas(1920, 1280);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  bg = createGraphics(width, height);
  bg.noStroke();
}

function gotPoses(poses) {
  //console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  // Flip
  translate(video.width, 0);
  scale(-1, 1);
  strokeWeight(0);
  // image(video, 0, 0);
  // background(255,255,255);

  if (pose) {
    if(poses.length >= 50) {
      poses.shift();
    }
    poses.push(pose);
  }

  // Remove image code here
  clear();
  // <<<<<<<<

  for(let i=0; i<poses.length; i++) {
    tempPose = poses[i];

    let eyeR = tempPose.rightEye;
    let eyeL = tempPose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    fill(255, 255, 0);
    square(pose.nose.x, tempPose.nose.y, d);


    fill(255, 255, 0);
    //Wrist
    square(tempPose.rightWrist.x, tempPose.rightWrist.y, s);
    square(tempPose.leftWrist.x, tempPose.leftWrist.y, s);

    //Keypoints
    for (let i = 0; i < tempPose.keypoints.length; i++) {
      let x = tempPose.keypoints[i].position.x;
      let y = tempPose.keypoints[i].position.y;
      fill(255, 255, 0);
      square(x,y,20);
    }

    //Keystroke
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(0);
      stroke(255);
      line(a.position.x, a.position.y,b.position.x,b.position.y);
    }
  }

}


// function mousePressed() {
//   remove(); // remove whole sketch on mouse press
// }
