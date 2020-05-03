import { menu, contact, homeContent, menuContent, contactContent, images } from "./index";
import { displayNameAndPrice } from "./menu";

export function displayHome() {
    menu.style.color = "#fff";
    contact.style.color = "#fff";
    this.style.color = "yellow";
    for(let i = 0; i<images.length; i++) {
        if(images[i].style.hasOwnProperty("animation")) {
            images[i].style.animation = "none";
            images[i].style.animationFillMode = "none";
        }
    }
    displayNameAndPrice(images[0]);
    menuContent.style.display = "none";
    contactContent.style.display = "none";
    homeContent.style.display = "block";
}
