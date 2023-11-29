//Editar document per que quedi més guapo
let puntsA = 0;

function canviarMarcadorLocal(punts){
    puntsA=puntsA+punts; //puntsA+=punts;
    document.getElementById('points-a').innerHTML=puntsA
    document.getElementById('historial').innerHTML+=puntsA+"-"+puntsB+'<br/>'
}

let puntsB=0

function canviarMarcadorVisitant(punts){
    puntsB=puntsB+punts; //puntsA+=punts;
    document.getElementById('points-b').innerHTML=puntsB
    document.getElementById('historial').innerHTML+=puntsA+"-"+puntsB+'<br/>'
}

let faltesA=0

function canviarFaltesLocal() {
    if (faltesA < 5) {
        faltesA++; //faltesA=faltesA+1
        document.getElementById('fouls-a').innerHTML = faltesA
        document.getElementById('historial').innerHTML+=faltesA+"a falta personal equip local al "+ periode + "periode"+ '<br/>'
    }

    if (faltesA==5){
        document.getElementById('fouls-a').style.color = "red"
    }
}
let faltesB=0

function canviarFaltesVisitant() {
    if (faltesB < 5) {
        faltesB++;
        document.getElementById('fouls-b').innerHTML = faltesB
        document.getElementById('historial').innerHTML+=faltesB+"a falta personal equip visitant al "+ periode + "periode"+ '<br/>'
    }
    if (faltesB==5){
        document.getElementById('fouls-b').style.color = "red"
    }
}
//Posar que quan arriba a la falta 5 es canvii a color vermell o que surti el punt del bonús

let periode= 1

//Reiniciar període posant totes les variables a 0 (let)
function canviarPeriode(){
    faltesA=0;
    document.getElementById('fouls-a').innerHTML = faltesA;
    faltesB=0;
    document.getElementById('fouls-b').innerHTML = faltesB;
    document.getElementById('historial').innerHTML+="Final del periode "+ periode+ '<br/>'

    if (periode < 4){
        periode++;
        document.getElementById('period').innerHTML = periode;

    } else {
        prorroga()
    }
}

function reiniciar() {
    //No acab d'entendre com he d'usar les variables per posar-les a 0
    //Faltes i punts quan reinici enves de posar-me a 0 se me posa als núms d'exemple del html
    //Ja funciona
  periode=1;
    document.getElementById('period').innerHTML = periode;
    puntsA=0;
    document.getElementById('points-a').innerHTML = puntsA;
    puntsB=0;
    document.getElementById('points-b').innerHTML = puntsB;
    faltesA=0;
    document.getElementById('fouls-a').innerHTML = faltesA;
    faltesB=0;
    document.getElementById('fouls-b').innerHTML = faltesB;
    document.getElementById('historial').innerHTML = " "
}
//Pensar a demanar com fer l'historial

//Recordar que && és com si dir i
//I per altra banda, || és com dir o
function prorroga() {
    if (periode==4 && puntsA==puntsB){
        periode='P'
        document.getElementById('period').innerHTML = periode
    } else {
        document.getElementById('period').innerHTML = 'Fi'
    }
}

