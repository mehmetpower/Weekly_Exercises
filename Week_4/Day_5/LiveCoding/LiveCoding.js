// Create new object for Product (Price, Name, Id, Image)
class Product {
    constructor(id, name, price, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
function getProductList(){
    const retro = new Product("retro", "Retro", 1.0, "img/bottle-white.jpg");
    const camouflage = new Product("camouflage", "Camouflage", 1.0, "img/bottle-green.jpg");
    const hooks = new Product("hooks", "Hooks", 1.0, "img/bottle-grey.jpg");
    const product1 = new Product("product1", "Product1", 1.0, "img/bottle-grey.jpg");
    // Create list of products
    const products = [retro, camouflage, hooks, product1];
    return products;
}
// Create new object for Account (Name, Email, Id)
class Account {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}
// Create new object for Cart (Account,[]Product, {TotalPrice})
const joeBiden = new Account("joe.biden@gmail.com", "Sleepy Joe");
// Create a getFunction for products
// Get HTMLReference by GetElementById("products")
let listOfProduct = document.getElementById("products");
getProductList().forEach((product) => {
    listOfProduct.innerHTML += 
    "<li>" + 
        `<a href="en/shop.html?detail=${product.id}">` +
            `<img src="${product.image}" alt="${product.name}">`+
            `<h4 class="arw">${product.name}</h4>` +
        "</a>"
    "</li>";
});