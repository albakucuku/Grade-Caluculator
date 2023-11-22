function addRow() {
    var table = document.getElementById("gradeTable");
    var row = table.insertRow(table.rows.length);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = '<input type="text" placeholder="Type">';
    cell2.innerHTML = '<input type="number" placeholder="Weight (%)">';
    cell3.innerHTML = '<input type="number" placeholder="Score">';
}

function calculateGrade() {
    var table = document.getElementById("gradeTable");
    var totalPoints = 0;
    var totalWeight = 0;

    for (var i = 1; i < table.rows.length; i++) {
        var weight = parseFloat(table.rows[i].cells[1].getElementsByTagName("input")[0].value);
        var score = parseFloat(table.rows[i].cells[2].getElementsByTagName("input")[0].value);

        if (!isNaN(weight) && !isNaN(score)) {
            totalPoints += (score * weight / 100);
            totalWeight += weight;
        }
    }

    var resultElement = document.getElementById("result");
    if (totalWeight === 0) {
        resultElement.innerHTML = "No assignments entered. Cannot calculate the average.";
    } else {
        var averageGrade = (totalPoints / totalWeight) * 100;
        resultElement.innerHTML = "Your estimated class grade is: " + averageGrade.toFixed(2) + "%";
    }
}
