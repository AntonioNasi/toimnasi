let count = 1;
document.getElementById("radio1").cheked = true;

setInterval( function(){
    nextImage();
}, 1000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).cheked = true;

}