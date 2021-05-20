let exo1 = document.querySelector("#content");
let h2 = document.createElement("h2");
exo1.appendChild(h2);
h2.innerHTML = "Part 6 - Exercice1";

let exo2 = document.createElement("p");
exo2.innerHTML = "Lorem Ipsum";
exo1.appendChild(exo2);

let h1 = document.createElement("h1");
h1.innerHTML = "Le DOM - Création de HTML";
exo1.insertBefore(h1, exo1.firstChild);

let div2 = document.getElementById("secondaire");
div2.innerHTML = exo1.innerHTML;
let nouvel_h2 = document.createElement("h2");
nouvel_h2.innerHTML = "Part 6 - Exercice 2";
div2.replaceChild(nouvel_h2, div2.children[1]);

let div = document.createElement("div");
let body = document.body;
body.insertBefore(div, body.lastChild);
div.setAttribute("id","matiere");
let ol = document.createElement("ol");
div.appendChild(ol);
let li1 = document.createElement("li");
ol.appendChild(li1);
li1.innerHTML = "manger des pizza"
let li2 = document.createElement("li")
ol.appendChild(li2)
li2.innerHTML = "graille des bonnes pizzas sa mère"
let li3 = document.createElement("li")
ol.appendChild(li3)
li3.innerHTML = "digerer des bons ptits plats italiens"
