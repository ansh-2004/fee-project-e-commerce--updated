let products = [
    {
        shop_tag: "New",
        shop_title: "TRIPR",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/1.png",
        id: 1,
        types : "tshirts",
        size : "s"
    },
    {
        shop_tag: "Sale",
        shop_title: "Allen Solly",
        shop_subtitle: "Accessories",
        shop_price: 11.99,
        shop_discount: 21.99,
        imageUri:"assets/img/2.png",
        id: 2,
        types : "tshirts",
        size : "M"
    },
    {
        shop_tag: "Sale",
        shop_title: "Roadster",
        shop_subtitle: "Accessories",
        shop_price: 5.99,
        shop_discount: 12.99,
        imageUri:"assets/img/3.png",
        id: 3,
        types : "tshirts",
        size : "L"

    },
    {
        shop_tag: "New",
        shop_title: "Smartees",
        shop_subtitle: "Accessories",
        shop_price: 7.99,
        shop_discount: 14.99,
        imageUri:"assets/img/4.png",
        id : 4,
        types : "tshirts",
        size : "s"
    },
    {
        shop_tag: "New",
        shop_title: "ROYAL SCOUT",
        shop_subtitle: "Accessories",
        shop_price: 7.99,
        shop_discount: 14.99,
        imageUri:"assets/img/5.png" ,
        id : 5,
        types : "shirts",
        size : "M"
    },
    {
        shop_tag: "Sale",
        shop_title: "BLUE MARTIN",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/6.png",
        id : 6,
        types : "shirts",
        size : "L"
    },
    {
        shop_tag: "Sale",
        shop_title: "Blaq Ash",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mj3.webp",
        id : 7,
        types : "Jackets",
        size : "s"
    },
    {
        shop_tag: "Sale",
        shop_title: "GEOCARTER",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mj1.webp",
        id : 8,
        types : "Jackets",
        size : "M"
    },
    
    {
        shop_tag: "New",
        shop_title: "Plus 91",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mj2.png",
        id : 9,
        types : "Jackets",
        size : "L"
    },
    {
        shop_tag: "Sale",
        shop_title: "DIESEL",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/menwatch1.png",
        id : 10,
        types : "Watches",
        size : "s"
    },
    {
        shop_tag: "Sale",
        shop_title: "FOSSIL",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/menwatch2.png",
        id : 11,
        types : "Watches",
        size : "M"
    },
    {
        shop_tag: "Sale",
        shop_title: "TITAN",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/menwatch3.png",
        id : 12,
        types : "Watches",
        size : "L"
    },
    {
        shop_tag: "New",
        shop_title: "ROLEX",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/menwatch4.png",
        id : 13,
        types : "Watches",
        size : "s"
    },
    {
        shop_tag: "Sale",
        shop_title: "Robbie jones",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mshoes1.webp",
        id : 14,
        types : "Shoes",
        size : "M"
    },
    {
        shop_tag: "Sale",
        shop_title: "Xtoon",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mshoes2.webp",
        id : 15,
        types : "Shoes",
        size : "L"
    },
    {
        shop_tag: "Sale",
        shop_title: "RED TAPE",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mshoes3.webp",
        id : 16,
        types : "Shoes",
        size : "L"
    },
    {
        shop_tag: "New",
        shop_title: "WOODLAND",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mshoes4.webp",
        id : 17,
        types : "Shoes",
        size : "L"
    },
    {
        shop_tag: "New",
        shop_title: "ASALI",
        shop_subtitle: "Accessories",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mjacket.jpg",
        id : 18,
        types : "Jackets",
        size : "L"
    },
];

// search functionaliyt 
const searchButton = document.getElementById('searchicon');
    const searchBox = document.getElementById('searchbox');
    const searchInput = document.getElementById('search-bar');
    const shopAllItems = document.getElementById('shop__items');
    if (searchButton) {
        searchButton.addEventListener("click", () => {
            searchBox.style.display = "block";
        });
    }
    document.getElementById('search-btn').addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        while(shop__items.firstChild){
            shop__items.removeChild(shop__items.firstChild)
        }
         const filteredProducts = products.filter(product =>
            product.shop_tag.toLowerCase().includes(searchTerm) || product.shop_title.toLowerCase().includes(searchTerm) || product.shop_subtitle.toLowerCase().includes(searchTerm) || product.types.toLowerCase().includes(searchTerm) 
        );
        showProducts(filteredProducts);
    });
function card(product) {
    // Create div element with class "shop__content"
    var shopContent = document.createElement("div");
    shopContent.classList.add("shop__content");

    // Create div element with class "shop__tag" and text content from the product
    var shopTag = document.createElement("div");
    shopTag.classList.add("shop__tag");
    shopTag.textContent = product.shop_tag;
    shopContent.appendChild(shopTag);

    // Create img element with src "assets/img/4.png" and class "shop__img"
    var shopImg = document.createElement("img");
    shopImg.setAttribute("src", product.imageUri);
    shopImg.setAttribute("alt", "");
    shopImg.classList.add("shop__img");
    shopImg.id="detailspage";
    shopContent.appendChild(shopImg);

    // Create h3 element with class "shop__title" and text content from the product
    var shopTitle = document.createElement("h3");
    shopTitle.classList.add("shop__title");
    shopTitle.textContent = product.shop_title;
    shopContent.appendChild(shopTitle);

    // Create span element with class "shop__subtitle" and text content from the product
    var shopSubtitle = document.createElement("span");
    shopSubtitle.classList.add("shop__subtitle");
    shopSubtitle.textContent = product.shop_subtitle;
    shopContent.appendChild(shopSubtitle);

    // Create div element with class "shop__prices"
    var shopPrices = document.createElement("div");
    shopPrices.classList.add("shop__prices");

    // Create span element with class "shop__price" and text content from the product
    var shopPrice = document.createElement("span");
    shopPrice.classList.add("shop__price");
    shopPrice.textContent = "$" + product.shop_price;
    shopPrices.appendChild(shopPrice);

    // Create span element with class "shop__discounts" and text content from the product
    var shopDiscounts = document.createElement("span");
    shopDiscounts.classList.add("shop__discounts");
    shopDiscounts.textContent = "$" + product.shop_discount;
    shopPrices.appendChild(shopDiscounts);

    shopContent.appendChild(shopPrices);

    // Create a element with class "button shop__button" and href "details.html"
    var shopButton = document.createElement("a");
    shopButton.classList.add("button", "shop__button");
    shopButton.id = "realcart";
    
    // Create i element with class "bx bx-cart-alt shop__icon"
    var shopIcon = document.createElement("i");
    shopIcon.classList.add("bx", "bx-cart-alt", "shop__icon");
    shopButton.appendChild(shopIcon);

    shopContent.appendChild(shopButton);

    return shopContent;
}

function showProducts(products) {
    const shop__items = document.querySelector(".shop__items");
    if(products.length === 0){
        const element = document.createElement('h1');
        element.textContent = 'No products found!';
        element.style.cssText = "font-size : 50px; margin-left : 100px; width : 500px; margin-top : 50px" ;
        shop__items.appendChild(element);
        return;
    }
    products.forEach((product) => shop__items.appendChild(card(product)));
}

showProducts(products);
 
// filter products 
function renderProducts() {
    const selectedFilters = Array.from(document.querySelectorAll('.filter input:checked'))
    .map(checkbox => checkbox.parentNode.querySelector('p').textContent.trim());
    console.log(selectedFilters);
    // const filteredProductss = products.filter(product => selectedFilters.includes(product.shop_tag));
    const filteredProductss = products.filter(product => 
        {
        return selectedFilters.includes(product.shop_tag) || selectedFilters.includes(product.types) || selectedFilters.includes(product.size) ;
    });
    const shopItems = document.querySelector(".shop__items");
    shopItems.innerHTML = '';
    filteredProductss.forEach(product => {
        shopItems.appendChild(card(product));
    });
  }
  // Attach event listeners to checkboxes
  const checkboxes = document.querySelectorAll('.filter input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', renderProducts);
  });

// cart real functiontiy 
let count = 0;
const countElement = document.getElementById('count');
const increaseButtons = document.querySelectorAll('.shop__button');

increaseButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    updateCount();
  });
});

function updateCount() {
  countElement.textContent = count;
}

// going to details page on clicking image 
const pagedetails = document.querySelectorAll('.shop__img');
    pagedetails.forEach(pagedetails =>{
        pagedetails.addEventListener('click',()=>{
            window.location.href = 'details.html';
        })
    })
    
  