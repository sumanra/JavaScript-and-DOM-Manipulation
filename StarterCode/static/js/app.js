// Assign the data from `data.js` to a descriptive variable
var tabledata = data;
// Select the tbody
var tbody = d3.select("tbody");

function renderTable(){
    tbody.html("");// remove everything
    tabledata.forEach(function(d){
        var row = tbody.append("tr");
        Object.entries(d).forEach(function([key,value]){
            var cell = tbody.append("td");// appending/filling all the rows
            cell.text(value);
        });
    });
}
// Select the filter-btn which is id
var submit = d3.select("#filter-btn");
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    tabledata = data.filter(function(d){
        var searchdate = d.datetime;//fetch the date time from your data set
        return searchdate === inputValue;// subset of original 

    });
    renderTable();
  });
  
renderTable();

