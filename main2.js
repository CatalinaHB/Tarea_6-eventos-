
var numero_1
var operacion


let uno=document.getElementById("uno")
let dos=document.getElementById("dos")
let tres=document.getElementById("tres")
let cuatro=document.getElementById("cuatro")
let cinco=document.getElementById("cinco")
let seis=document.getElementById("seis")
let siete=document.getElementById("siete")
let ocho=document.getElementById("ocho")
let nueve=document.getElementById("nueve")
let suma=document.getElementById("suma")
let resta=document.getElementById("resta")
let multiplicacion=document.getElementById("multiplicacion")
let division=document.getElementById("division")
let resultado=document.getElementById("resultado")
let igual=document.getElementById("igual")
let final=document.getElementById("final")
let limpiar=document.getElementById("limpiar")


uno.onclick=function(e){
    resultado.textContent=resultado.textContent+"1"
}
dos.onclick=function(e){
    resultado.textContent=resultado.textContent+"2"
}
tres.onclick=function(e){
    resultado.textContent=resultado.textContent+"3"
}
cuatro.onclick=function(e){
    resultado.textContent=resultado.textContent+"4"
}
cinco.onclick=function(e){
    resultado.textContent=resultado.textContent+"5"
}
seis.onclick=function(e){
    resultado.textContent=resultado.textContent+"6"
}
siete.onclick=function(e){
    resultado.textContent=resultado.textContent+"7"
}
ocho.onclick=function(e){
    resultado.textContent=resultado.textContent+"8"
}
nueve.onclick=function(e){
    resultado.textContent=resultado.textContent+"9"
}
console.log(resultado.textContent)
suma.onclick=function(e){
    operacion="+"
    numero_1=resultado.textContent
    resultado.textContent=""
}
resta.onclick=function(e){
    operacion="-"
    numero_1=resultado.textContent
    resultado.textContent=""
}
multiplicacion.onclick=function(e){
    operacion="*"
    numero_1=resultado.textContent
    resultado.textContent=""
}
division.onclick=function(e){
    operacion="/"
    numero_1=resultado.textContent
    resultado.textContent=""
}
igual.onclick=function(e){
    switch (operacion){
        case "+":
            final.textContent=parseFloat(numero_1)+parseFloat(resultado.textContent)
            break
        case "-":
            final.textContent=parseFloat(numero_1)-parseFloat(resultado.textContent)
            break
        case "/":
            final.textContent=parseFloat(numero_1)/parseFloat(resultado.textContent)
            break
        case "*":
            final.textContent=parseFloat(numero_1)*parseFloat(resultado.textContent)
            break
    }

}
limpiar.onclick=function(e){
    resultado.textContent=""
    final.textContent=""
    numero_1=0
    numero_2=0
    operacion=0
    

}