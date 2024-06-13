// ?
import "./style.css";

// most of the time, there is no point in doing it like this (just refreshing my memory)
import study_img_url from './studying.jpg'
const study_img = document.getElementById('img-study')! as HTMLImageElement;
study_img.src = study_img_url;
