let fact = document.getElementById("fact");
let btn = document.getElementById("generate-btn");

let options = {
method: "GET",
Headers: {"x-api-key":apiKey},
};


let url= "https://api.api-ninjas.com/v1/catslimit=1";

let generateQuote = () =>(
    fetch( url,options).then((Response) => Response.json()).then(data => {
        console.log(data[0].cat);
        (cat.innerText = data[0].cat);
    })
);

btn.addEventListener("click", generateQuote);
window.addEventListener("load",generateQuote)