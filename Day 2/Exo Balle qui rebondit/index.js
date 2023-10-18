document.addEventListener('DOMContentLoaded', function(){
    const circleDiv = document.createElement("div");
    // props modifiables pour créer des balles différentes à l'avenir :
    circleDiv.style.width = "30px";
    circleDiv.style.height = "30px";
    circleDiv.style.backgroundColor = "red";
    circleDiv.style.left = "50%";
    circleDiv.style.top = "50%";
    // ajout de certaines props visuelles via CSS partagées entre 
    // toutes les balles
    circleDiv.className = "circle";

    // Ajout de ma div au body
    document.body.appendChild(circleDiv);

    // Variables pour gérer le mouvement :
    let positionX = 50;
    let speedX = 1;
    let positionY = 50;
    let speedY = 1;

    function moveCircle() {
        positionX += speedX;
        positionY += speedY;
        circleDiv.style.left = positionX + "%";
        circleDiv.style.top = positionY + "%";

        // Rebond à droite et à gauche
        if (positionX >= 100 || positionX <= 0) {
            speedX = -speedX;
        }
        // Rebond en haut et en bas
        if (positionY >= 100 || positionY <= 0) {
            speedY = -speedY;
        }
    }
    // Bouger le cercle 60 fois par seconde (pour un mouvement fluide) :
    let interval = setInterval(moveCircle, 1000 / 60); 
})

/* 
* Si on voulait pouvoir créer plusieurs balles pour la suite de l'exo
* On peut simplement add let currentId = 0 au début du DomContentLoaded;
* puis créer une function qui englobe le reste "CreerCercle"
* et commencer cette function par incrémenter currentId++;
* puis après avoir créer notre const circleDiv
* appliquer l'id avec circleDiv.id = "circle_" + currentId;
*/