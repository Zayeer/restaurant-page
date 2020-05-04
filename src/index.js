import { displayHome } from "./homepage";
import { displayMenu, rightSlide, leftSlide} from "./menu";
import { displayContact } from "./contact";

const content = document.getElementById("content");

//append required html to the div#content
content.innerHTML =`<ul class="nav-container">
           <li class="home"><a href="#">Home</a></li>
           <li class="menu"><a href="#">Menu</a></li>
           <li class="contact"><a href="#">Contact</a></li>
       </ul>
       <div class = "home-content">
            <div class="page-title">   
                <h1>Veg Delight</h1>
                <i class="fas fa-seedling" id="seed"></i>
            </div>
            <div class = "about-us">
              <h2>About Us</h2>
              <br>
              <p>Veg Delight is a classy and elegant Indian restaurant established in 1984. Our culinary philosophy is
                deceptively simple. We celebrate the very best of Indian food. The Light of India cuisine is an extraordinary combination of flavours, delicate seasonings, in- house freshly ground spices, marinades, and complex tastes. We use only fresh and locally sourced ingredients.</p>
           </div>
       </div>
       <div class="menu-content">
            <figure id="slider">
               <img src="assets/images/Aloo_Gobi.jpg" alt="aloo-gobi">
               <img src="assets/images/aloo_palak.jpg" alt="aloo-palak">
               <img src="assets/images/chana_masala.jpg" alt="chana-masala">
               <img src="assets/images/vegetable_korma.jpg" alt="vegetable-korma">
               <img src="assets/images/palak_paneer.jpg" alt="palak-paneer">
               <img src="assets/images/Mutter_Paneer.png" alt="mutter-paneer">
               <img src="assets/images/Paneer_Butter_Masala.jpg" alt="paneer-butter-masala">
               <img src="assets/images/Bhindi_Masala.jpg" alt="bhindi-masala">
               <img src="assets/images/eggplant_masala.jpg" alt="eggplant-masala">
            </figure>
            <div class="slide-buttons">
                <div class="left-but-bg">    
                    <button class="left-button">&#8592;</button>
                </div>
                <div class="right-but-bg">
                    <button class="right-button">&#8594;</button>
                </div>
            </div>
            <div class="name-price">
                <p class="name"></p>
                <p class="desc"></p>
                <p class="price"></p>
            </div>
           </div>
           <div class="contact-content">
                 <form class="contact-form">
                   <input type="text" placeholder="Name*" id="contact-name">
                   <input type="email" placeholder="Email*" id="contact-email">
                   <textarea placeholder="Comment Here*" cols="30" rows="10" id="contact-textarea"></textarea>
                   <button id="contact-send">Send Message</button>
                 </form>
                 <div class="contact-address">
                    <h3>Address:</h3>
                    <p>XXXX Venice Boulevard Culver City, CA XXXX</p>
                    <h3>Telephone:</h3>
                    <p>(XXX)XXX-XXXX</p>
                    <h3>Mail-Id</h3>
                    <p>XXXXX@gmail.com</p>
                    <h3>Business Hours</h3>
                    <p><strong>Tuesday - Sunday</strong> : 11:00 am to 10:00 pm
                    <strong>Monday</strong> Closed</p>
                    <h3>Social Media:</h3>
                    <div class="contact-icons">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    </div>
                 </div>
           </div> 
       </div>`

      
//onload and home section
const leaf = document.querySelector("#seed");
const title = document.querySelector(".page-title>h1");
export const home = document.querySelector(".home>a");
export const menu = document.querySelector(".menu>a");
export const contact = document.querySelector(".contact>a");
export const homeContent = document.querySelector(".home-content");
export const menuContent = document.querySelector(".menu-content");
export const contactContent = document.querySelector(".contact-content");

window.onload = () => {
    title.classList.add("h1Transition");
    setTimeout(() => {
        leaf.style.visibility = "visible";
        leaf.classList.add("seedTransition");
    }, 3000);
}
title.classList.remove("h1Transition");
leaf.classList.remove("seedTransition");
home.style.color = "yellow";

home.addEventListener("click", displayHome);    


//menu section
export const rightButton = document.querySelector(".right-button");
export const leftButton = document.querySelector(".left-button");
export const itemName = document.querySelector(".name-price > .name");
export const itemDesc = document.querySelector(".name-price > .desc");
export const itemPrice = document.querySelector(".name-price > .price");
export const itemData = document.querySelector(".name-price>p");
export let images = Array.from(document.querySelectorAll("figure>img"));

 
menu.addEventListener("click", displayMenu);
rightButton.addEventListener("click", rightSlide); //image slider
leftButton.addEventListener("click", leftSlide); 


//contact section

contact.addEventListener("click", displayContact);