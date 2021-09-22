//var PLAY = 1;
//var END = 0;
var gameState="";
var wordSound,word;
var input;
var greetings;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage
var form;
var play;
var initialText="Check Your Vocabulary";
var spellCheck2;
var spellCheck3;
var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound
var spellCheck;
var bg;
var level1Dictionary = [["day","words/3 letter/day--_gb_1.mp3"],["fat","words/3 letter/fat--_gb_1.mp3"],["map","words/3 letter/map--_gb_1.mp3"]]
var nextWord2;
var nextWord3;
var level2Dictionary = [["adult","words/5 letter/adult--_gb_1.mp3"],["hotel","words/5 letter/hotel--_gb_1.mp3"],["learn","words/5 letter/learn--_gb_1.mp3"]]

var level3Dictionary = [["packing","words/7 letter/packing--_gb_1.mp3"],["partner","words/7 letter/partner--_gb_1.mp3"],["picture","words/7 letter/picture--_gb_1.mp3"]]
var horn,hornImg;
var textB;
var userInput;
var clapAni;
var playImg;
var clap;
var nextWordCount = 0;
var nextWordCount2 = 0;
var nextWordCount3 = 0;
var myArray=[[0,1],[1,1],[1,2]];

function preload(){
   
  hornImg= loadImage("horn.png");
  bg=loadImage("images/alphaBg.jpg")

playImg= loadImage("play.png");

  
  
}

function setup() {
  createCanvas(500, 500);

play = createSprite(170,200,100,50);
play.addImage(playImg);
play.scale=0.1;



wordSound = loadSound(level1Dictionary[0][1]);

input = createInput("Enter the word");
input.position(180,150);
input.hide();
  
horn = createSprite(150,150)
horn.addImage("horn",hornImg);
horn.scale=0.008
}

function spellCheck(){

greeting.html('');
userInput=input.value();

console.log(nextWordCount);
console.log("spellCheck call " + level1Dictionary[nextWordCount][0]);
if(userInput.toLowerCase()===level1Dictionary[nextWordCount][0]){
greeting.html('Spelling is correct');
}
else{
  greeting.html('Spelling Incorrect')
}

}

function draw() {
  
  background(bg);

  if(mousePressedOver(horn)){

   wordSound.play();
   }

  if(mousePressedOver(play)){

    gameState="level1";
    
  }

  if(gameState==="level1"){
      play.visible=false;
      initialText="Spell the word";
      gameState = "changed"
      level1();
  }
if(nextWordCount==3){
  gameState="level2";
}
    if(gameState==="level2"){
    play.visible=false;
    initialText="Spell the word";
    gameState = "changed"
    level2();
}

if(nextWordCount2==3){
  gamesState="level3";
  }

  if(gameState==="level3"){
    play.visible=false;
    initialText="Spell the word";
    gameState = "changed"
    level3();
}


   
  drawSprites();

   textSize(25)
   stroke("white");
   fill("white");
   text(initialText,130,100);

  
}

function nextWord(){
  console.log(myArray);
  console.log(level1Dictionary);
  console.log("Next");
  nextWordCount = nextWordCount+ 1;
  wordSound = loadSound(level1Dictionary[nextWordCount][1])
  console.log(nextWordCount);
  console.log(level1Dictionary[nextWordCount][1]);
}

function level1(){
  input.show();

  greeting=createElement('h3');
  greeting.position(180,120);

  next = createButton('Next Word');
  
  next.position(300,255);
  next.mousePressed(nextWord);

  spellCheck_1 = createButton('spell check');
  
  spellCheck_1.position(180,255);
  spellCheck_1.mousePressed(spellCheck);
  
  //var message = "This is a message";
  //console.log(message)
  
 

  
 horn = createSprite(150,150)
  horn.addImage("horn",hornImg);
  horn.scale=0.008

}

function nextWord2(){
  console.log(myArray);
  console.log(level2Dictionary);
  console.log("test 2");
  console.log("Next");
  nextWordCount2 = nextWordCount2+ 1;
  wordSound = loadSound(level2Dictionary[nextWordCount2][1])
  console.log(nextWordCount2);
  console.log(level2Dictionary[nextWordCount2][1]);
}

function spellCheck2(){

  greeting.html('');
  userInput=input.value();
  
  console.log(nextWordCount2);
  console.log("spellCheck call " + level2Dictionary[nextWordCount2][0]);
  if(userInput.toLowerCase()===level2Dictionary[nextWordCount2][0]){
  greeting.html('Spelling is correct');
  }
  else{
    greeting.html('Spelling Incorrect')
  }
  
  }

function level2(){
  input.show();

  greeting=createElement('h3');
  greeting.position(180,120);

  next = createButton('Next Word');
  
  next.position(300,255);
  next.mousePressed(nextWord2);

  spellCheck_2 = createButton('spell check');
  
  spellCheck_2.position(180,255);
  spellCheck_2.mousePressed(spellCheck2);
  
  var message = "This is a message";
  console.log(message)
  
 

  
 horn = createSprite(150,150)
  horn.addImage("horn",hornImg);
  horn.scale=0.008
}
//level 3
function nextWord3(){
  console.log(myArray);
  console.log(level3Dictionary);
  console.log("test 3");
  console.log("Next");
  nextWordCount3 = nextWordCount3+ 1;
  wordSound = loadSound(level3Dictionary[nextWordCount3][1])
  console.log(nextWordCount3);
  console.log(level3Dictionary[nextWordCount3][1]);
}

function spellCheck3(){

  greeting.html('');
  userInput=input.value();
  
  console.log(nextWordCount3);
  console.log("spellCheck call " + level3Dictionary[nextWordCount3][0]);
  if(userInput.toLowerCase()===level3Dictionary[nextWordCount3][0]){
  greeting.html('Spelling is correct');
  }
  else{
    greeting.html('Spelling Incorrect')
  }
  
  }

  function level3(){
    input.show();
  
    greeting=createElement('h3');
    greeting.position(180,120);
  
    next = createButton('Next Word');
    
    next.position(300,255);
    next.mousePressed(nextWord3);
  
    spellCheck_3 = createButton('spell check');
    
    spellCheck_3.position(180,255);
    spellCheck_3.mousePressed(spellCheck3);
    
    
    console.log("level 3")
    
   
  
    
   horn = createSprite(150,150)
    horn.addImage("horn",hornImg);
    horn.scale=0.008
  }

