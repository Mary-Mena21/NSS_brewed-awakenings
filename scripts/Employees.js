import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html=``
     html += `<ul>`

    for (const employee of employees) {
        html += `<li id="${employee.id}">${employee.name}</li>`
    }

    html += `</ul>`

    return html
}

