var quotes=[ 
    '\'Nothing is impossible \!\' -Author',
    '\'It is never too late to be what you might have been.\' \n–George Eliot',
    '\“You can have it all. Just not all at once.\” \n—Oprah Winfrey',
    '\'It is never too late to be what you might have been.\' \n–George Eliot',
    '\'Life is tough my darling, but so are you.\' \n–Stephanie Bennett Henry',
    '\'We are all broken, that\'s how the light gets in.\' \n–Ernest Hemingway',
    // ' \' A good writer possesses not only his own spirit but also the spirit of his friends.\' –Friedrich Nietzsche.'
   

    
    
   
]

function newQuotes()
{
    let randomNumber= Math.floor(Math.random()*6);
    document.querySelector('#quotes').innerHTML = quotes[randomNumber];
}