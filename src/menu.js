import { home, contact, homeContent, menuContent, 
    images, itemName, itemDesc, itemPrice, leftButton, rightButton } from "./index";


export function displayNameAndPrice(image) {
    switch (image) {
        case images[0]: itemName.innerText = "Aloo Gobi";
            itemDesc.innerText = "Potato & cauliflower cooked in savory sauce.";
            itemPrice.innerText = "$10.95";
            break;
        case images[1]: itemName.innerText = "Aloo Palak";
            itemDesc.innerText = "Potato and spinach cooked in aromatic sauce";
            itemPrice.innerText = "$10.95";
            break;
        case images[2]: itemName.innerText = "Chana Masala";
            itemDesc.innerText = "Garbanzo beans cooked in exotic spices.";
            itemPrice.innerText = "$10.95";
            break;
        case images[3]: itemName.innerText = "Vegetable Korma";
            itemDesc.innerText = "Mixed vegetables cooked in coconut sauce.";
            itemPrice.innerText = "$10.95";
            break;
        case images[4]: itemName.innerText = "Palak Paneer";
            itemDesc.innerText = "Indian cottage cheese cooked with pureed spinach & spices.";
            itemPrice.innerText = "$12.95";
            break;
        case images[5]: itemName.innerText = "Mutter Paneer";
            itemDesc.innerText = "Indian cottage cheese & green peas cooked in savory sauce.";
            itemPrice.innerText = "$12.95";
            break;
        case images[6]: itemName.innerText = "Paneer Butter Masala";
            itemDesc.innerText = "Indian cottage cheese cooked in a silky smooth tomato gravy.";
            itemPrice.innerText = "$12.95";
            break;
        case images[7]: itemName.innerText = "Bhindi Masala";
            itemDesc.innerText = "Okra cooked in spices.";
            itemPrice.innerText = "$12.95";
            break;
        case images[8]: itemName.innerText = "Eggplant Masala";
            itemDesc.innerText = "Eggplant cooked in spices.";
            itemPrice.innerText = "$12.95";
            break;
    }
}


export function displayMenu(event) {
    homeContent.style.display = "none";
    menuContent.style.display = "block";
    displayNameAndPrice(images[0]);
    home.style.color = "white";
    contact.style.color = "white";
    this.style.color = "yellow";
}

export function rightSlide(event) {
    for (let i = 0; i < images.length; i++) {
        let imageStyleVal = getComputedStyle(images[i]);
        if (imageStyleVal.left === "0px") {
            images[i].style.animation = "right-slide1 2s";
            images[i].style.animationFillMode = "forwards";
            images[i + 1].style.animation = "right-slide2 2s";
            images[i + 1].style.animationFillMode = "forwards";
            displayNameAndPrice(images[i + 1]);
            if (i === 0) {
                leftButton.style.visibility = "visible";
            } else if (i === images.length - 2) {
                event.target.style.visibility = "hidden";
            }
            return;
        }
    }
}

export function leftSlide(event) {
    for (let i = images.length - 1; i >= 0; i--) {
        let imageStyleVal = getComputedStyle(images[i]);
        if (imageStyleVal.left === "0px") {
            images[i].style.animation = "left-slide1 2s";
            images[i].style.animationFillMode = "forwards";
            images[i - 1].style.animation = "left-slide2 2s";
            images[i - 1].style.animationFillMode = "forwards";
            displayNameAndPrice(images[i - 1]);
            if (i === 1) {
                event.target.style.visibility = "hidden";
                rightButton.style.visibility = "visible";
            } else if (images.length - 2) {
                rightButton.style.visibility = "visible";
            }
            return;
        }
    }
}