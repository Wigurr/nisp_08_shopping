const cartList = document.getElementById("cart-list");
const totalSpan = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function getCartProducts() {
  return products.filter(p => cart.includes(p.id));
}

// Renderowanie koszyka
function renderCart() {
  cartList.innerHTML = "";

  const cartProducts = getCartProducts();

  if (cartProducts.length === 0) {
    cartList.innerHTML = "<p>Koszyk jest pusty</p>";
    totalSpan.textContent = "0";
    return;
  }

  let total = 0;

  cartProducts.forEach(product => {
    total += product.price;

    const div = document.createElement("div");
    div.innerHTML = `
      ${product.name} - ${product.price} zł
      <button onclick="removeFromCart(${product.id})">Usuń</button>
    `;

    cartList.appendChild(div);
  });

  totalSpan.textContent = total;
}

// Usuwanie produktu
function removeFromCart(id) {
  cart = cart.filter(item => item !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();