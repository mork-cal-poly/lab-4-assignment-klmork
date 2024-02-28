let clicked = false;
let shouldMilesFall = false;

let butterfly = {
  x: 50,
  y: 300,
  s: 0.5,
  yOffset: 300,
  xmin: -255,
  xmax: 115,
  ymin: -145,
  ymax: 100,
};

let miles = {
  x: 300,
  y: 400,
  r: 0,
  s: 1,
};

let clownPosX = -200

let clownChange = 0;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawBackground();
  drawButterfly(butterfly.x, butterfly.y, butterfly.s);
  drawMiles(miles.x, miles.y, miles.r, miles.s);

  drawClown(clownPosX, 100, 1, PI/2);

  clownPosX = clownPosX + clownChange;

  if (clownPosX >= 80) {
    clownChange = 0;
  }

  drawCreature(300,400,0.3)


  updateButterfly();
  updateMiles();
}

function drawBackground() {
  background(230, 151, 151);
  fill(153, 22, 22, 100); // rust
  noStroke();
  triangle(0, 30, 400, 300, 0, 400);

  fill(107, 0, 230, 200); // dark purple
  triangle(-50, 200, 350, -150, 450, -170);
  triangle(20, 0, 400, 250, 400, 275);
}

function drawMiles(x, y, r, s) {
  push();
  translate(x, y);
  scale(s);
  rotate(r);

  //draw head
  fill(0);
  noStroke();
  ellipse(0, -155, 60, 75);
  //eye ring
  fill(255, 0, 0);
  ellipse(-15, -160, 22, 17);
  ellipse(15, -160, 22, 17);
  //eyes
  fill(255);
  ellipse(-15, -160, 18, 13);
  ellipse(15, -160, 18, 13);

  //arms
  fill(0);
  ellipse(-40, -105, 50, 15);
  ellipse(40, -105, 50, 15);
  //hands
  ellipse(-60, -105, 15, 15);
  ellipse(60, -105, 15, 15);

  //body miles
  fill(0);
  ellipse(0, -80, 50, 75);
  //spider logo
  stroke(255, 0, 0);
  fill(255, 0, 0);
  ellipse(0, -95, 10, 15);
  //top
  line(-15, -105, 0, -100);
  line(15, -105, 0, -100);
  //top-middle
  line(-15, -100, 0, -100);
  line(15, -100, 0, -100);
  //bottom
  line(-15, -95, 0, -95);
  line(15, -95, 0, -95);
  //bottom-middle
  line(-15, -90, 0, -95);
  line(15, -90, 0, -95);

  noStroke();
  //feet
  fill(0);
  ellipse(-15, -5, 20, 10);
  ellipse(15, -5, 20, 10);
  //legs
  ellipse(-10, -30, 20, 50);
  ellipse(10, -30, 20, 50);

  // show origin
  fill(0, 255, 255);
  ellipse(0, 0, 10, 10);
  stroke(255, 255, 0);
  line(-100, 0, 100, 0);
  stroke(0, 0, 255);
  line(0, 100, 0, -100);
  pop();
}

function updateMiles() {
  if (!shouldMilesFall) {
    return;
  }
  miles.r += PI / 40;

  if (miles.s >= 0) {
    miles.s -= 0.005;
  }
}

function drawButterfly(x, y, s) {
  // butterfly
  push();
  translate(x, y);
  scale(s);

  // --------- BACK WING ----------
  fill(9, 40, 153);
  beginShape();
  curveVertex(-300, -90); // guide
  curveVertex(-250, -100); // left top bump
  curveVertex(-175, -95); // valley
  curveVertex(-90, -125); // top right
  //curveVertex(-50, -55);
  curveVertex(0, 0); // origin
  curveVertex(-100, 3); // bottom
  curveVertex(-250, -100); // left again
  curveVertex(-255, -200); // guide
  endShape();

  fill(34, 150, 230, 100); // purple
  ellipse(-100, -50, 80, 80);
  ellipse(-100, -50, 100, 100);

  // --------- FRONT WING ----------
  fill(34, 150, 230); // light blue
  stroke(14, 96, 153); // darker blue green
  //strokeWeight(10);
  beginShape();
  curveVertex(-75, -145); // guide
  curveVertex(0, -140); // careful which start point
  curveVertex(75, -145); // top right bump
  curveVertex(0, 0); // bottom point
  curveVertex(-75, -145); // left top bump
  curveVertex(0, -140); // valley
  curveVertex(75, -145); // guide
  endShape();

  fill(107, 0, 230, 100); // purple
  ellipse(0, -30, 30, 55);
  ellipse(0, -40, 40, 75);

  // --------- HEAD ----------
  push();
  translate(100, -35);
  rotate(PI / 3);
  fill(107, 0, 230, 100); // purple
  noStroke();
  // head
  ellipse(0, 0, 20, 40);
  ellipse(0, 0, 30, 50);
  stroke(107, 0, 230, 100);
  strokeWeight(10);
  line(0, 60, 0, 210);
  noStroke();
  // chest
  translate(0, 60);
  ellipse(0, 0, 20, 50);
  // back
  translate(0, 150);
  ellipse(0, 0, 20, 40);
  pop();

  pop();
}

function drawClown(x, y, s, r) {
  push();
  translate(x, y);
  scale(s);
  rotate(r)
  
  stroke(1);

  //hair
  fill(255, 150, 0);
  ellipse(-15, -20, 50, 35);
  ellipse(15, -20, 50, 35);
  
  //head
  fill(250);
  ellipse(0, 0, 60);
  
  //eyes
  fill(0, 255, 0);
  ellipse(-15, -5, 15, 20);
  ellipse(15, -5, 15, 20);
  fill(0);
  ellipse(-15, -5, 5);
  ellipse(15, -5, 5);
  
  //nose
  fill(255, 0, 0);
  ellipse(0, 0, 20);
  
  //legs
  fill(50);
  rect(-25, 115, 25, 85, 20);
  rect(0, 115, 25, 85, 20);
  fill(30);
  arc(-12.5, 200, 25, 25, PI, 0);
  arc(12.5, 200, 25, 25, PI, 0);
  
  //body
  fill(245);
  rect(-30, 30, 60, 90, 20);
  
  //jacket
  fill(50);
  rect(-30, 30, 20, 90, 10);
  rect(10, 30, 20, 90, 10);

  //bow
  fill(220, 0, 0);
  ellipse(0, 40, 10);
  triangle(-5 ,40, -15, 33, -15, 47);
  triangle(5, 40, 15, 33, 15, 47);
  
  //arms
  fill(50);
  rect(-50, 33, 20, 70, 20);
  rect(30, 33, 20, 70, 20);
  fill(241, 213, 160);
  ellipse(-40, 105, 20);
  ellipse(40, 105, 20);
  
  pop();
}

function updateButterfly() {
  if (!clicked) {
    return;
  }
  let sinY = 50 * sin((1 / 10) * butterfly.x);
  butterfly.y = sinY + butterfly.yOffset;

  butterfly.x += 1;
  butterfly.yOffset -= 1;

  if (butterfly.x >= miles.x) {
    shouldMilesFall = true;
  }
}

function mousePressed() {
  let leftSide = butterfly.xmin * butterfly.s + butterfly.x;
  let rightSide = butterfly.xmax * butterfly.s + butterfly.x;
  let topSide = butterfly.ymin * butterfly.s + butterfly.y;
  let botSide = butterfly.ymax * butterfly.s + butterfly.y;
  if (
    mouseX > leftSide &&
    mouseX < rightSide &&
    mouseY > topSide &&
    mouseY < botSide
  ) {
    clicked = true;
  }



}

function mouseClicked() {
  clownChange = 10;
}
function drawCreature(x,y,s) {
    push();
    translate(x,y)
    scale(s)
    //add 150 to all y values
    //arms
    stroke(0)
    fill(30)
    quad(-65,-70,-85,-7,-74,-7,-50,-70)
    quad(-85,-7,-94,4,-83,4,-74,-7)
    ellipse(-92,4,16,9)
    
    //back behind leg
    quad(15,-50,65,-10,75,-10,65,-50)
    quad(65,-10,45,5,65,5,75,-10)
    //body
    quad(-60,-100,-55,-58,90,-30,80,-90)
    //first arm
    quad(-40,-80,-35,-35,-15,-50,-10,-80)
    quad(-35,-35,-60,10,-50,10,-15,-50)
    // ears
    triangle(-110,-110,-107,-130,-90,-123)
    triangle(-50,-110,-53,-130,-70,-123)
    //face
    ellipse(-80,-90,70) 
    
    //eyes
    fill('#D3E6A7')
    ellipse(-95,-90,7)
    fill(0)
    ellipse(-94,-90.3,3)
    fill('#D3E6A7')
    ellipse(-64,-90,7)
    fill(0)
    ellipse(-65,-90.3,3)
    fill(0)
    triangle(-92,-89,-93,-87,-92,-85)
    triangle(-67,-89,-66,-87,-67,-85)
    
    //nose
    stroke('#5C3734')
    fill('#5C3734')
    rect(-82,-77,4,6)
    triangle(-84,-77,-82,-77,-82,-75)
    triangle(-76,-77,-78,-77,-78,-75)
    
    //cheeks
    stroke(0)
    noFill()
    arc(-72,-70,15,15,PI/2,PI)
    arc(-88,-70,15,15,0,PI/2)
   //tail
    fill(30)
    quad(80,-90,80,-86,120,-70,130,-75)
    quad(130,-75,120,-70,150,-70,145,-75)
    quad(145,-75,150,-70,180,-105,175,-102)
    quad(175,-102,180,-105,167,-102,165,-100)
    
     //back leg
    quad(40, -50, 90, -10, 100, -10, 90, -50); 
    arc(65, -50, 50, 55, PI, 0); 
    quad(90, -10, 90, 10, 100, 10, 100, -10);
    quad(90, 10, 83, 15, 100, 15, 100, 10);
    pop();
}
