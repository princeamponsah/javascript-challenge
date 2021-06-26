// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData)

// Select table body
var tbody = d3.select("tbody");

// Loop to add data to table on Website --- comment out console logs
tableData.forEach(function(ufoReport) {
    // Loop through `data` and console.log each UFO report object
    // console.log(ufoReport);

    // Add a row for every element in data
    var row = tbody.append("tr");

    // add key value pair (one cell at a time) into the table
    Object.entries(ufoReport).forEach(function([key, value]) {
        // console.log(key, value);
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
  });
});


// -----------------Create form---------------

// select button
var button = d3.select("#filter-btn")

// select the Form
var form = d3.select("#form")

// Create event handler
button.on("click",runEnter)
form.on("submit",runEnter)

// complete the event handler function for the form
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select input Element
    var inputElement = d3.select("datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    // create the filter and assign to it the input value
    var filteredData = tableData.filter(date => date.datetime === inputValue)

    
    
    Object.entries(filteredData).forEach(function([key, value]) {
        // console.log(key, value);
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
  });
}