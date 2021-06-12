
const qoutes = [ 
    'Imaginary is more than knowledge - Albert Estien',
    'The Best Way To Get Started Is To Quit Talking And Begin Doing. – Walt Disney',
    'JavaScript is the world is most misunderstood programming language. - Js lover',
    'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You - Steve Jobs',
    'Everyone can code - Junoir Programmer',
];

const pickMessage = messageArray => 
{
    // let randomQoute = Math.floor(Math.random() * messageArray.length);
    return messageArray[Math.floor(Math.random() * messageArray.length)];
}

console.log(pickMessage(qoutes));