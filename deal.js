//Variables

// Testing the responses to see if Game Look Up API working (WORKED!)
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://www.cheapshark.com/api/1.0/games?id=612", requestOptions)
.then(response => response.text()
.then(result => console.log(result))
.catch(error => console.log('error', error)));


//Testing to see the responses from List of Deals working


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15", requestOptions)
.then(response => response.text()
.then(result => console.log(result))
.catch(error => console.log("error". error)));

// set up div card ?
// creating the elements to display the results ?


// Function search API showing the list of game deals
// 1. Use Fetch to get the responses
// 2. return response Json
// 3. run a loop through the results


// results to be put in heading elements (innerHTML)
// using Catch to get the errors

// 1. grab the info to put in the form
// 2. grab cheapestPrice 
// 3. grab the deals (storeID, price, retailPrice, savings)

// print the result /may create table and elements?
// append the elements
