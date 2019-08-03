
function deleteItem(e){
  const item = e.parentNode; 
  item.remove()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

function createCalculatePrice(){
  const quantities = document.getElementsByClassName("quantity");
  const prices = document.getElementsByClassName("price");
  const subtotals = document.getElementsByClassName("subtotal");
  const totalcart = document.querySelector(".totalprice");
  let sum = 0;
  
  for (let i = 0; i < quantities.length; i++) {
    let quantity = quantities[i].value;
    let price = prices[i].innerText;
    const calculateprice = price * quantity; 
    subtotals[i].innerText = calculateprice;
    sum = sum + calculateprice; 
  }

  totalcart.innerText = sum;
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


const priceProduct = document.getElementsByClassName("price").innerText
const quantityNumber = parseInt(document.getElementsByClassName("quantity")).value;
const subtotal = priceProduct * quantityNumber
