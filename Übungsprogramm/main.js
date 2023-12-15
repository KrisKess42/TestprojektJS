
function main (){
var z = 4255;

var divEle = document.createElement("p");
divEle.innerText = z;
document.body.appendChild(divEle);

var divEle2 = document.createElement("h4");
divEle2.innerText = "Das ist doch toll! " + z/2;
document.body.appendChild(divEle2);

var hilfsvariable_3 = document.createElement("h3");
hilfsvariable_3.innerText = "Wieder eine Ausgabe!" + 2522;
document.body.appendChild(hilfsvariable_3);

var link = document.createElement("a");
link.innerText = "Click here";
link.href = "https://www.duesseldorfereg.de";
document.body.appendChild(link);

}

