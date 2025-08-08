let btn = document.querySelector("button");
let div = document.querySelector("#liste-eleves");


let recupJson = async () => {
  let result = await fetch('externe/eleves_bulletin.json'); // vérifie que le chemin est correct
  let data = await result.json();

  let contenu = "";

  data.forEach(eleve => {
    contenu += `
      <div class="col-md-4 col-sm-6">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title">${eleve.prenom} ${eleve.nom}</h5>
            <div class="card-text">
              Moyenne : <strong>${eleve.moyenne}</strong><br>
              Rang : <strong>${eleve.rang}</strong><br>
              Appréciation : <em>${eleve.appreciation}</em>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  div.innerHTML = contenu;
  let cardText=document.querySelectorAll(".card-text");
  let infoEleve=document.querySelector(".info-eleve");
  
};

btn.addEventListener("click", recupJson);





