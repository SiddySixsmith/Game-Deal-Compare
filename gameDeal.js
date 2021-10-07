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
    buttonEl.classList.add("btn");
    menu.appendChild(buttonEl)

    }
    }

};


var requestOptions = {
    method: "GET",
    redirect: "follow"
};

searchBtn.addEventListener("click", function(event){
        event.preventDefault();
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("saveInput", userInput.value);
            // Retrieve
            document.getElementById("userInput").innerHTML = localStorage.getItem("saveInput")
          } 
           
        listGame();

        console.log(userInput.value)
})
