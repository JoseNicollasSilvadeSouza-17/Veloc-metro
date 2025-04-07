lucide.createIcons();

const velocidade = document.querySelector ("h2");
const unidadeDeVelocidade = document.querySelector ("h3");

const btnIniciar = document.querySelector ("#iniciar");
const btnReiniciar = document.querySelector ("#reiniciar");
const btnPausar = document.querySelector ("#pausar");

let watchID = null;

let options = {
    enableHightAccuracy: true,
    timeout: 10000
};

function updatePosition (position) {
    if (btnIniciar) {
        unidadeDeVelocidade.innerHTML = ("m/s");
        velocidade.textContent = (position.coords.speed / 1000 + 19).toFixed (2);
    }

    else if (btnReiniciar) {
        unidadeDeVelocidade.innerHTML = ("km/h");
        velocidade.innerHTML = (position.coords.speed * 3.6).toFixed (2);
    }

    else {
        unidadeDeVelocidade.innerHTML = ("km/s");
        velocidade.innerHTML = (position.coords.speed).toFixed (2);
    }
};

function handleError (error) {
    console.log (error.message);
};

btnIniciar.addEventListener ("click", function iniciar () {
    btnIniciar.classList.add ("hidden");

    btnReiniciar.classList.remove ("hidden"); 
    btnPausar.classList.remove ("hidden");
    
    if (position.coords.speed === null) {
        return;
    }

    else {
        navigator.geolocation.watchPosition (updatePosition, handleError, options);
    }
});

btnReiniciar.addEventListener ("click", function reiniciar () {
    btnIniciar.classList.remove ("hidden");   

    btnReiniciar.classList.add ("hidden");
    btnPausar.classList.add ("hidden"); 
    
    velocidade.innerHTML = 0;
});

btnPausar.addEventListener ("click", function pausar () {
    alert ("Velocímetro parou!"); 
    navigator.geolocation.clearWatch (watchID);
});