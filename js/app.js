// document.addEventListener("DOMContentLoaded", () => {
//   let iconCart = document.querySelector("#lg-bag");
//   let closeCart = document.querySelector(".close");
//   let body = document.querySelector("body");
//   let listProductHTML = document.querySelector("#product1");
//   let listCartHTML = document.querySelector(".listCart");
//   let iconSpanCart = document.querySelector("#lg-bag span");

//   let listProducts = [];
//   let carts = [];

//   // Safely add event listeners with null checks
//   if (iconCart) {
//     iconCart.addEventListener("click", () => {
//       body.classList.toggle("showCart");
//     });
//   }

//   if (closeCart) {
//     closeCart.addEventListener("click", () => {
//       body.classList.toggle("showCart");
//     });
//   }

//   const addDataToHTML = () => {
//     if (!listProductHTML) return;

//     listProductHTML.innerHTML = "";
//     if (listProducts.length > 0) {
//       listProducts.forEach((product) => {
//         let newProduct = document.createElement("div");
//         newProduct.classList.add("item");
//         newProduct.dataset.id = product.id;
//         newProduct.innerHTML = `
//             <img src="${product.image}">
//             <h2>${product.name}</h2>
//             <div class="price">₹ ${product.price}</div>
//             <button class="addCart">Add To Cart</button>
//           `;
//         listProductHTML.appendChild(newProduct);
//       });
//     }
//   };

//   // Event delegation for add to cart
//   listProductHTML.addEventListener("click", (e) => {
//     let positionClick = e.target;
//     if (positionClick.classList.contains("addCart")) {
//       let product_id = positionClick.parentElement.dataset.id;
//       addToCart(product_id);
//     }
//   });

//   const addToCart = (product_id) => {
//     // Convert product_id to a number to ensure proper comparison
//     product_id = Number(product_id);

//     // Find if product is already in cart
//     let positionProductInCart = carts.findIndex(
//       (cartItem) => cartItem.product_id === product_id
//     );

//     if (positionProductInCart === -1) {
//       // Product not in cart, add new cart item
//       carts.push({
//         product_id: product_id,
//         quantity: 1,
//       });
//     } else {
//       // Product already in cart, increase quantity
//       carts[positionProductInCart].quantity += 1;
//     }

//     // Update cart display
//     addCartToHTML();
//     updateCartCount();
//     addCartToMemory();
//   };

//   const addCartToMemory = () => {
//     // Fixed function name
//     localStorage.setItem("cart", JSON.stringify(carts));
//   };

//   const updateCartCount = () => {
//     if (iconSpanCart) {
//       iconSpanCart.textContent = carts.reduce(
//         (total, cart) => total + cart.quantity,
//         0
//       );
//     }
//   };

//   const addCartToHTML = () => {
//     if (!listCartHTML) return;

//     listCartHTML.innerHTML = "";
//     let total = 0;

//     carts.forEach((cart) => {
//       // Find the product details
//       let productIndex = listProducts.findIndex(
//         (product) => product.id === cart.product_id
//       );
//       if (productIndex === -1) return;

//       let product = listProducts[productIndex];
//       let itemTotal = product.price * cart.quantity;
//       total += itemTotal;

//       let newCart = document.createElement("div");
//       newCart.classList.add("item");
//       newCart.dataset.id = cart.product_id;
//       newCart.innerHTML = `
//           <div class="image">
//             <img src="${product.image}" />
//           </div>
//           <div class="name">${product.name}</div>
//           <div class="totalPrice">₹ ${product.price * cart.quantity}</div>
//           <div class="quantity">
//             <span class="minus">< </span>
//             <span>${cart.quantity}</span>
//             <span class="plus">></span>
//           </div>
//         `;

//       listCartHTML.appendChild(newCart);
//     });
//     addCartToMemory(); // Fixed function call
//   };

//   listCartHTML.addEventListener("click", (e) => {
//     let positionClick = e.target;
//     if (
//       positionClick.classList.contains("minus") ||
//       positionClick.classList.contains("plus")
//     ) {
//       let product_id = positionClick.parentElement.parentElement.dataset.id;
//       let type = positionClick.classList.contains("minus") ? "minus" : "plus";
//       changeQuantity(product_id, type);
//     }
//   });

//   const changeQuantity = (product_id, type) => {
//     product_id = Number(product_id);
//     let positionItemInCart = carts.findIndex(
//       (value) => value.product_id === product_id
//     );
//     if (positionItemInCart >= 0) {
//       if (type === "plus") {
//         carts[positionItemInCart].quantity += 1;
//       } else {
//         let valueChange = carts[positionItemInCart].quantity - 1;
//         if (valueChange > 0) {
//           carts[positionItemInCart].quantity = valueChange;
//         } else {
//           carts.splice(positionItemInCart, 1);
//         }
//       }
//     }
//     addCartToMemory();
//     addCartToHTML();
//     updateCartCount();
//   };

//   const initApp = () => {
//     fetch("./json/products.json") // Updated path to match your directory
//       .then((response) => response.json())
//       .then((data) => {
//         listProducts = data;
//         addDataToHTML();

//         // Load cart from local storage
//         const storedCart = localStorage.getItem("cart");
//         if (storedCart) {
//           carts = JSON.parse(storedCart);
//           addCartToHTML();
//           updateCartCount();
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   };

//   initApp();
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const product = [
  {
    id: 0,
    image: "./images/1jpg",
    title: "Slumbersoft 4 Mattress",
    price: 14040,
  },
  {
    id: 1,
    image: "./images/2jpg",
    title: "Slumbersoft 5 Mattress",
    price: 13550,
  },
  {
    id: 2,
    image: "./images/3jpg",
    title: "8 Premium Spring Mattress",
    price: 21999,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return ``;
  })
  .join("");

var cart = [];

function addToCart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}

function displayCart(a) {
  let j = 0;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item) => {
        var { image, title, price } = item;
        return (
          `<div class='cart-item'>
        <div class='row-img'>
        <img class='rowimg' src=${image}>
        </div>
        <p style='font-size:12px;>${title}</p>
        <h2 style='font-size: 15px; '>&#8377 ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
