const products = [
    {
        shop_tag: "New",
        shop_title: "TRIPR",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/1.png"
    },
    {
        shop_tag: "Sale",
        shop_title: "Allen Solly",
        shop_subtitle: "Accessory",
        shop_price: 11.99,
        shop_discount: 21.99,
        imageUri:"assets/img/2.png"
    },
    {
        shop_tag: "Sale",
        shop_title: "Roadster",
        shop_subtitle: "Accessory",
        shop_price: 5.99,
        shop_discount: 12.99,
        imageUri:"assets/img/3.png"
    },
    {
        shop_tag: "New",
        shop_title: "Smartees",
        shop_subtitle: "Accessory",
        shop_price: 7.99,
        shop_discount: 14.99,
        imageUri:"assets/img/4.png"
    },
    {
        shop_tag: "New",
        shop_title: "ROYAL SCOUT",
        shop_subtitle: "Accessory",
        shop_price: 7.99,
        shop_discount: 14.99,
        imageUri:"assets/img/5.webp"
    },
    {
        shop_tag: "Sale",
        shop_title: "BLUE MARTIN",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/6.webp"
    },
    {
        shop_tag: "Sale",
        shop_title: "Blaq Ash",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mj3.webp"
    },
    {
        shop_tag: "Sale",
        shop_title: "GEOCARTER",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mj1.webp"
    },
    {
        shop_tag: "New",
        shop_title: "Plus 91",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mj2.png"
    },
    {
        shop_tag: "Sale",
        shop_title: "DIESEL",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/menwatch1.png"
    },
    {
        shop_tag: "Sale",
        shop_title: "FOSSIL",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/menwatch2.png"
    },
    {
        shop_tag: "Sale",
        shop_title: "TITAN",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/menwatch3.png"
    },
    {
        shop_tag: "New",
        shop_title: "ROLEX",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/menwatch4.png"
    },
    {
        shop_tag: "Sale",
        shop_title: "Robbie jones",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mshoes1.webp"
    },
    {
        shop_tag: "Sale",
        shop_title: "Xtoon",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mshoes2.webp"
    },
    {
        shop_tag: "Sale",
        shop_title: "RED TAPE",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mshoes3.webp"
    },
    {
        shop_tag: "New",
        shop_title: "WOODLAND",
        shop_subtitle: "Accessory",
        shop_price: 14.99,
        shop_discount: 29.99,
        imageUri:"assets/img/mshoes4.webp"
    }
];

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
    shopButton.setAttribute("href", "details.html");

    // Create i element with class "bx bx-cart-alt shop__icon"
    var shopIcon = document.createElement("i");
    shopIcon.classList.add("bx", "bx-cart-alt", "shop__icon");
    shopButton.appendChild(shopIcon);

    shopContent.appendChild(shopButton);

    return shopContent;
}

const shop__items = document.querySelector(".shop__items");
products.forEach((product) => shop__items.appendChild(card(product)));


