/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: displayContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayContact", function() { return displayContact; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function displayContact() {
    _index__WEBPACK_IMPORTED_MODULE_0__["home"].style.color = "#fff";
    _index__WEBPACK_IMPORTED_MODULE_0__["menu"].style.color = "#fff";
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__["images"].length; i++) {
        if (_index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.hasOwnProperty("animation")) {
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.animation = "none";
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.animationFillMode = "none";
        }
    }
    Object(_menu__WEBPACK_IMPORTED_MODULE_1__["displayNameAndPrice"])(_index__WEBPACK_IMPORTED_MODULE_0__["images"][0]);
    this.style.color = "yellow";
    _index__WEBPACK_IMPORTED_MODULE_0__["homeContent"].style.display = "none";
    _index__WEBPACK_IMPORTED_MODULE_0__["menuContent"].style.display = "none";
    _index__WEBPACK_IMPORTED_MODULE_0__["contactContent"].style.display = "flex";
};

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! exports provided: displayHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayHome", function() { return displayHome; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function displayHome() {
    _index__WEBPACK_IMPORTED_MODULE_0__["menu"].style.color = "#fff";
    _index__WEBPACK_IMPORTED_MODULE_0__["contact"].style.color = "#fff";
    this.style.color = "yellow";
    for(let i = 0; i<_index__WEBPACK_IMPORTED_MODULE_0__["images"].length; i++) {
        if(_index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.hasOwnProperty("animation")) {
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.animation = "none";
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.animationFillMode = "none";
        }
    }
    Object(_menu__WEBPACK_IMPORTED_MODULE_1__["displayNameAndPrice"])(_index__WEBPACK_IMPORTED_MODULE_0__["images"][0]);
    _index__WEBPACK_IMPORTED_MODULE_0__["menuContent"].style.display = "none";
    _index__WEBPACK_IMPORTED_MODULE_0__["contactContent"].style.display = "none";
    _index__WEBPACK_IMPORTED_MODULE_0__["homeContent"].style.display = "block";
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: home, menu, contact, homeContent, menuContent, contactContent, rightButton, leftButton, itemName, itemDesc, itemPrice, itemData, images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeContent", function() { return homeContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuContent", function() { return menuContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactContent", function() { return contactContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightButton", function() { return rightButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftButton", function() { return leftButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemName", function() { return itemName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemDesc", function() { return itemDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemPrice", function() { return itemPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemData", function() { return itemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
               <img src="/dist/images/Aloo_Gobi.jpg" alt="aloo-gobi">
               <img src="/dist/images/aloo_palak.jpg" alt="aloo-palak">
               <img src="/dist/images/chana_masala.jpg" alt="chana-masala">
               <img src="/dist/images/vegetable_korma.jpg" alt="vegetable-korma">
               <img src="/dist/images/palak_paneer.jpg" alt="palak-paneer">
               <img src="/dist/images/Mutter_Paneer.png" alt="mutter-paneer">
               <img src="/dist/images/Paneer_Butter_Masala.jpg" alt="paneer-butter-masala">
               <img src="/dist/images/Bhindi_Masala.jpg" alt="bhindi-masala">
               <img src="/dist/images/eggplant_masala.jpg" alt="eggplant-masala">
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
const home = document.querySelector(".home>a");
const menu = document.querySelector(".menu>a");
const contact = document.querySelector(".contact>a");
const homeContent = document.querySelector(".home-content");
const menuContent = document.querySelector(".menu-content");
const contactContent = document.querySelector(".contact-content");

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

home.addEventListener("click", _homepage__WEBPACK_IMPORTED_MODULE_0__["displayHome"]);    


//menu section
const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");
const itemName = document.querySelector(".name-price > .name");
const itemDesc = document.querySelector(".name-price > .desc");
const itemPrice = document.querySelector(".name-price > .price");
const itemData = document.querySelector(".name-price>p");
let images = Array.from(document.querySelectorAll("figure>img"));

 
menu.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__["displayMenu"]);
rightButton.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__["rightSlide"]); //image slider
leftButton.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__["leftSlide"]); 


//contact section

contact.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_2__["displayContact"]);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: displayNameAndPrice, displayMenu, rightSlide, leftSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayNameAndPrice", function() { return displayNameAndPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayMenu", function() { return displayMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightSlide", function() { return rightSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftSlide", function() { return leftSlide; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



function displayNameAndPrice(image) {
    switch (image) {
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][0]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Aloo Gobi";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Potato & cauliflower cooked in savory sauce.";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$10.95";
            break;
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][1]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Aloo Palak";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Potato and spinach cooked in aromatic sauce";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$10.95";
            break;
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][2]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Chana Masala";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Garbanzo beans cooked in exotic spices.";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$10.95";
            break;
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][3]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Vegetable Korma";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Mixed vegetables cooked in coconut sauce.";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$10.95";
            break;
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][4]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Palak Paneer";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Indian cottage cheese cooked with pureed spinach & spices.";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$12.95";
            break;
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][5]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Mutter Paneer";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Indian cottage cheese & green peas cooked in savory sauce.";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$12.95";
            break;
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][6]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Paneer Butter Masala";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Indian cottage cheese cooked in a silky smooth tomato gravy.";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$12.95";
            break;
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][7]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Bhindi Masala";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Okra cooked in spices.";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$12.95";
            break;
        case _index__WEBPACK_IMPORTED_MODULE_0__["images"][8]: _index__WEBPACK_IMPORTED_MODULE_0__["itemName"].innerText = "Eggplant Masala";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemDesc"].innerText = "Eggplant cooked in spices.";
            _index__WEBPACK_IMPORTED_MODULE_0__["itemPrice"].innerText = "$12.95";
            break;
    }
}


function displayMenu(event) {
    _index__WEBPACK_IMPORTED_MODULE_0__["homeContent"].style.display = "none";
    _index__WEBPACK_IMPORTED_MODULE_0__["menuContent"].style.display = "block";
    displayNameAndPrice(_index__WEBPACK_IMPORTED_MODULE_0__["images"][0]);
    _index__WEBPACK_IMPORTED_MODULE_0__["home"].style.color = "white";
    _index__WEBPACK_IMPORTED_MODULE_0__["contact"].style.color = "white";
    this.style.color = "yellow";
}

function rightSlide(event) {
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__["images"].length; i++) {
        let imageStyleVal = getComputedStyle(_index__WEBPACK_IMPORTED_MODULE_0__["images"][i]);
        if (imageStyleVal.left === "0px") {
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.animation = "right-slide1 2s";
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.animationFillMode = "forwards";
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i + 1].style.animation = "right-slide2 2s";
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i + 1].style.animationFillMode = "forwards";
            displayNameAndPrice(_index__WEBPACK_IMPORTED_MODULE_0__["images"][i + 1]);
            if (i === 0) {
                _index__WEBPACK_IMPORTED_MODULE_0__["leftButton"].style.visibility = "visible";
            } else if (i === _index__WEBPACK_IMPORTED_MODULE_0__["images"].length - 2) {
                event.target.style.visibility = "hidden";
            }
            return;
        }
    }
}

function leftSlide(event) {
    for (let i = _index__WEBPACK_IMPORTED_MODULE_0__["images"].length - 1; i >= 0; i--) {
        let imageStyleVal = getComputedStyle(_index__WEBPACK_IMPORTED_MODULE_0__["images"][i]);
        if (imageStyleVal.left === "0px") {
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.animation = "left-slide1 2s";
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i].style.animationFillMode = "forwards";
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i - 1].style.animation = "left-slide2 2s";
            _index__WEBPACK_IMPORTED_MODULE_0__["images"][i - 1].style.animationFillMode = "forwards";
            displayNameAndPrice(_index__WEBPACK_IMPORTED_MODULE_0__["images"][i - 1]);
            if (i === 1) {
                event.target.style.visibility = "hidden";
                _index__WEBPACK_IMPORTED_MODULE_0__["rightButton"].style.visibility = "visible";
            } else if (_index__WEBPACK_IMPORTED_MODULE_0__["images"].length - 2) {
                _index__WEBPACK_IMPORTED_MODULE_0__["rightButton"].style.visibility = "visible";
            }
            return;
        }
    }
}

/***/ })

/******/ });