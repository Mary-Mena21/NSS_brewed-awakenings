import { getProducts, getEmployees, getOrders } from "./database.js";
//import { getProducts, getEmployees, getOrders } from "./database.js";

// Get copy of state for use in this module
const products = getProducts();
const employees = getEmployees();
const orders = getOrders();

// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => {
    let orderProduct = null;

    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product;
        }
    }

    return orderProduct;
};

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null;

    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee;
        }
    }

    return orderEmployee;
};

export const Orders = () => {
    let html = ``;
    html += `<ul>`;

    for (const order of orders) {
        const employee = findEmployee(order, employees);
        const product = findProduct(order, products);
        console.log(product);
        console.log(employee);

        html += `<li>${product.name} was sold by 
        ${employee.name} on ${new Date(
            order.timestamp
        ).toLocaleDateString()}</li>`;
    }

    html += `</ul>`;

    return html;
};

/*--------------------------------------------------------*/
/* short way */
// document.addEventListener("click", (clickEvent) => {
//     console.log(clickEvent.target);
//     for (const product of products) {
//         if (product.id === parseInt(clickEvent.target.id)) {
//             window.alert(`${product.name} costs: ${product.price}`);
//         }
//     }
// });

/* Long way */
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("product")) {
        const x = itemClicked.id.split("--")[1];
        for (const product of products) {
            if (product.id === parseInt(x)) {
                window.alert(` ${product.name} costs ${product.price}`);
            }
        }
    }
});
/*--------------------------------------------------------*/

document.addEventListener("click", (clickEvent) => {
    //console.log(clickEvent.target);

    let soldProduct = [];
    for (const order of orders) {
        if (order.employeeId === parseInt(clickEvent.target.id)) {
            //console.log(soldProduct);
            let x = order.employeeId;
            soldProduct.push(x);
        }
    }
    // let J = 0;
    // for (const product of products) {
    //     if (product.id === soldProduct[0]) {
    //         J = product.price * soldProduct.length;
    //     }
    // }

    let y = "";
    //console.log(soldProduct);
    for (let employee of employees) {
        if (employee.id === soldProduct[0]) {
            y = employee.name;
        }
    }
    window.alert(
        ` ${y} sold ${soldProduct.length} products. Total Price: x`
    );
    //window.alert(`${soldProduct.length} products`);
});
