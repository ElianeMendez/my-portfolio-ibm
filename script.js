// ---------- Add Recommendation ----------
function addRecommendation() {
  let recommendation = document.getElementById("recommendation-text");

  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Crear nueva burbuja de recomendación
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // Añadir al contenedor de recomendaciones
    document.getElementById("recommendations-list").appendChild(element);

    // Limpiar textarea
    recommendation.value = "";

    // Mostrar popup de confirmación
    showPopup(true);
  }
}

// ---------- Show/Hide Popup ----------
function showPopup(bool) {
  const popup = document.getElementById("popup");
  if (bool) {
    popup.style.visibility = "visible";
  } else {
    popup.style.visibility = "hidden";
  }
}

// ---------- Scroll to Top ----------
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- Event Listener for Submit ----------
document.getElementById("recommend_btn").addEventListener("click", addRecommendation);

// ---------- Event Listener for Home Icon ----------
const homeIcon = document.getElementById('home-icon');
homeIcon.addEventListener('click', function(e) {
  e.preventDefault();  // Evita salto instantáneo
  scrollToTop();       // Scroll suave al inicio
});
