//Variables
var searchBtn = document.getElementById("searchButton");
var userInput = document.getElementById("userInput");
var searchResult = document.getElementById("search-result");


// 


async function catchApideals() {
    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    const json = await response.json();
    document.getElementById("search-result").textContent = URL.createObjectURL(blob)
}

catchApideals()
    .then(response =>{
        console.log("yay");
    })
    .catch(error => {        
        console.log("error");
        console.error(error);
});




// function to get the games 
fetch("https://www.cheapshark.com/api/1.0/games?ids=128,129,130")
    .then(response => {

        console.log(response);
        return response.blob();
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log("error!");
        console.error("error")
    });
//const userInputEl = async () => {
//    const response = await fetch("https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0.jason";
//    const myJson = await response.json();
//}
// results to be put in heading elements (innerHTML)
// using Catch to get the errors

// 1. grab the info to put in the form
// 2. grab cheapestPrice 
// 3. grab the deals (storeID, price, retailPrice, savings)

// print the result /may create table and elements?
// append the elements


// Tested the responses from API for List of Games
var formdata = new FormData();
var requestOptions = {
    method: "GET",
    body: formdata,
    redirect: "follow"
}





function getGames() {
   // 1. Use Fetch to get the responses
   

}

var requestOptions = {
    method: "GET",
    redirect: "follow"
};


// Function search API showing the list of game deals
    // 1. Use Fetch to get the responses


    


// set up div card ?
// creating the elements to display the results ?


// 2. return response Json
// 3. run a loop through the results


// function handle the formSubmit
// 1. event.preventDefault
// 2. var for searchInput 
// loop throu searchInput to check if it's not true/error



// add eventListener to search 
//searchBtn.addEventListener("submit", handleSearchForm);
