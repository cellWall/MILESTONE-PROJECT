const arrayOfQuotes = [
    {
        message: 'A person who never made a mistake never tried something new',
        author: 'Albert Einstein',
    },
    {
        message: 'Success is not a good teacher, failure makes you humble',
        author: 'Shah Rukh Khan',
    },
    {
        message: 'Life is what happens when you\'re busy making other plans',
        author: 'John Lennon',
    },
    {
        message: 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
        author: 'Audre Lorde',  
    },
    {
        message: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
        author: 'Eleanor Roosevelt',
    },
    {
        message: 'Those who dare to fail miserably can achieve greatly.',
        author: 'John F. Kennedy',
    },
    {
        message: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.', 
        author: 'Joshua J. Marine',
    },
    {
        message: 'Remember that the happiest people are not those getting more, but those giving more.',
        author: 'H. Jackson Brown, Jr.',
    },
    {
        message: 'If you want to be happy, be.',
        author: 'Leo Tolstoy',
    },
    {
        message: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
        author: 'Dr. Suess',
    },

]


function getRandomNumber() {
   const randomNumber = Math.random() * arrayOfQuotes.length;
   return Math.floor(randomNumber) 
}

function setQuote(message) {
    document.getElementById("quote").innerHTML = message
}

function setAuthor(author) {
    document.getElementById("author").innerHTML = author
}


function getRandomQuote() {
    const randomNumber = getRandomNumber()
    const quote = arrayOfQuotes[randomNumber]
    //set the quote
    setQuote(quote.message)
    //set the author
    setAuthor(quote.author)
}

