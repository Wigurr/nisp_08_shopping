const products = [
  { id: 1, name: "Chleb", price: 5 },
  { id: 2, name: "Mleko", price: 4 },
  { id: 3, name: "Ser", price: 8 },
  { id: 4, name: "Jajka", price: 10 }
];

const productList = document.getElementById("product-list");

// pobranie koszyka z localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// render produktów
function renderProducts() {
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price} zł</p>
      <button onclick="addToCart(${product.id})">Dodaj</button>
    `;

    productList.appendChild(div);
  });
}

// dodanie do koszyka
function addToCart(id) {
  const product = products.find(p => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Dodano do koszyka!");
}

const cartList = document.getElementById("cart-list");
const totalElement = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// render koszyka
function renderCart() {
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Koszyk jest pusty</p>";
    totalElement.innerText = "";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.price} zł</p>
    `;

    total += item.price;

    cartList.appendChild(div);
  });

  totalElement.innerText = "Suma: " + total + " zł";
}

// czyszczenie koszyka
function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
}

renderCart();
renderProducts();