//turnON function

function turnON(){
    let x = document.getElementById("Button");

    if(x.innerHTML == "Switch-ON"){
        document.getElementById("Image").src='Images/bulb-on.jpg';
        document.getElementById("Button").innerHTML='Switch-OFF';
        document.getElementById("Button").style.backgroundColor='red';
    }
    else{
        document.getElementById("Image").src ='Images/bulb-off.jpg' ;
        document.getElementById("Button").innerHTML='Switch-ON';
        document.getElementById("Button").style.backgroundColor='green';
    }
    
}
