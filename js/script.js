// Constantes
const PLANET_CARD_CLASS = 'planet';
const ACTIVE_CLASS = 'active';

// Clases
class PlanetCard {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', this.toggleActive.bind(this));
  }

  toggleActive() {
    this.element.classList.toggle(ACTIVE_CLASS);
  }
}

// Funciones
function initializePlanets() {
  const planets = document.querySelectorAll(`.${PLANET_CARD_CLASS}`);
  planets.forEach(planet => new PlanetCard(planet));
}

// Init
document.addEventListener('DOMContentLoaded', initializePlanets);