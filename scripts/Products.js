import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
    let html = ``;
    html += `<ul>`;

    for (const product of products) {
        //html += `<li id="${product.id}">${product.name}</li>`; /* short way */
        html += `<li id="product--${product.id}">${product.name}</li>`;/* long way */
    }

    html += "</ul>";

    return html;
};



/* -----------------short way 2------------------ */
// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target;
//     for (const product of products) {
//                 if (product.id === parseInt(itemClicked.id)) {
//             window.alert(`${product.name}price is: ${product.price}`);
//         }
//     }
// });


/* -----------------short way------------------ */
/* document.addEventListener("click", (clickEvent) => {
    for (const product of products) {
                if (product.id === parseInt(clickEvent.target.id)) {
            window.alert(`${product.name} costs: ${product.price}`);
        }
    }
}); */


