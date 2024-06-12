import "zoomist/css";
import "./style.css";
import Zoomist from "zoomist";
import { my_url } from './common'

const folha500kN = `${my_url}cgp500k_folhanorte.jpg`;
const folha500kS = `${my_url}cgp500k_folhasul.jpg`;

document.addEventListener("DOMContentLoaded", function () {

    const folha500kNElement = document.getElementById('folha500kN')! as HTMLImageElement;
    const folha500kSElement = document.getElementById('folha500kS')! as HTMLImageElement;
    folha500kNElement.src = folha500kN;
    folha500kSElement.src = folha500kS;

    new Zoomist("#ctn-zoomist-2", {
        maxScale: 10,
    });

    new Zoomist("#ctn-zoomist-3", {
        maxScale: 10,
    });
});