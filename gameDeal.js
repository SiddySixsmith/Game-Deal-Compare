//Variables
var searchBtn = document.getElementById("searchButton");
var userInput = document.getElementById("userInput");

var menu = document.getElementById("menu-ul");
var titleEl = document.getElementById("userInput");

var searchResult = document.getElementById("search-result");


// Tested the responses from API for List of Games
var formdata = new FormData();
var requestOptions = {
    method: "GET",
    redirect: "follow"
};

// Function to get the games

// Use fetch to get responses
fetch("https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0", requestOptions)
.then(test)
.catch(function(error) {
    //handle the error
});
async function test(response) {
    // handle the response
    var result = await response.json()
    console.log(result)

    var li = document.createElement("li");
    li.textContent = result[0].external;
    menu.appendChild(li);

    var li = document.createElement("li");
    li.textContent = "Cheapest $" +result[0].cheapest;
    menu.appendChild(li);

    var imgGame = document.getElementById("game-image");
    imgGame.src = result[0].thumb;
    menu.appendChild(imgGame);
    

}





function fetchData() {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then(response => {
        
        if(!response.ok) {
            console.log(response);
            throw Error("ERROR")  
        }
        return response.json();        
    })
    .then(data => {
        console.log(data);
        const html = data.map(deals => {
            return `
            <div class="deal">
             <p><img src="${deals.thumb}" alt="${deals.title}"/></P>
             <h1 class="title"> ${deals.title} </h1>             
             <p> Normal Price : $ ${deals.normalPrice} </p>
             <p> Sale Price : $ ${deals.salePrice} </p>
             <p> Rating : ${deals.steamRatingPercent} </p>
             <p> Link : ${deals.metacriticLink} </p>
            </div> 
            `;

        }).join("");
        
        console.log(html);
        document.getElementById("search-result")
        .insertAdjacentHTML("afterbegin", html);

    })
    .catch(error => {
        console.log(error);
    });
}

fetchData();



//async function catchApideals() {
//    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
//    const json = await response.json();
//    searchResult.textContent = URL.createObjectURL()
//}

//catchApideals()
//    .then(response =>{
//        console.log("yay");
//    })
//    .catch(error => {        
//        console.log("error");
//        console.error(error);
//});



// function to get the games 
//fetch("https://www.cheapshark.com/api/1.0/games?ids=128,129,130")
//    .then(response => {
//
//        console.log(response);
//        return response.blob();
//    })
//    .then(response => {
//        console.log(response);
//    })
//    .catch(error => {
//        console.log("error!");
//        console.error("error")
//    });
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
