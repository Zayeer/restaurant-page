import { home, menu, homeContent, menuContent, contactContent, images } from "./index";
import {displayNameAndPrice} from "./menu";

export function displayContact() {
    home.style.color = "#fff";
    menu.style.color = "#fff";
    for (let i = 0; i < images.length; i++) {
        if (images[i].style.hasOwnProperty("animation")) {
            images[i].style.animation = "none";
            images[i].style.animationFillMode = "none";
        }
    }
    displayNameAndPrice(images[0]);
    this.style.color = "yellow";
    homeContent.style.display = "none";
    menuContent.style.display = "none";
    contactContent.style.display = "flex";
};