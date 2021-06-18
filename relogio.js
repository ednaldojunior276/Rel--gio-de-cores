
let temp;
function mudar(){
    let res = document.querySelector("#res");
    let data = new Date();

    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();


    if(segundos >= 0 && segundos <= 20){
        document.body.style.background = "blue";

    }
    else if(segundos > 20 && segundos <= 40){
        document.body.style.background = "red";
    } 
    else if (segundos > 40 && segundos < 60){
        document.body.style.background = "orange"
    }
    
    res.innerHTML = `${horas}:${minutos}:${segundos}`;
}

      setInterval(mudar, 1000);
