function cards(face, suit){

    if (!isValidFace(face)) {
        throw new Error('Invalid face for a card;')
    }

    if (!isValidSuit(suit)) {
        throw new Error('Invalid suite for a card.')

    }
    function isValidFace(face) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        return validFaces.includes(face);
    }

    function isValidSuit(suit) {
        const validSuits = ['S', 'H', 'D', 'C'];
        return validSuits.includes(suit);
    }

    function toString(){
        const suitSymbol = {
            'S': '\u2660',
            'H': '\u2665', 
            'D': '\u2666', 
            'C': '\u2663'
        }

        return `${face}${suitSymbol[suit]}`;
    }

    return {
        face,
        suit,
        toString
    };
}

const myCard = cards('t', '3');
console.log(myCard.toString());