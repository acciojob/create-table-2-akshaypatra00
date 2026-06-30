function createTable() {
    let norows = Number(prompt("Input number of rows"));
    let nocolo = Number(prompt("Input number of columns"));

    if (isNaN(norows) || isNaN(nocolo)) {
        return;
    }

    if (norows <= 0 || nocolo <= 0) {
        alert("Cannot create the table");
        return;
    }

    const table = document.getElementById("myTable");
    table.innerHTML = "";

    for (let i = 0; i < norows; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < nocolo; j++) {
            let column = document.createElement("td");
            column.textContent = `Row-${i} Column-${j}`;
            row.appendChild(column);
        }

        table.appendChild(row);
    }
}