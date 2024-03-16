function sounds(){
    if(document.activeElement.id=="A"){
        var audio=new Audio("new.mp3");
        audio.play();
        
    }
    else if(document.activeElement.id=="S"){
     var audio=new Audio("hitomdrum.wav");
     audio.play();
 }
 else if(document.activeElement.id=="D"){
     var audio=new Audio("floor-tom-drum.wav");
     audio.play();
 }
 else if(document.activeElement.id=="W"){
     var audio=new Audio("bass drum.mp3");
     audio.play();
 }
 else if(document.activeElement.id=="X"){
     var audio=new Audio("snare.mp3");
     audio.play();
 }
 else if(document.activeElement.id=="Z"){
     var audio=new Audio("crash.mp3");
     audio.play();
 }
 else if(document.activeElement.id=="E"){
     var audio=new Audio("kick.wav");
     audio.play();
 }
 else if(document.activeElement.id=="C"){
    var audio=new Audio("open hat.wav");
    audio.play();
}

}

//keyboard effect
 document.addEventListener("keypress",function(event){
    if(event.key=="A"){
        var audio=new Audio("new.mp3");
        audio.play();
        document.getElementById("A").classList.add("add");
        setTimeout(() =>{
             document.getElementById("A").classList.remove("add")
        },200);
        
     
    }
    else if(event.key=="S"){
     var audio=new Audio("hitomdrum.wav");
     audio.play();
     document.getElementById("S").classList.add("add");
        setTimeout(() =>{
             document.getElementById("S").classList.remove("add")
        },200);
 }
 else if(event.key=="D"){
     var audio=new Audio("floor-tom-drum.wav");
     audio.play();
     document.getElementById("D").classList.add("add");
        setTimeout(() =>{
             document.getElementById("D").classList.remove("add")
        },200);
 }
 else if(event.key=="W"){
     var audio=new Audio("bass drum.mp3");
     audio.play();
     document.getElementById("W").classList.add("add");
        setTimeout(() =>{
             document.getElementById("W").classList.remove("add")
        },200);
 }
 else if(event.key=="X"){
     var audio=new Audio("snare.mp3");
     audio.play();
     document.getElementById("X").classList.add("add");
        setTimeout(() =>{
             document.getElementById("X").classList.remove("add")
        },200);
 }
 else if(event.key=="Z"){
     var audio=new Audio("crash.mp3");
     audio.play();
     document.getElementById("Z").classList.add("add");
        setTimeout(() =>{
             document.getElementById("Z").classList.remove("add")
        },200);
 }
 else if(event.key=="E"){
     var audio=new Audio("KICK.wav");
     audio.play();
     document.getElementById("E").classList.add("add");
        setTimeout(() =>{
             document.getElementById("E").classList.remove("add")
        },200);
 }
 
    else if(event.key=="C"){
        var audio=new Audio("open hat.wav");
        audio.play();
        document.getElementById("C").classList.add("add");
           setTimeout(() =>{
                document.getElementById("C").classList.remove("add")
           },200);
   }
})