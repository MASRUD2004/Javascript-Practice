console.log("This is the first file.");


const allLi= document.getElementsByTagName('li');
console.log(allLi);


const allTitles=document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection=document.getElementById('second-section')
secondSection.style.color='white'
secondSection.style.backgroundColor='tomato'


// 4th method-1

const makeGreenButton=document.getElementById('make-green')

makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green'
})

// 4th method-2 