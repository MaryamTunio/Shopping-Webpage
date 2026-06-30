// // script.js
// const products = [
// {
//     name: "Wireless Headphones",
//     category: "electronics",
//     price: "$99",
//     rating: "★★★★☆",
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
// },

// {
//     name: "Smart Watch",
//     category: "electronics",
//     price: "$149",
//     rating: "★★★★★",
//     image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
// },

// {
//     name: "Men's T-shirt",
//     category: "clothing",
//     price: "$59",
//     rating: "★★★★☆",
//     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
// },

// {
//     name: "Women's Dress",
//     category: "clothing",
//     price: "$75",
//     rating: "★★★★★",
//     image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500"
// },
// {
//     name: "Modern Chair",
//     category: "home",
//     price: "$120",
//     rating: "★★★★☆",
//     image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
// },

// {
//     name: "Table Lamp",
//     category: "home",
//     price: "$35",
//     rating: "★★★★★",
//     image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500"
// }
// ];

// const productContainer = document.getElementById("productContainer");
// const buttons = document.querySelectorAll(".filter-btn");

// function displayProducts(category = "all") {

//     productContainer.innerHTML = "";

//     const filteredProducts = category === "all"
//         ? products
//         : products.filter(product => product.category === category);

//     filteredProducts.forEach(product => {

//         productContainer.innerHTML += `
//         <div class="product-card">
//             <img src="${product.image}" alt="${product.name}">
            
//             <div class="product-info">
//                 <h3>${product.name}</h3>
//                 <p class="price">${product.price}</p>
//                 <p class="rating">${product.rating}</p>
//             </div>
//         </div>
//         `;
//     });
// }

// buttons.forEach(button => {

//     button.addEventListener("click", () => {

//         buttons.forEach(btn => btn.classList.remove("active"));

//         button.classList.add("active");

//         const category = button.dataset.category;

//         displayProducts(category);
//     });

// });

// displayProducts();

// script.js
const products = [
{
    name: "Wireless Headphones",
    category: "electronics",
    price: "$99",
    rating: "★★★★☆",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
    name: "Smart Watch",
    category: "electronics",
    price: "$149",
    rating: "★★★★★",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
},

{
    name: "Men's T-shirt",
    category: "clothing",
    price: "$59",
    rating: "★★★★☆",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},

{
    name: "Women's Dress",
    category: "clothing",
    price: "$75",
    rating: "★★★★★",
    // CHANGED: Updated to a beautiful, modern dress image link
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
},
{
    name: "Modern Chair",
    category: "home",
    price: "$120",
    rating: "★★★★☆",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
},

{
    name: "Table Lamp",
    category: "home",
    price: "$35",
    rating: "★★★★★",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500"
}
];

const productContainer = document.getElementById("productContainer");
const buttons = document.querySelectorAll(".filter-btn");

function displayProducts(category = "all") {

    productContainer.innerHTML = "";

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {

        productContainer.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <p class="rating">${product.rating}</p>
            </div>
        </div>
        `;
    });
}

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        displayProducts(category);
    });

});

displayProducts();