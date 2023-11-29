let puntsA=0

function canviarMarcadorA(){
    if (puntsA==0){
    puntsA=15+puntsA
    }
    else if (puntsA==15){
    puntsA=15+puntsA

    }
    else if (puntsA==30){
    puntsA=10+puntsA
    }
    else if (puntsA==40 && puntsB==40){
        puntsA="AD"
        puntsB=" "
        document.getElementById('score-a').innerHTML= puntsA
        document.getElementById('score-b').innerHTML= puntsB
    }else {
        puntsA = 0
        puntsB = 0
        jocsA=jocsA+1
        document.getElementById('games-a').innerHTML = jocsA
    }

    document.getElementById('score-a').innerHTML=puntsA
    document.getElementById('historial').innerHTML+=puntsA+"-"+puntsB+'<br/>'

}

let puntsB=0

function canviarMarcadorB(){
    if (puntsB==0){
        puntsB=15+puntsB
    }
    else if (puntsB==15){
        puntsB=15+puntsB

    }
    else if (puntsB==30){
        puntsB=10+puntsB
    }
    else if (puntsA==40 && puntsB==40){
        puntsA=" "
        puntsB="AD"
        document.getElementById('score-a').innerHTML= puntsA
        document.getElementById('score-b').innerHTML= puntsB
    }else {
        puntsA = 0
        puntsB = 0
        jocsB++
        document.getElementById('games-b').innerHTML = jocsB
// He de posar el codi dels jocs aquí perquè me funcioni o no té res a veure
// El joc era a partir de 7 mb ventatge de 2 o com?

    }

    document.getElementById('score-b').innerHTML=puntsB
    document.getElementById('historial').innerHTML+=puntsA+"-"+puntsB+'<br/>'

}
// TODO canviar noms funcions a iniciar partida
//Copiar AD a punts A

let jocsA=0

//Revisar el jocA i la suma de sets
//Ja me funciona el sumar el joc després de AD però quan s'ha sumat, al que tenia DAD se queda en blanc
function canviarJocsA(){
    if (jocsA==7 && jocsB<5)
        setsA++
    }
//TODO Posar a l'historial quan feim un joc i un set
//TODO programar els sets
let jocsB=0
function canviarJocsB(){

}

let setsA=0
function canviarSetsA(){

}

let setsB=0
function canviarSetsB(){

}

function reiniciar() {
    
    puntsA=0;
    document.getElementById('score-a').innerHTML = puntsA;
    puntsB=0;
    document.getElementById('score-b').innerHTML = puntsB;
    jocsA=0;
    document.getElementById('games-a').innerHTML = jocsA;
    jocsB=0;
    document.getElementById('games-b').innerHTML = jocsA;
    setsA=0;
    document.getElementById('sets-a').innerHTML = setsA;
    setsB=0;
    document.getElementById('sets-b').innerHTML = setsB;
    document.getElementById('historial').innerHTML = " "
}
