//Variables
var searchBtn = document.getElementById("searchButton");
var menu = document.getElementById("menu-ul");
var menu = document.getElementById("menu-ul");
var userInputEl = document.getElementById("userInput");
var searchResult = document.getElementById("search-result");




// function fetch second Api- deals of the games

function fetchData() {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then(response => {
        // check the response for error
        if(!response.ok) {
            console.log(response);
            throw Error("ERROR")  
        }
        return response.json();        
    })
    .then(data => {
        console.log(data);
        const html = data.map(deals => {
            // create div to store the results
            return `
                              
             <div class="deal">                
                <p><img src="${deals.thumb} alt="${deals.title}" /> </p>
                <h1 class="title" > ${deals.title} </h1>                          
                <p> Normal Price : $ ${deals.normalPrice} </p>
                <p> Sale Price : $ ${deals.salePrice} </p>
                <p> Rating : ${deals.steamRatingPercent} %</p>
                <p> Deal Rating : ${deals.dealRating} </p>
                <a class="link" href="https://www.cheapshark.com/redirect?dealID={id}">Follow this link to see more</a>
             </div> `
             
            ;

        }).join("");
        
        console.log(html);
        document.getElementById("search-result").insertAdjacentHTML("afterbegin", html);

    })
    .catch(error => {
        console.log(error);
    });
}

fetchData();


var searchFormEl = document.getElementById("user-form")

function handleSearchSubmit(event) {
    event.preventDefault();
            
    var userInputEl = document.getElementById("userInput").value;  
    
    if (!userInputEl) {
        console.error("search again");
        return;
    }
    
    var queryStr = "https://www.cheapshark.com/api/1.0/games?title=" + userInputEl + "&steamAppID=" + "&limit=60&exact=0"

    location.assign(queryStr);


}



    if (!searchInputEl) {
        console.error("need valued input!");
        return;
    }
