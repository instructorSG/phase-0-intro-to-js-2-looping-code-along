// Code your solutions in this file
let gifts = ['doll', 'computer game', 'bow', 'necklace']
let messages =[]
const writeCards = (gifts) => {
 for (const gift of gifts){
     messages.push(`Thank you, ${gift}, for the wonderful surprise gift!`)

 }
 return messages
}

const countDown = (n) => {
    while (n>=0){
        console.log (n)
        n-=1
    }
}