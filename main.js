var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_output").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("text_output").innerHTML = Content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("text_output").innerHTML;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");