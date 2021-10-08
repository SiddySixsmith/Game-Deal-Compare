//Variables
var searchBtn = document.getElementById("searchButton");
var menu = document.getElementById("menu-ul");
var userInput = document.getElementById("userInput")
var saveInput = userInput.value;
var FormEl = document.getElementById("user-form");

var formdata = new FormData();
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};


FormEl.addEventListener("submit", function (event) {
    event.preventDefault();
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("saveInput", userInput.value);
        // Retrieve
        document.getElementById("userInput").innerHTML = localStorage.getItem("saveInput")
    }

    console.log(userInput)
    if (!userInput.value) {
        console.error("need valued input!");
        return;

    }

    let searchInput = document.getElementById("userInput").value
    // let queryString = "https://www.cheapshark.com/api/1.0/games?title=" + searchInput + "&steamAppID=" + "&limit=20&exact=0";

    listGame(searchInput);
})



//function to fetch
function listGame(userInput) {

    fetch(`https://www.cheapshark.com/api/1.0/games?title=${userInput}&limit=20&exact=0`, requestOptions)
        .then(async function (response) {
            // handle the response
            var result = await response.json()
            console.log(result);
    
            menu.innerHTML = ""
            //creates all required fields for info
            for (i = 0; i < result.length; i++) {
    
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
                buttonEl.classList.add("btn");
                menu.appendChild(buttonEl)
    
            }
        })
        .catch(function (error) {
            // handle the error
        });
    

};


function fetchData() {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
        .then(response => {
            // check the response for error
            if (!response.ok) {
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
                <p><a class="link" target="_blank" href="https://www.metacritic.com/${deals.metacriticLink}"> More Details for this game </a> </p>
                <p><a class="link" target="_blank" href="https://www.cheapshark.com/redirect?dealID={id}">Follow this link to see more</a> </p>
             </div> `

            ;

            }).join("");
            // insert the elements
            console.log(html);
            document.getElementById("search-result").insertAdjacentHTML("afterbegin", html);

        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();


var requestOptions = {
    method: "GET",
    redirect: "follow"
};


//localStorage.setItem()