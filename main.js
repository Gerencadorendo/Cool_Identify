video=""
stattus=""
resultado=[]

function preload(){
    video=createVideo('video.mp4')
    video.hide()
}
function setup(){
    canvas=createCanvas(780, 480)
    canvas.center()
}

function draw(){
    image(video, 0, 0, 780, 480)
    if(stattus){
        objectDetector.detect(video, gotResult)
        for(i=0;i<resultado.length;i++){
            document.getElementById("status").innerHTML="Objetos Identificados"
            document.getElementById("numberOfObjects").innerHTML=resultado.length
            noFill()
            stroke("red")
            rect(resultado[i].x, resultado[i].y, resultado[i].width, resultado[i].height)
            fill("black")
            text(resultado[i].label, resultado[i].x, resultado[i].y)
      }
    }
    else{
        console.error("error")
    }
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Identificando Objetos"
}

function modelLoaded(){
    console.log("funcionou")
    stattus=true
    video.loop()
    video.volume(0)
}
function gotResult(error, results){
    if(error){
        console.error("error")
    }
    else{
        console.log(results)
        resultado=results
    }
}