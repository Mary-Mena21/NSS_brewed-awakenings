import { Employees } from "./Employees.js";
import { Orders } from "./Orders.js";
 import { Products } from "./Products.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section id="employee_Id" class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section id="product_Id" class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`;

mainContainer.innerHTML = applicationHTML;
