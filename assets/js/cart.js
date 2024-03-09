
var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');
var checkout = document.getElementById('checkout');
var showcheckout = document.getElementById('showcheckout');
var ordered = document.getElementById('ordered');
var successul = document.getElementById('successful');
var completed = document.getElementById('completed');

checkout.addEventListener('click',function(){
  if(showcheckout.style.display == 'none'){
    showcheckout.style.display='block';
  }
})

ordered.addEventListener('click', function () {

showcheckout.style.display = 'none';
completed.style.display = 'none';

successul.textContent = 'Your Order has been placed successfully!';

})


const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itempriceElement = document.getElementById(itemprice);

  // Ensure the value is greater than 0 before decrementing
  if (parseInt(itemval.value) > 0) {
      itemval.value = parseInt(itemval.value) - 1;
      itemval.style.background = '#fff';
      itemval.style.color = '#000';
      itempriceElement.innerHTML = parseInt(itempriceElement.innerHTML) - 15;
      product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
      total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
  }

  // If the value becomes zero, remove the product item from the cart
  if (parseInt(itemval.value) === 0) {
      var productItem = itemval.closest('.deleted');
      productItem.remove();
  }
}

const increaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
// console.log(itemval.value);
if(itemval.value >= 5){
itemval.value = 5;
alert('max 5 allowed');
itemval.style.background = 'red';
itemval.style.color = '#fff';
}else{
itemval.value = parseInt(itemval.value) + 1;
itemprice.innerHTML  = parseInt(itemprice.innerHTML ) + 14;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + 14;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}
}

const  discount_code = () => {
let totalamtcurr = parseInt(total_cart_amt.innerHTML);
let error_trw = document.getElementById('error_trw');
if(discountCode.value === 'thapa'){
let newtotalamt = totalamtcurr - 15;
total_cart_amt.innerHTML = newtotalamt;
error_trw.innerHTML = "Hurray! code is valid";
}else{
error_trw.innerHTML = "Try Again! Valid code is thapa";
}
}

