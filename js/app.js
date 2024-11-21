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
    image: './images/1jpg',
    title: 'Slumbersoft 4 Mattress',
    price: 14040,

  },
  {
    id: 1,
    image: './images/2jpg',
    title: 'Slumbersoft 5 Mattress',
    price: 13550,
  },
  {id: 2,
    image: './images/3jpg',
    title: '8 Premium Spring Mattress',
    price: 21999,
}
];
const categories = [...new Set(product.map((item)=>
{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{
var {image, title, price} = item;
return(
  ``
)
}).join('');

var cart=[];

function addToCart(a){
cart.push({...categories[a]});
displayCart();
}

function displayCart(a){
  let j= 0;
if(cart.length==0){
  document.getElementById('cartItem').innerHTML = "Your cart is empty";
}
else{
  document.getElementById('cartItem').innerHTML = cart.map((item)=>
  {
    var {image, title, price} = item;
    return(
      `<div class='cart-item'>
      <div class='row-img'>
      <img class='rowimg' src=${image}>
      </div>
      <p style='font-size:12px;>${title}</p>
      <h2 style='font-size: 15px; '>&#8377 ${price}.00</h2>`+
      "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
    )
  }).join('');
}
}


  