class Dog {
    constructor(breed, color, size, tail){
       this.breed = breed
       this.color = color
       this.size = size
       this.tail = tail
    }
     bark(){
        return ('bark')

    }
     walk(){
        return 'walk'

    }
     run(){
        return 'run'

    }
     wiggleTail(){
        return 'wiggleTail'

    }
     getAngry(){
        return 'getAngry'

    }
}

let rottweiler = new Dog('rottweiler', 'black', 'big','long') 
let bullDog = new Dog('bulldog', 'white', 'big','short') 
let germanShepherd = new Dog('germanshepherd', 'black', 'big','long') 

// console.log(rottweiler, bullDog, germanShepherd);

let barkBotton = document.querySelector('.bark')
let runBotton = document.querySelector('.run')
let getAngryBotton = document.querySelector('.getAngry')
let wiggleTailBotton = document.querySelector('.wiggleTail')
let action = document.querySelector('.action')
let dogImage = document.querySelector('.dogimage')


barkBotton.addEventListener('click', ()=> {
    action.innerText = bullDog.bark()
    // dogImage.src = ''
})
runBotton.addEventListener('click', ()=> {
    action.innerText = rottweiler.run()
    // dogImage.src = ''
})
getAngryBotton.addEventListener('click', ()=> {
    action.innerText = rottweiler.getAngry()
    // dogImage.src = ''
})
wiggleTailBotton.addEventListener('click', ()=> {
    action.innerText = germanShepherd.wiggleTail()
    // dogImage.src = ''
})

