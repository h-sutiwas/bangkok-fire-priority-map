import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing #app root element");
}

app.innerHTML = `
  <main class="application">
    <header class="application_header">
      <h1>Bangkok Fire Response and Inspection Prioritization</h1>
      <p>***NOTE: THIS IS A PROTOTYPE, NOT AN OPERATIONAL HAZARD ASSESSMENT</p>
    </header>

    <section
      id="map"
      class="application_map"
      aria-label="Interactive map of Bangkok"
    ></section>
  </main>
`;

new maplibregl.Map({
  container: "map",
  style: "https://demotiles.maplibre.org/style.json",
  center: [100.5018, 13.7563],
  zoom: 10,
});