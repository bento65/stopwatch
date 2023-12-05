
const minutese1 = document.querySelector("#minutes");
const secondese1 = document.querySelector("#seconds");
const millisecondse1 = document.querySelector("#milliseconds");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const continuarbtn = document.querySelector("#continuarbtn");
const resetbtn = document.querySelector("#resetbtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let ispaused = false;

startbtn.addEventListener("click", starttimer);
pausebtn.addEventListener("click", pausetimer);
continuarbtn.addEventListener("click", continuartimer);
resetbtn.addEventListener("click", resettimer);

function starttimer() {
    ispaused = false;
    interval = setInterval(() => {

        if (!ispaused) {

            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;

            }

            minutese1.textContent = formattime(minutes);
            secondese1.textContent = formattime(seconds);
            millisecondse1.textContent = formattime(milliseconds);
        }


    }, 10);

    startbtn.style.display = "none";
    pausebtn.style.display = "block";
}

function pausetimer() {
    ispaused = true
    pausebtn.style.display = "none";
    continuarbtn.style.display = "block";
}

function continuartimer() {
    ispaused = false
    pausebtn.style.display = "block";
    continuarbtn.style.display = "none";
}

function resettimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutese1.textContent = "00"
    secondese1.textContent = "00"
    millisecondse1.textContent = "00"

    startbtn.style.display = "block";
    pausebtn.style.display = "none";
    continuarbtn.style.display = "none";
}


function formattime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatmilliseconds(time) {
    return time < 100 ? `${time}`.padstart(3, "0") : time;

}

document.addEventListener('DOMContentLoaded', function () {
    function mostrarHora() {
        const agora = new Date();
        const hora = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        const segundos = agora.getSeconds().toString().padStart(2, '0');
        const horaAtual = `${hora}:${minutos}:${segundos}`;
        document.getElementById("hora-Atual").textContent = `Hora Atual: ${horaAtual}`;
    }

    setInterval(mostrarHora, 1000); // Atualiza a hora a cada segundo
    mostrarHora(); // Chama a função para exibir a hora imediatamente
});

function exibirDeclaracaoDeAmor() {
    alert("Olá Jaqueline.( Às vezes eu me pergunto se vale a pena lutar por amor. Daí eu penso em você e estou pronto para guerra.)");
}


