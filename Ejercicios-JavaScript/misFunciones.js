/**
 * Conversion de Unidades de Metros, Yardas, Pies y Pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los imputs de Metros, Yardas, Pies o Pulgadas
 * @param {number} valor - El valor de los imputs de Metros, Yardas, Pies o Pulgadas
 * @return
 * EJ --> ConversorUnidades
 */

function cambiarUnidades(id, valor){
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido" +id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda= "";
    } else if(id == "metro"){
        metro = valor;
        pulgada = 39.3701 * valor;
        pie = 3.28084 * valor;
        yarda = 1.09361 * valor;
    } else if (id == "pulgada") {
        pulgada = valor;
        metro= 0.0254 * valor;
        pie = 0.08333 * valor;
        yarda = 0.027778 * valor;
    } else if (id == "pie") {
        pie = valor;
        metro = 0.3048 * valor;
        pulgada = 12 * valor;
        yarda = 0.333333 * valor;
    } else if (id == "yarda") {
        yarda = valor;
        metro = 0.9144 * valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

/**
 * EJ --> grados_radianes
 */

function convertirGR(id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    } else if (id="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

/**
 * EJ --> mostrar_ocultar
 */

function mostrar_ocultar(valorMO){
    if (valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

/**
 * EJ --> operacionesMatematicas
 */

function calcularSuma(){
    var num1, num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}
function calcularResta(){
    var num1, num2;

    num1 = Number(document.getElementById("numr1").value);
    num2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML = num1 - num2;
}
function calcularMult(){
    var num1, num2;

    num1 = Number(document.getElementById("numm1").value);
    num2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML = num1 * num2;
}
function calcularDiv(){
    var num1, num2;

    num1 = Number(document.getElementById("numd1").value);
    num2 = Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML = num1 / num2;
}

/**
 * EJ --> primerWeb/segundaWeb
 */

function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}
function cargarResultado(){
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
    console.log(urlComp);
}

/**
 * EJ --> 1_web/2_web ---- Localstorage
 */

function guardarLocalStorage(){
    let distancia, unidad;

    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}
function cargarLocalStorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}

/**
 * EJ --> canvas_circulo-cuadrado
 */

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0 + margen,yMax -40-margen, 40,40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#b919dc";
    ctx.fill();
}

function dibujarImagen(posX, posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, posX, posY)
    }
}

x=0;
dx=2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, x, 100)
    }
    if(x > canvas.width){
        x=0;
    }
    x+=dx;
}