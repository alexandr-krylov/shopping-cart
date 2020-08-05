const orderItems = [
];

const vat = 10;

renderCart();

function renderCart(){
    if (orderItems.length == 0) return;
    let total = 0
    let cart = $(".cart");
    cart.empty();
    cart.append($("<ul>"));
    orderItems.forEach((element) => {
        cart.find("ul").append($("<li>").text(element.name + ' ' + element.price));
        total += element.price;
    });
    cart.append($("<p>").text("VAT: " + vat + "%"));
    cart.append($("<p>").text("Total: " + (total * (1 + vat / 100)).toFixed(2)));
}

const addToCartButtons = $(".add-to-cart");

addToCartButtons.click(function(evt) {
    let itemCard = $(evt.target).parents(".item-card");
    let name = itemCard.find(".item").text();
    let price = parseFloat(itemCard.find(".price").text().substr(1));
    orderItems.push({name: name, price: price});
    renderCart();
});