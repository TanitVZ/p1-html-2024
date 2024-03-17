const lista = document.getElementById("llistaActivitats");
const divsContenido = document.querySelectorAll(".infoActivitat");


lista.addEventListener("click", function (event) {
  const activitat = event.target;

  if (activitat.tagName === "A") {
    const idLiActiu = activitat.id;
    divsContenido.forEach(function (div) {
      if (div.id === "infoActivitat" + idLiActiu.slice(9)) {
        if (isMobile())  
          div.style.display = "contents"; 
        else {
         div.style.display = "flex";

        }
      } else {
        div.style.display = "none";
      }
    });
  }
});

function isMobile() {
  return window.innerWidth <= 650; 
}

