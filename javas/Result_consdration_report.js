document.getElementById("print-btn").addEventListener("click", function() {
    window.print();
});
document.getElementById("add-col-btn").addEventListener("click", function() {
    var table = document.getElementById("result-table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<input type='text' value='New Column'>";
    cell2.innerHTML = "<input type='text' value='New Column'>";
});

document.getElementById("remove-col-btn").addEventListener("click", function() {
    var table = document.getElementById("result-table");
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
});

document.getElementById("add-row-btn").addEventListener("click", function() {
    var table = document.getElementById("result-table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = "<input type='text' value='New Row'>";
    cell2.innerHTML = "<input type='text' value='New Row'>";
    cell3.innerHTML = "<input type='text' value='New Row'>";
    cell4.innerHTML = "<input type='text' value='New Row'>";
    cell5.innerHTML = "<input type='text' value='New Row'>";
    cell6.innerHTML = "<input type='text' value='New Row'>";
    cell7.innerHTML = "<button class='remove-row-btn'>Remove Row</button>";
});

document.querySelectorAll(".remove-row-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        var row = btn.parentElement.parentElement;
        row.parentNode.removeChild(row);
    });
});