document.getElementById("btn-charger-eleves").addEventListener("click", () => {
  fetch("externe/eleves_bulletin.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Fichier introuvable !");
      }
      return response.json();
    })
    .then(eleves => {
      afficherEleves(eleves);
    })
    .catch(error => {
      console.error("Erreur de chargement :", error);
    });
});

function afficherEleves(eleves) {
  const liste = document.getElementById("liste-eleves");
  liste.innerHTML = "";

  eleves.forEach(eleve => {
    const carte = document.createElement("div");
    carte.className = "col-md-4";

    carte.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body" style="cursor: pointer;">
          <h3 class="card-title">${eleve.prenom} ${eleve.nom}</h3>
          <p class="card-text">
            <strong>Moyenne :</strong> ${eleve.moyenne}<br>
            <strong>Rang :</strong> ${eleve.rang}<br>
            <strong>Appreciation :</strong> ${eleve.appreciation}<br>
          </p>
        </div>
      </div>
    `;

    // ▶ Écouteur pour fiche détail
    carte.querySelector(".card").addEventListener("click", () => {
      afficherDetails(eleve);
    });

    liste.appendChild(carte);
  });
}



function afficherDetails(eleve) {
  const panneau = document.getElementById("info-eleve");
  const zone = document.querySelector(".zone-details");
  const blockDetail = document.querySelector(".block-detail");

  panneau.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h3>${eleve.prenom} ${eleve.nom}</h3>
        <table class="table table-bordered table-hover table-striped">
          <tr>
            <th>Disciplines</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td><strong>Dictee </strong></td>
            <td>: ${eleve.dictee}</td>
          </tr>
          <tr>
            <td><strong>Ecriture </strong></td>
            <td>: ${eleve.ecriture}</td>
          </tr>
          <tr>
            <td><strong>Chant:</strong> </td>
            <td>: ${eleve.chant}</td>
          </tr>
          <tr>
            <td><strong>Eveil au milieu </strong></td>
            <td>: ${eleve.eveil_au_milieu}</td>
          </tr>
          <tr>
            <td><strong>Mathematiques </strong></td>
            <td>: ${eleve.mathematiques}</td>
          </tr>
          <tr>
            <td><strong>Francais </strong></td>
            <td>: ${eleve.francais}</td>
          </tr>
        </table>

        <table>
          <tr>
            <th><strong>Total</strong></th>
            <th>: ${eleve.total}</th>
          </tr>
          <tr>
            <td><strong>Moyenne</strong></td>
            <td>: ${eleve.moyenne}</td>
          </tr>
          <tr>
            <td><strong>Rang</strong></td>
            <td>: ${eleve.rang}</td>
          </tr>
          <tr>
            <td><strong>Appréciation</strong></td>
            <td>: ${eleve.appreciation}</td>
          </tr>
        </table>
      </div>
    </div>
  `;

  zone.style.display = "flex";
  panneau.style.display = "block";
  blockDetail.style.display = "flex"
  document.body.style.overflow = "hidden"; // désactive le scroll

  document.getElementById("fermer-details").addEventListener("click", () => {
    panneau.innerHTML = "";
    panneau.style.display = "none";
    zone.style.display = "none";
    blockDetail.style.display = "none";
    location.reload();
    
  });
}
