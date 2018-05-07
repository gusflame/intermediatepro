let poop = "hi.json";
let imagesAffenpinscher;
/* let imagesAfrican;
let imagesAiredale;
let imagesAkita;
let imagesAppenzeller;
let imagesBasenji;
let imagesBeagle;
let imagesBluetick;
let imagesBorzoi;
let imagesBouvier;
let imagesBoxer;
let imagesBrabancon;
let imagesBriard;
let imagesBullterrier;
let imagesCairn;
let imagesChihuahua;
let imagesChow;
let imagesClumber;

 imagesAffenpinscher = loadImage(poop.dogPicturesaffenpinscher[i])
imagesAfrican = loadImage(poop.dogPicturesafrican[i])
imagesAiredale = loadImage(poop.dogPicturesairedale[i])
imagesAkita = loadImage(poop.dogPicturesakita[i])
imagesAppenzeller = loadImage(poop.dogPicturesappenzeller[i])
imagesBasenji = loadImage(poop.dogPicturesbasenji[i])
imagesBeagle = loadImage(poop.dogPicturesbeagle[i])
imagesBluetick = loadImage(poop.dogPicturesbluetick[i])
imagesBorzoi = loadImage(poop.dogPicturesborzoi[i])
imagesBouvier = loadImage(poop.dogPicturesbouvier[i])
imagesBoxer = loadImage(poop.dogPicturesboxer[i])
imagesBrabancon = loadImage(poop.dogPicturesbrabancon[i])
imagesBriard = loadImage(poop.dogPicturesbriard[i])
imagesBullterrier = loadImage(poop.dogPicturesbullterrier[i])
imagesCairn = loadImage(poop.dogPicturescairn[i])
imagesChihuahua = loadImage(poop.dogPictureschihuahua[i])
imagesChow = loadImage(poop.dogPictureschow[i])
imagesClumber = loadImage(poop.dogPicturesclumber[i]) */


function preload(){
  poop = loadJSON("hi.json");
}

function setup() {
    a = floor(random(poop.dogBreeds.length));
    
    for (let i = 0, i < poop.dogPicturesaffenpinscher.length, i++) {
        imagesAffenpinscher = loadImage(poop.dogPicturesaffenpinscher[i]);
    }
    b = floor(random(poop.dogPicturesaffenpinscher.length));
    createCanvas(1000, 300);
    background(0);
    fill(255);
    image(imagesAffenpinscher[b], 0, 0);
    text("This dog's breed is " + poop.dogBreeds[a] + ".", 50, 100);   
}

function draw() {

}