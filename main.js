var speechrecognition = window.webkitSpeechRecognition;
var recognition= new speechrecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie")
    {
       console.log("taking selfie ---");
       speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

    setTimeout(function()
    {
      img_id= "selfie1"
      take_snapshot();
      speak_data="Taking your next selfie in 10 seconds";
      var utterthis=new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      save();
    }, 5000);
    
    
}

Webcam.set({
    width:360 ,
    height:250 ,
    image_format:'png' ,
    png_quality:90 
})

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}

function take_snapshot()
{
   console.log(img_id);

   Webcam.snap(function(data_uri) {
      i+(img_id=="selfie") {
        document.getElementById("result").innerHTML='<img id="selfie1"  src="'+data_uri+'"/>';
       }
       if(img_id=="selfie2") {
        document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
       }
       
   })
};


