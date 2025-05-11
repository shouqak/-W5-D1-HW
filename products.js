
  window.onload = () => {
  let butHeader = document.getElementById("butHeader");

  let isLogin = JSON.parse(localStorage.getItem("isLogin"));

  if (isLogin && isLogin.username) {
    butHeader.textContent = `  اهلا  ${isLogin.username}`;

    butHeader.href = "./index.html"; 
  }
};

let user = localStorage.getItem("loggedInUser");



async function fetchProducts() {
  
    let response = await fetch("https://fakestoreapi.com/products ");
    let products = await response.json();
    let productsCard = document.getElementById("products");

    products.map(product => {
      let cards = document.createElement("div");
       cards.classList.add("cards"); 

      let text = document.createElement("h4");
      let img = document.createElement("img");
      let price = document.createElement("p")
       text.classList.add("text"); 
       text.className = "my-5 fs-4";
       price.className = "my-4 fs-4 fd";
      text.innerText = product.title;
      img.src = product.image;
      price.innerText = `السعر: ${product.price} `;

  cards.appendChild(text);
  cards.appendChild(img);
  cards.appendChild(price);

      productsCard.appendChild(cards);
    });
  
}


fetchProducts();