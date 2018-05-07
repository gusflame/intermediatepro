let alienJSON;

function setup(){

//this creates a file upload button
//and tells it to run the imageUploaded function if a file has been uploaded
    createCanvas(1000, 700);
    loadJSON("hi.json", imageUploaded);
}

//this gets called when the user uploads an image:
function imageUploaded(file){
    alienJSON = file;
    uploadedImage = loadImage(alienJSON.alienPictures[0], drawImg);
}

//this gets called after imageUploaded()
function drawImg(){
    image(uploadedImage,0,0);
}

function draw() {
    
}