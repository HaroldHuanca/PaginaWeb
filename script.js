function mensaje(argument) {

    alert("Hola Mundo");
}
function agregarContenido() {
    let dato = document.getElementById("contenido");
    dato.innerHTML = "Hola este es un <b>nuevo</b> mensaje";
}
function mostrarImagen() {
    let img = document.getElementById("imagen");
    img.src = "https://www.w3schools.com/js/pic_bulboff.gif";
}
function saludo() {
    let nombre = document.getElementById("nombre").value;
    alert("Hola " + nombre + ", bienvenido a la pagina");
}
function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    let res = document.getElementById("resultado");
    res.innerHTML = resultado;
    Resultado(resultado);
}
function mensajeSweet() {
    let timerInterval;
    Swal.fire({
        title: "Custom width, padding, color, background.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
    });
}

function Resultado(algo) {
    Swal.fire({
        title: "RESULTADO DE LA SUMA",
        html: "La respuesta es:" + algo,
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

function dividir() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (num2 == 0) {
        Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "No se puede DIVIDIR ENTRE 0!"
        });
    }
    else {
        Resultado(num1 / num2);
    }
}

function graficar() {
    let ctx = document.getElementById('myChart');
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    };
    const config = {
        type: 'polarArea',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    };
    new Chart(ctx, config);
}
