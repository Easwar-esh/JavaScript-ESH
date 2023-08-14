const cardsArray = [
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    }
];
let flippedCards=[]
let matchCount=0;
shuffleCards();
const gameBoard=document.getElementById('gameBoard');
// console.log(cardsArray)
displayCards();
function shuffleCards(){
    for(let i=cardsArray.length-1;i>=0;i--){
        const randIndex=Math.floor(Math.random()*i);
        [cardsArray[i],cardsArray[randIndex]]=[cardsArray[randIndex],cardsArray[i]]
    }
}

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card=document.createElement('div');
        card.setAttribute('id',index)
        card.classList.add('cardback');
        card.classList.add('active')
        gameBoard.append(card)
        card.addEventListener('click',flipcard)
    })
}

function flipcard(){
    if(flippedCards.length<2 && this.classList.contains('active')){
        let cardId=this.getAttribute('id');
        // console.log(cardId)
        flippedCards.push(this);
        // console.log(flippedCards)
        this.classList.remove('cardback');
        this.innerHTML = cardsArray[cardId].icon;
        if(flippedCards.length==2){
            setTimeout(checkMatch,800);
        }
    }
}

function checkMatch(){
    const cardId1=flippedCards[0].getAttribute('id');
    const cardId2=flippedCards[1].getAttribute('id');
    if(cardsArray[cardId1].name === cardsArray[cardId2].name){
        flippedCards[0].style.border = 'none';
        flippedCards[0].style.backgroundColor='blanchedalmond';
        flippedCards[0].innerHTML='';
        flippedCards[0].classList.remove('active');
        flippedCards[1].style.border = 'none';
        flippedCards[1].style.backgroundColor='blanchedalmond';
        flippedCards[1].innerHTML='';
        flippedCards[1].classList.remove('active');
        matchCount++;
        checkGameOver();
    }
    else{
        flippedCards[0].innerHTML='';
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML='';
        flippedCards[1].classList.add('cardback');
    }
    flippedCards=[];
}

function checkGameOver(){
    if(matchCount == cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML='You Won';
        gameBoard.classList.remove('remove');
        gameBoard.classList.add('won');

    }
}