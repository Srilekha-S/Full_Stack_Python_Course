const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
button.addEventListener('click', displaystats)
function displaystats() {
    const input = document.getElementById('input')
    const city = input.options[input.selectedIndex].value
    let population = 0, literarcyRate = 0, language = ''
    switch (city) {
        case "Chennai":
            population = 4646732
            literarcyRate = 90.20   
            language = 'Tamil'
            break
        case "Bengaluru":
            population = 8443675
            literarcyRate = 88.71  
            language = 'Kannada'
            break
        case "Delhi":
            population = 16787941
            literarcyRate = 86.34  
            language = 'Hindi'
            break
        case "Mumbai":
            population = 12442373
            literarcyRate = 86.20 
            language = 'Hindi'
            break
    }
    let text = `The Indian city of ${city} has a population of ${population} with a literacy rate of ${literarcyRate}% and the primary language spoken is ${language}.`
    console.log(text)

    document.getElementById('result').innerHTML = text
}