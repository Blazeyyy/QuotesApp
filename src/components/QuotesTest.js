import React, {useState,useEffect} from 'react';

function QuotesTest(){
    const [quote,setQuote] =
    useState('');
    const [author,setAuthor] = 
    useState('');

    const getQuotes = () => {
        const allQuotes = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(allQuotes).then((res) => res.json()).then((data) =>{
        console.log(data)
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random()*dataQuotes.length);
        let randomQuote = data.quotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
    });
    };
    useEffect(()=>{
    getQuotes()
    },[])
    
    return(
        <div>
        <h1>{quote}</h1>
         <p>{author}</p>
         <h2>HI</h2>
         <button onClick={()=>{getQuotes()}} id="new-quote">Get Quotes</button>
        </div>
    );
}

export default QuotesTest;