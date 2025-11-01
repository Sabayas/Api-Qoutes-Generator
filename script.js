const quoteText = document.querySelector('.qoute');
authorName = document.querySelector(".author .name")
const button = document.querySelector('.btn')

// random quote function

function randomQuote(){
    fetch("https://dummyjson.com/quotes").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.qoutes[0];
        authorName.innerText = result.author
    });
  
}


button.addEventListener('click', randomQuote);

randomQuote();