// from data.js
var tableData = data;
// YOUR CODE HERE!
// console.log(tableData)

// Select table body
var tbody = d3.select("tbody");

// copy block of code below into runEnter function to perform search 
// -----Loop to add data to table on Website --- comment out console logs
// tableData.forEach(function(ufoReport) {
//     // Loop through `data` and console.log each UFO report object
//     // console.log(ufoReport);

//     // Add a row for every element in data
//     var row = tbody.append("tr");

//     // add key value pair (one cell at a time) into the table
//     Object.entries(ufoReport).forEach(function([key, value]) {
//         // console.log(key, value);
//         // Append a cell to the row for each value
//         // in the UFO report object
//         var cell = row.append("td");
//         cell.text(value);
//   });
// });


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
    var inputElement_date = d3.select("#datetime");
    // var inputElement_city = d3.select("#city")

    // get the value property of the input element
    var inputValue_date = inputElement_date.property("value");
    // var inputValue_city = inputElement_city.property("value");
    // console.log(inputValue_date)
    // console.log(inputValue_date)

    // create the filter and assign to it the input value
    var filteredData_date = tableData.filter(x => x.datetime === inputValue_date)
    // var filteredData_city = tableData.filter(x => x.city === inputValue_city)

    var cbody = d3.select("tbody")

    filteredData_date.forEach(function(ufoReport) {
      // Loop through `data` and console.log each UFO report object
      // console.log(ufoReport);
  
      // Add a row for every element in data
      var row = cbody.append("tr");
  
      // add key value pair (one cell at a time) into the table
      Object.entries(ufoReport).forEach(function([key, value]) {
          // console.log(key, value);
          // Append a cell to the row for each value
          // in the UFO report object
          var cell = row.append("td");
          cell.text(value);
      });
    });


    // --------------------Attempt to do level 2-------------------
    // filteredData_city.forEach(function(ufoReport) {
    //   // Loop through `data` and console.log each UFO report object
    //   // console.log(ufoReport);
  
    //   // Add a row for every element in data
    //   var row = cbody.append("tr");
  
    //   // add key value pair (one cell at a time) into the table
    //   Object.entries(ufoReport).forEach(function([key, value]) {
    //       // console.log(key, value);
    //       // Append a cell to the row for each value
    //       // in the UFO report object
    //       var cell = row.append("td");
    //       cell.text(value);
    //   });
    // });

    // if (inputElement_date && inputElement_date.value) {
    //   filteredData_date.forEach(function(ufoReport) {
    //     // Loop through `data` and console.log each UFO report object
    //     // console.log(ufoReport);
    
    //     // Add a row for every element in data
    //     var row = cbody.append("tr");
    
    //     // add key value pair (one cell at a time) into the table
    //     Object.entries(ufoReport).forEach(function([key, value]) {
    //         // console.log(key, value);
    //         // Append a cell to the row for each value
    //         // in the UFO report object
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    //   });
    // } else if (inputElement_city && inputElement_city.value) {
    //   filteredData_city.forEach(function(ufoReport) {
    //     // Loop through `data` and console.log each UFO report object
    //     // console.log(ufoReport);
    
    //     // Add a row for every element in data
    //     var row = cbody.append("tr");
    
    //     // add key value pair (one cell at a time) into the table
    //     Object.entries(ufoReport).forEach(function([key, value]) {
    //         // console.log(key, value);
    //         // Append a cell to the row for each value
    //         // in the UFO report object
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    //   });
    // } else {
    //   tableData.forEach(function(ufoReport) {
    //     // Loop through `data` and console.log each UFO report object
    //     // console.log(ufoReport);
    
    //     // Add a row for every element in data
    //     var row = tbody.append("tr");
    
    //     // add key value pair (one cell at a time) into the table
    //     Object.entries(ufoReport).forEach(function([key, value]) {
    //         // console.log(key, value);
    //         // Append a cell to the row for each value
    //         // in the UFO report object
    //         var cell = row.append("td");
    //         cell.text(value);
    //   });
    // });
    // }
}