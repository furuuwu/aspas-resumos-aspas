import "zoomist/css";
import "./style.css";
import Zoomist from "zoomist";

document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

async function initializeApp(): Promise<void> {
  await loadAllSections();
  console.log('All sections have been loaded.');

  new Zoomist("#ctn-zoomist-1", {
    maxScale: 3,
  });
}

async function loadSection(fileName: string): Promise<void> {
  try {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error(`Failed to load ${fileName}: ${response.statusText}`);
    }
    const text = await response.text();
    const div = document.createElement('div');
    div.innerHTML = text;
    const appDiv = document.getElementById('app');
    if (appDiv) {
      appDiv.appendChild(div);
    } else {
      console.error('No element with id "app" found.');
    }
  } catch (error) {
    console.error('Error loading section:', error);
  }
}

async function loadAllSections(): Promise<void> {
  const r_path = "./parts/";
  let ordered_sections = [
    "escala-tempo.html",
    "tectonica-placas.html",
    "cartas-geologicas.html",
    "unidades-geologicas.html",
    "ZC.html",
    "ZAOL.html",
    "MI.html",
    "ZCI.html",
    "ZGMT.html",
    "ZOM.html",
    "ZSP.html",
    "mesozoico.html",
    "cenozoico.html",
    "outros.html",
  ]
  ordered_sections = ordered_sections.map(f => r_path + f);

  console.log(ordered_sections);
  await Promise.all(ordered_sections.map(s => loadSection(s)));
}