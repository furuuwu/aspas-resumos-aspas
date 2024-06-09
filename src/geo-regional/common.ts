import "zoomist/css";
import "./style.css";
import Zoomist from "zoomist";
export const my_url = "https://d4ew1nzfi1l3k.cloudfront.net/geo-regional/";

export default function doStuff(map_name: string) {
    const single_map_url = `${my_url}${map_name}`;

    document.addEventListener("DOMContentLoaded", function () {

        const mapElement = document.getElementById('map_placeholder')! as HTMLImageElement;
        mapElement.src = single_map_url;

        new Zoomist("#ctn-zoomist-1", {
            maxScale: 10,
        });
    });
}