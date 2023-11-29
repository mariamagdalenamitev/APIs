let puntsA = 0;

function canviarMarcadorLocal(punts){
    puntsA=puntsA+punts; //puntsA+=punts;
    document.getElementById('points-a').innerHTML=puntsA
}

let puntsB=0

function canviarMarcadorVisitant(punts){
    puntsB=puntsB+punts; //puntsA+=punts;
    document.getElementById('points-b').innerHTML=puntsB
}

let faltesA=0

function canviarFaltesLocal() {
    if (faltesA < 5) {
        faltesA++; //faltesA=faltesA+1
        document.getElementById('fouls-a').innerHTML = faltesA
    }
}
let faltesB=0

function canviarFaltesVisitant() {
    if (faltesB < 5) {
        faltesB++;
        document.getElementById('fouls-b').innerHTML = faltesB
    }
}

let periode= 1

function canviarPeriode(){
    if (periode < 4){
        periode++;
        document.getElementById('period').innerHTML = periode;
    }
}

function reiniciar() {

}