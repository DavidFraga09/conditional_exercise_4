// IF ELSE

let isRaining = true

if (isRaining) {
    console.log('You need a rain coat')
} else{
    console.log('You dont need a rain coat')
}

// if else if else
let weather = 'cloudy'

if (weather === 'rainnig'){
    console.log('You need a rain coat')
} else if (weather === 'cloudy'){
    console.log('Is might be cold, you need a coat')
} else if (weather === 'sunny'){
    console.log('Go out freely')
} else {
    console.log('You need a rain coat')
}

// Switch
let dayUserInput = prompt('what day is today?')
let day = dayUserInput.toLowerCase()
switch(day){
    case 'monday':
    console.log('Today is Monday')
    break;
    case 'tuesday':
    console.log('Today is Tuesday')
    break;
    case 'wednesday':
        console.log('Today is Wednesday')
        break;
    case 'thursday':
        console.log('Today is Thrusday')
        break;    
    case 'friday':
        console.log('Today is Friday')
        break;
    case 'saturday':
        console.log('Today is Saturday')
        break;
    case 'Sunday':
        console.log('Today is Sunday')
        break;
        default:
        console.log('Day in incorrect') 
}

// Ejemplo para utilizar condiciones en los cases
let = num = prompt('Enter number')
switch(true){
    case num > 0:
        console.log('Number is positive')
        break;
    case num == 0:
        console.log('Number is zer')
        break;
    case num < 0:
        console.log('Number is negative')
        break;
    default:
        console.log('Entered value was not a number')
}