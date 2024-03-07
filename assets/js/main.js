/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener("click",() =>{
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener("click",() =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
  cartShop.addEventListener("click",() =>{
    cart.classList.add('show-cart')
  })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
  cartClose.addEventListener("click",() =>{
    cart.classList.remove('show-cart')
  })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close')

const signup = document.getElementById("shift")
//       signupButton = document.querySelector("signup-button")
const searchbutton = document.getElementById('searchicon')
const searchbar = document.getElementById('searchbox')
/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton){
  loginButton.addEventListener("click",() =>{
    login.classList.add('show-login')
    
  })
}

if(searchbutton){
  searchbutton.addEventListener("click",()=>{
    document.getElementById("searchbox").style.display="block"
    
  })
}


if(signup){
  signup.addEventListener("click",() =>{
    document.getElementById("create").style.translate="0";
  })
}

// const closeSignup = document.getElementById("signup-close");
// closeSignup.addEventListener("click", () => {
//   document.getElementById("create").style.translate="100%";
// })

const signupClose = document.getElementById("signup-close");
// sighupClose.addEventListener("click", () => {
//   signup.addEventListener("click",() =>{
//     document.getElementById("create").style.translate="100%";
//   })
// })


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */

if(loginClose){
  loginClose.addEventListener("click",() =>{
    login.classList.remove('show-login')
  })
}
if(signupClose){
  signupClose.addEventListener("click",() =>{
    create.style.display='none';
  })
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
  const header = document.getElementById('header')
  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener( 'scroll', scrollHeader )
/*=============== NEW SWIPER ===============*/

var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
  
});

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is higher than 350 viewport height, add the show-scroll close to a tag with the scroll-top  class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll('.questions__item')
accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector('.questions__header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem !== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions__content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }
  
  else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
  document.querySelector(".style__switcher").classList.toggle("open");
})

// HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll",()=>{
  if(document.querySelector(".style__switcher").classList.contains("open")){
    document.querySelector(".style__switcher").classList.remove("open");
  }
})

//THEME COLORS
function themeColors(){
  const colorStyle = document.querySelector(".js-color-style"),
    themeColorsContainer = document.querySelector(".js-theme-colors");
  themeColorsContainer.addEventListener("click",({target})=>{
   if(target.classList.contains("js-theme-color-item")){
    localStorage.setItem("color",target.getAttribute("data-js-theme-color"));
    setColors();
   }
  })
  function setColors(){
    let path = colorStyle.getAttribute("href").split("/");
    path = path.slice(0,path.length - 1);
    colorStyle.setAttribute("href",path.join("/") + "/" + localStorage.getItem("color") + ".css");
    if(document.querySelector(".js-theme-color-item.active-link")){
      document.querySelector(".js-theme-color-item.active-link").classList.remove("active-link");
    }
    document.querySelector("[data-js-theme-color="+ localStorage.getItem("color")+ "]").classList.add("active-link");
  }
  if(localStorage.getItem("color") !== null) {
    setColors();
  }
  else{
    const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
    document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active-link");
  }
  
}
// themeColors();

console.log('hlo');



// realtime login 

document.addEventListener("DOMContentLoaded", function() {
  const login = document.getElementById('login');
  const loginButton = document.getElementById('buttonforlogin');
  const loginClose = document.getElementById('login-close');
  const signup = document.getElementById('shift');
  const signupClose = document.getElementById('signup-close');
  const create = document.getElementById('create');
  const loginShift = document.getElementById('login-shift');
  const signupButton = document.getElementById('signup-button');
  const headerUser = document.getElementById('header-user');
  const logoutButton = document.getElementById('logout-button');
  
  // Load users from localStorage or initialize an empty array if it doesn't exist
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}; 

  function saveUser(name,email, password) {
    const newUser = { name,email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  function loginWithEmailAndPassword(email, password) {

    const foundUser = users.find(user => user.email === email && user.password === password);

    // return !!foundUser; // Returns true if user is found, false otherwise
    return foundUser;
  }

  function showLogin() {
    login.classList.add('show-login');
  }

  function hideLogin() {
    login.classList.remove('show-login');
  }

  function showSignup() {
    create.classList.add('show-signup');
  }

  function hideSignup() {
    create.classList.remove('show-signup');
  }

  function handleLogin() {
    console.log('handlelogin');
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = loginWithEmailAndPassword(email, password);
  //   if (loginWithEmailAndPassword(email, password)) {
  //     alert('Login successful');
  //     // Redirect or perform actions after successful login
  //   } else {
  //     alert('Invalid email or password');
  //   }
  // }
  if (user) {
   
    currentUser = user;
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    headerUser.textContent = `Welcome, ${currentUser.name === undefined ? "" : currentUser.name}`;
    alert('Login successful');
    hideLogin();
  } else {
    alert('Invalid email or password');
  }
}


  function handleSignup() {
    console.log('handlesignup');
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    

    // Basic validation
    if (name && email && password) {
      saveUser(name,email, password);
      alert('Account created successfully');
      hideSignup();
    } else {
      alert('Please fill in all fields');
    }
  }
  function handleLogout() {
    localStorage.removeItem('currentUser');
    currentUser = {};
    headerUser.textContent = "Welcome";
  }

  if (loginButton) {
    loginButton.addEventListener("click", handleLogin);
  }

  if (loginClose) {
    loginClose.addEventListener("click", hideLogin);
  }

  if (signup) {
    signup.addEventListener("click", showSignup);
  }

  if (signupClose) {
    signupClose.addEventListener("click", hideSignup);
  }

  if (loginShift) {
    loginShift.addEventListener("click", hideSignup);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", handleLogout);
  }

if (signupButton) {
signupButton.addEventListener("click", handleSignup);
}
if (currentUser) {
  headerUser.textContent = `Welcome, ${currentUser.name === undefined? "" : currentUser.name}`;
  console.log(headerUser);
}

});


// console.log('hlo');

// document.addEventListener("DOMContentLoaded", function() {
//   const check = document.getElementById("check")
//   console.log("Login button: ", check);
//   const login = document.getElementById('login');
//   const loginButton = document.getElementById('buttonforlogin');
  
//   const loginClose = document.getElementById('login-close');
//   const signup = document.getElementById('shift');
//   const signupClose = document.getElementById('signup-close');
//   const create = document.getElementById('create');
//   const loginShift = document.getElementById('login-shift');
//   const signupButton = document.getElementById('signup-button');
//   const headerUser = document.getElementById('header-user');
//   const logoutButton = document.getElementById('logout-button');
  
//   // Load users from localStorage or initialize an empty array if it doesn't exist
//   let users = JSON.parse(localStorage.getItem('users')) || [];
//   let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}; 

//   function saveUser(name, email, password) {
//     const newUser = { name, email, password };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//   }

//   function loginWithEmailAndPassword(email, password) {
//     const foundUser = users.find(user => user.email === email && user.password === password);
//     return foundUser;
//   }

//   function showLogin() {
//     login.classList.add('show-login');
//   }

//   function hideLogin() {
//     login.classList.remove('show-login');
//   }

//   function showSignup() {
//     create.classList.add('show-signup');
//   }

//   function hideSignup() {
//     create.classList.remove('show-signup');
//   }

//   function handleLogin() {
//     console.log('loginbutton clicked')
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;
//     const user = loginWithEmailAndPassword(email, password);

//     if (user) {
//       currentUser = user;
//       localStorage.setItem('currentUser', JSON.stringify(currentUser));
//       headerUser.textContent = `Welcome, ${currentUser.name}`;
//       alert('Login successful');
//       hideLogin();
//     } else {
//       alert('Invalid email or password');
//     }
//   }

//   function handleSignup() {
//     const name = document.getElementById('signup-name').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     if (name && email && password) {
//       saveUser(name, email, password);
//       alert('Account created successfully');
//       hideSignup();
//     } else {
//       alert('Please fill in all fields');
//     }
//   }

//   function handleLogout() {
//     localStorage.removeItem('currentUser');
//     currentUser = {};
//     headerUser.textContent = "Welcome";
//   }

//   if (loginButton) {
//     loginButton.addEventListener("click", () => console.log("Login button clicked."));
//   }

//   if (loginClose) {
//     loginClose.addEventListener("click", hideLogin);
//   }

//   if (signup) {
//     signup.addEventListener("click", showSignup);
//   }

//   if (signupClose) {
//     signupClose.addEventListener("click", hideSignup);
//   }

//   if (loginShift) {
//     loginShift.addEventListener("click", hideSignup);
//   }

//   if (logoutButton) {
//     logoutButton.addEventListener("click", handleLogout);
//   }

//   if (signupButton) {
//     signupButton.addEventListener("click", handleSignup);
//   }

//   if (currentUser && (currentUser.name || currentUser.email)) {
//     headerUser.textContent = `Welcome, ${currentUser.name || currentUser.email}`;
//   }
// });


