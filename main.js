Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    }
    ) ;                   
    Webcam.attach("#webcam")
console.log(ml5.version)
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mO5_PWOhE/model.json",model_loaded)
function model_loaded(){
     console.log("model_loaded")
}
function tp(){
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML="<img id='ci' src='"+data_uri+"'/>'"})
    }
    function check(){
        img=document.getElementById("ci");
        classifier.classify (img, gotResult);
    }
    function gotResult(error, result){
        if (error) {
            console.error(error)
        } else {
           console.log(result)
            document.getElementById("s1").innerHTML=result[0].label;
           s2= document.getElementById("s2").innerHTML=result[0].confidence.toFixed(3);
            
        }
    }