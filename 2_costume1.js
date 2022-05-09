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
let t = 255;

let circle1; // Declare variable 'img'.
let body1;

function setup() {
  createCanvas(1920, 1280);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  bg = createGraphics(width, height);
  bg.background(255,5);
  bg.noStroke();

  circle1 = loadImage('./costume/circle1.svg');
  body1 = loadImage('./costume/body1.svg');
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
  //move image by the width of image to the left
  translate(video.width, 0);
  //then scale it by -1 in the x-axis
  //to flip the image
  scale(-1, 1);
  //draw video capture feed as image inside p5 canvas
  // image(video, 0, 0);
  // background(255,255,255);


  if (pose) {
    if(poses.length >= 50) {
      poses.shift();
      clear();
    }
    poses.push(pose);
  }

  //Remove image code here
    // clear();
  // <<<<<<<<

  for(let i=0; i<poses.length; i++) {
    tempPose = poses[i];

    let eyeR = tempPose.rightEye;
    let eyeL = tempPose.leftEye;
    let s = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y)*1;
    let m = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y)*2;
    let l = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y)*3;
    let xl = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y)*4;


    //Nose (Face)
    fill(255, 0, 0);
    strokeWeight(0);
    // ellipse(pose.nose.x, tempPose.nose.y, m);
    image(circle1, pose.nose.x, ((tempPose.leftEye.y+tempPose.rightEye.y)/2), l, l);
    // image(circle1, pose.nose.x, tempPose.nose.y, l, l);


    // Eyes
    // ellipse(pose.leftEye.x, tempPose.leftEye.y, m);
    // ellipse(pose.rightEye.x, tempPose.rightEye.y, m);

    // Ears
    // ellipse(pose.leftEar.x, tempPose.leftEar.y, m);
    // ellipse(pose.rightEar.x, tempPose.rightEar.y, m);

    fill(0, 255, 0);

    //Shoulder
    image(circle1, pose.leftShoulder.x, tempPose.leftShoulder.y, s, s);
    image(circle1, pose.rightShoulder.x, tempPose.rightShoulder.y, s, s);
    // ellipse(pose.leftShoulder.x, tempPose.leftShoulder.y, m);
    // ellipse(pose.rightShoulder.x, tempPose.rightShoulder.y, m);
    // ellipse(pose.leftShoulder.x+100, tempPose.leftShoulder.y+100, m);
    // ellipse(pose.rightShoulder.x+100, tempPose.rightShoulder.y+100, m);

    //Shoulder ~ Elbow
    image(circle1, (pose.leftShoulder.x+pose.leftElbow.x)/2, (tempPose.leftShoulder.y+tempPose.leftElbow.y)/2, s, s);
    image(circle1, (pose.rightShoulder.x+pose.rightElbow.x)/2, (tempPose.rightShoulder.y+tempPose.rightElbow.y)/2, s, s);
    // ellipse((pose.leftShoulder.x+pose.leftElbow.x)/2, (tempPose.leftShoulder.y+tempPose.leftElbow.y)/2, m);
    // ellipse((pose.rightShoulder.x+pose.rightElbow.x)/2, (tempPose.rightShoulder.y+tempPose.rightElbow.y)/2, m);

    //Elbow
    image(circle1, pose.leftElbow.x, tempPose.leftElbow.y, s, s);
    image(circle1, pose.rightElbow.x, tempPose.rightElbow.y, s, s);
    // ellipse(pose.leftElbow.x, tempPose.leftElbow.y, m);
    // ellipse(pose.rightElbow.x, tempPose.rightElbow.y, m);

    //Elbow ~ Wrist
    image(circle1, (pose.leftElbow.x+pose.leftWrist.x)/2, (tempPose.leftElbow.y+tempPose.leftWrist.y)/2, s, s);
    image(circle1, (pose.rightElbow.x+pose.rightWrist.x)/2, (tempPose.rightElbow.y+tempPose.rightWrist.y)/2, s, s);
    // ellipse((pose.leftElbow.x+pose.leftWrist.x)/2, (tempPose.leftElbow.y+tempPose.leftWrist.y)/2, m);
    // ellipse((pose.rightElbow.x+pose.rightWrist.x)/2, (tempPose.rightElbow.y+tempPose.rightWrist.y)/2, m);

    //Wrist
    image(circle1, pose.leftWrist.x, tempPose.leftWrist.y, xl, xl);
    image(circle1, pose.rightWrist.x, tempPose.rightWrist.y, xl, xl);
    // ellipse(pose.leftWrist.x, tempPose.leftWrist.y, m);
    // ellipse(pose.rightWrist.x, tempPose.rightWrist.y, m);

    //Hip
    image(circle1, pose.leftHip.x, tempPose.leftHip.y, s, s);
    image(circle1, pose.rightHip.x, tempPose.rightHip.y, s, s);
    // ellipse(pose.leftHip.x, tempPose.leftHip.y, m);
    // ellipse(pose.rightHip.x, tempPose.rightHip.y, m);

    //Hip ~ Knee
    image(circle1, (pose.leftHip.x+pose.leftKnee.x)/2, (tempPose.leftHip.y+tempPose.leftKnee.y)/2, s, s);
    image(circle1, (pose.rightHip.x+pose.rightKnee.x)/2, (tempPose.rightHip.y+tempPose.rightKnee.y)/2, s, s);
    // ellipse((pose.leftHip.x+pose.leftKnee.x)/2, (tempPose.leftHip.y+tempPose.leftKnee.y)/2, m);
    // ellipse((pose.rightHip.x+pose.rightKnee.x)/2, (tempPose.rightHip.y+tempPose.rightKnee.y)/2, m);

    //Knee
    image(circle1, pose.leftKnee.x, tempPose.leftKnee.y, s, s);
    image(circle1, pose.rightKnee.x, tempPose.rightKnee.y, s, s);
    // ellipse(pose.leftKnee.x, tempPose.leftKnee.y, m);
    // ellipse(pose.rightKnee.x, tempPose.rightKnee.y, m);

    //Knee ~ Ankle
    // ellipse((pose.leftKnee.x+pose.leftAnkle.x)/2, (tempPose.leftKnee.y+tempPose.leftAnkle.y)/2, m);
    // ellipse((pose.rightKnee.x+pose.rightAnkle.x)/2, (tempPose.rightKnee.y+tempPose.rightAnkle.y)/2, m);

    //Ankle
    // image(circle1, pose.leftAnkle.x, tempPose.leftAnkle.y, m, m);
    // image(circle1, pose.rightAnkle.x, tempPose.rightAnkle.y, m, m);
    // ellipse(pose.leftAnkle.x, tempPose.leftAnkle.y, m);
    // ellipse(pose.rightAnkle.x, tempPose.rightAnkle.y, m);


    //Body
    // image(body1, ((pose.leftShoulder.x+pose.rightShoulder.x)/2),((tempPose.leftShoulder.y+tempPose.rightShoulder.y)/2), xl, xl);
    fill(255, 0, 255);

    //Hip
    // image(body1, (pose.leftHip.x+pose.rightHip.x)/2,(((tempPose.leftShoulder.y+tempPose.rightShoulder.y)/2)+((tempPose.leftHip.y+tempPose.rightHip.y)/2))/2, l, l);
    ellipse((pose.leftHip.x+pose.rightHip.x)/2,(((tempPose.leftShoulder.y+tempPose.rightShoulder.y)/2)+((tempPose.leftHip.y+tempPose.rightHip.y)/2))/2, l);



    //Keypoints
    for (let i = 0; i < tempPose.keypoints.length; i++) {
      let x = tempPose.keypoints[i].position.x;
      let y = tempPose.keypoints[i].position.y;
      fill(255,0,255);
      ellipse(x,y,20);
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
