// Code your solutions in this file
const gift = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]}and added a bow!`);
        ;
    }
    return gifts;
    }
    wrapGifts(gifts);

    function writeCards(arrayOfNames,event) {
        const emptyArray= []
        for (let n=0; n<arrayOfNames.length; n++) {
            emptyArray.push(`Thank you, ${arrayOfNames[n]}, for the wonderful ${event} gift!`) ;
        }
        return emptyArray
    }
    
function countDown(n) {
    while (n>=0) {
    console.log(n)
    n--
    }

}
