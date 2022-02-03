let data;
let input;
let sendBttn;
let answer = "ask cookbot your cooking-related questions";

function preload() {
  data = loadJSON("chatbot.json");
}

function setup() {
  createCanvas(400, 400);
  console.log(data);

  input = createInput();
  input.position(30, 300);
  sendBttn = createButton("send msg");
  sendBttn.position(30, 330);

  sendBttn.mousePressed(chat);
}

function chat() {
  console.log(input.value());
  let inputStr = input.value().toLowerCase();
  loop1: for (let i = 0; i < data.brain.length; i++) {
    loop2: for (let j = 0; j < data.brain[i].triggers.length; j++) {
      if (inputStr.indexOf(data.brain[i].triggers[j]) !== -1) {
        answer = random(data.brain[i].responses);
        break loop1;
      } else {
        answer = random(data.catchall);
      }
    }
  }
}

function draw() {
  colorMode(HSB);
  background(10, 30, 100);
  
  textSize(20);
  textFont("Times New Roman");
  text(answer, 50, 100, 350);
  
  textSize(16);
  text("a chatbot by lucia and max", 300, 360, 100);
}


/*ideas

1. make it look nice
*/
