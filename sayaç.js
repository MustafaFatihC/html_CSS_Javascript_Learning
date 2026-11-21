let sayı = 0;
let artışMiktarı = Number(prompt("Artış miktarını giriniz -> "));
let azaltmaMiktarı = Number(prompt("Azalış Miktarını giriniz -> "));
if (artışMiktarı <= 0) {
    artışMiktarı = 1;
}
if (azaltmaMiktarı <= 0) {
    azaltmaMiktarı = 1;
}

function arttır() {
    sayı += artışMiktarı;
    document.getElementById("sayı").innerText = sayı;

}
function azalt() {
    sayı -= azaltmaMiktarı;
    document.getElementById("sayı").innerText = sayı;
}
function sıfırla() {
    sayı = 0;
    document.getElementById("sayı").innerText = sayı;
}




