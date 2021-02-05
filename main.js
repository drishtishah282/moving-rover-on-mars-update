canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
rover_image = "rover.png";

mars_img_array=["mars_1.jpg" , "mars_2.jpg" , "mars_3.jpg" , "mars_4.jpg"];
random_img = Math.floor(Math.random()*4);
background_image = mars_img_array[random_img];
console.log("Background Image Is" + background_image);

function add() {
  background_imgTag =  new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  rover_imgTag = new Image();
  rover_imgTag.onload = uploadRover;
  rover_imgTag.src = rover_image;
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == "38") {
    up();
    console.log("up");
  }
  if (keyPressed == "40") {
    down();
    console.log("down");
  }
  if (keyPressed == "37") {
    left();
    console.log("left");
  }
  if (keyPressed == "39") {
    right();
    console.log("right");
  }
}
function up() {
  if (rover_y >= 0) {
    rover_y = rover_y - 10;
    console.log(
      "When up arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
}

function down() {
  if (rover_y <= 500) {
    rover_y = rover_y + 10;
    console.log(
      "When up down is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
}

function right() {
  if (rover_x <= 700) {
    rover_x = rover_x + 10;
    console.log(
      "When right arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
}

function left() {
  if (rover_x >= 0) {
    rover_x = rover_x - 10;
    console.log(
      "When left arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
}

