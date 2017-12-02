  var spin;
  var direction = 90; //spin initial direction moving down
  var mic;
  var life = 3;

  function setup() {
    mic = new p5.AudioIn() //set things up
    mic.start(); //Start up the mic
    createCanvas(window.innerWidth,800); // How large your drawing is in (x,y)

    spin1 = createSprite(200, 200, 1, 1); //(x,y,??,??) origin @ top left corner
    spin1.addAnimation("floating", "img/cat_3.png"); //change to cat_2.png for other cat
  }

  function draw() {
    micLevel = mic.getLevel(); //micLevel is the LOUDNESS value from mic
    background(255,255,255);  //Backgrouond color
    
    fill(150, 150, 150, 127);
    stroke(211, 211, 211);
    rotate(PI/45.0);
    rect(0, 300, window.innerWidth, 500); //rectangle for ground
    //move a sprite by providing a speed and an angle
    direction += 0 + 100*micLevel;
    spin1.setSpeed(micLevel*100, direction);//speed, angle
    //console.log(micLevel*100);
    
    //Make it rotate towards direction
    spin1.rotateToDirection = true;
    //spin1.position.x = 30;
    //spin1.position.y = 50;

    if(micLevel*100>5){ //only move if it's loud enough
      spin1.position.x += micLevel*10;
    }
    else if ((micLevel*100<10)&&(spin1.position.x > 30)){
      spin1.position.x -= 10;
    }
    //draw the sprite
    spin1.scale = .15; //how big do you want the cat?

    drawSprites();
  }

