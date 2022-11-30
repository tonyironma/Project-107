
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uuH_t8obM/')
}
function modelReady(){
    classifier.classify(gotResults);
}
