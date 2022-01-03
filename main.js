//TEACHABLE MACHINE LINK 
//https://teachablemachine.withgoogle.com/models/6nGIixHqW/

//Functions
function detect(){
    navigator.mediaDevices.getUserMedia({audio: true}); //Asking the microphone permission
    sounds = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6nGIixHqW/model.json", modelReady);
}
function modelReady() {
    sounds.classify(gotResults);
}
function gotResults(error, results) {
    console.log(gotResults)
}