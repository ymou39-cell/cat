let fact = document.getElementById("fact");
let btn = document.getElementById("generate-btn");

// Ensure you have an apiKey defined somewhere in your script or HTML
// Example: const apiKey = "YOUR_API_KEY"; 

let options = {
    method: "GET",
    // "Headers" should be lowercase "headers" as per the Fetch API standard
    headers: { "x-api-key": apiKey },
};

// The URL needs a '?' before the query parameters
let url = "api.api-ninjas.com"; 

let generateQuote = () => { // Changed to a standard function structure for clarity
    fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // The API returns an array, so access the first element
            // The property name is 'fact', not 'cat' (based on common cat APIs and your variable names)
            console.log(data[0].fact); 
            // Update the 'fact' element, not a non-existent 'cat' element
            fact.innerText = data[0].fact; 
        })
        .catch(error => { // Added error handling
            console.error("Error fetching cat fact:", error);
            fact.innerText = "Failed to load a cat fact. Check console for details.";
        });
};

btn.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);
