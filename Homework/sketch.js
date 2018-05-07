let poop;
let a;
let b;
let c;

function preload(){
  poop = loadJSON("words.json");
}

function setup() {
    a = floor(random(poop.feelings.length));
    b = floor(random(poop.adjective.length));
    c = floor(random(poop.lmao.length));
    createCanvas(1000, 300);
    background(0);
    fill(255);
    text("When I was a child, I was " + poop.feelings[a] + ". That's why I'm a "+ poop.feelings[b] + " adult. lmao SIKE i'm actually " + poop.lmao[c] + ".", 50, 100);   
}

function draw() {

}