document.getElementById("disappearedImage").addEventListener("click", disappear);

function disappear(){
    document.getElementById("disappearedImage").style.display="none";
}

let descrip = document.getElementsByClassName("company-descrip");

for (let i = 0 ; i < descrip.length; i++) {
    descrip[i].addEventListener("click" , size) ; 
 }

function size(){
    for (let i = 0 ; i < descrip.length; i++) {
        descrip[i].style.color="green"; 
    }
}

document.getElementById("lamp").addEventListener("click", night);

function night(){
    document.body.style.background = "black";
}




