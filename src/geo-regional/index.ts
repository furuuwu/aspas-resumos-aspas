import "zoomist/css";
import "./style.css";
import Zoomist from "zoomist";

document.addEventListener("DOMContentLoaded", function () {
  new Zoomist("#ctn-zoomist-1", {
    maxScale: 3,
  });
});