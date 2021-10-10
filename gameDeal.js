//Variables
var searchBtn = document.getElementById("searchButton");
var menu = document.getElementById("menu-ul");
var userInput = document.getElementById("userInput")
var saveInput = userInput.value;
var FormEl = document.getElementById("user-form");
var searchRel = document.getElementById("search-result")
var dealShowEl = document.getElementById("deals");
var RecentSearch = document.getElementById("recent-search")
var searchHistory = [];
var savedHistoryArray = localStorage.getItem("key") || '[]';
var arrayHistory = JSON.parse(savedHistoryArray);
var clearBtn = document.getElementById("clearButton")

var formdata = new FormData();
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};


//function to fetch
function listGame(){

    fetch(`https://www.cheapshark.com/api/1.0/games?title=${userInput.value}&limit=20&exact=0`, requestOptions)
    .then(test)
    .catch(function(error) {
        // handle the error
    });
    async function test(response) {
        // handle the response
       var result = await response.json()
        console.log(result);

     menu.innerHTML = ""
     dealShowEl.innerHTML = "";
        //creates all required fields for info
    for (i = 0; i <result.length; i++) {
       
        //creates image El
    var img = document.createElement("img")
    img.src = result[i].thumb;
    menu.appendChild(img);
        
        // Creates li element for title
    var li = document.createElement("li");
    li.textContent = result[i].external;
    li.setAttribute("id", "title")
    menu.appendChild(li);

        // Creates li element for cheapest price
    var li = document.createElement("li");
    li.textContent = "Cheapest $" + result[i].cheapest;
    li.setAttribute("id", "cheap")
    menu.appendChild(li);

        //Creates button element to bring up deals
    var buttonEl = document.createElement("button");
    buttonEl.textContent = "More info and deals";
    buttonEl.setAttribute("id", "deals");
    buttonEl.setAttribute("type", "submit");
    buttonEl.setAttribute("data-title", result[i].external);
    buttonEl.classList.add("btn");
    menu.appendChild(buttonEl);
    buttonEl.addEventListener("click", function(event){
        event.preventDefault();
        var titleTest = event.target.getAttribute("data-title")
        menu.innerHTML = "";
        fetchData(titleTest)
    })

    }
    }
    
};

function fetchData(titleTest) {
    fetch(`https://www.cheapshark.com/api/1.0/deals?title=${titleTest}&pageSize=5`)
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
                <p><a class="link" target="_blank" href="https://www.metacritic.com/${deals.metacriticLink}"> Reviews, Trailers and more Details </a> </p>
                <p><a class="link" target="_blank" href="https://www.cheapshark.com/redirect?dealID={id}">Follow this link to see more games</a> </p>
             </div> `
             
            ;

        }).join("");
        
        console.log(html);
        dealShowEl.insertAdjacentHTML("afterbegin", html);
        
    })
    .catch(error => {
        console.log(error);
    });
}


function addHistory() {
    var value = userInput.value
    
    var newSearchLi = document.createElement("li");
    var newSearchLink = document.createElement("a");
    newSearchLi.classList.add("history");
    newSearchLink.classList.add("history");

    newSearchLink.innerHTML = value;
        searchHistory.push(value)
        var searchHistoryString = JSON.stringify(searchHistory)
        localStorage.setItem("key", searchHistoryString);
        RecentSearch.appendChild(newSearchLi);
        newSearchLi.appendChild(newSearchLink);
        location.reload;

        newSearchLi.addEventListener("click", function(event){
            userInput.value = event.target.textContent;
            listGame()
        })
        
};
//clear local storage
clearBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // Clear localStorage
    localStorage.clear();
    // Clear savedSearchHistory array
    searchHistory = [];
    // Remove list items
    RecentSearch.innerHTML = '';
    //remove results
    menu.innerHTML = '';

    dealShowEl.innerHTML = '';
});

//populate recent search

for (i = 0; i < arrayHistory.length; i++){
    
    var newSearchLi = document.createElement("li");
    var newSearchLink = document.createElement("a");
    newSearchLi.innerHTML = arrayHistory[i];
    newSearchLi.classList.add("history");
    newSearchLink.classList.add("history");
    RecentSearch.appendChild(newSearchLi);
    newSearchLi.appendChild(newSearchLink);
    
    newSearchLi.addEventListener("click", function(event){
        userInput.value = event.target.textContent;
        listGame()
    })
}

//activate search button
searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    addHistory();
    listGame();
 })
          
    console.log(userInput.value)