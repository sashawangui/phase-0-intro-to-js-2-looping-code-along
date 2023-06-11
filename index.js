// Code your solutions in this file
function writeCards(names) {
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        newArray.push(message)
    }

    return newArray
}

function countDown(i) {
    while (i >= 0) {
        console.log(i)
        i--;
    }
}