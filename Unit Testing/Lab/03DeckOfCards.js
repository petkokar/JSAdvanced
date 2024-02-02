function printDeckOfCards(cards) {
    function createCard(cardGiven) {

        const face = cardGiven.slice(0, -1);
        const suit = cardGiven.slice(-1);

        if (!isValidFace(face)) {
            console.log(`Invalid card: ${cardGiven}`);
            return null;
        }
    
        if (!isValidSuit(suit)) {
            console.log(`Invalid card: ${cardGiven}`);
            return null;
        }
        function isValidFace(face) {
            debugger
            const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            return validFaces.includes(face);
        }
    
        function isValidSuit(suit) {
            debugger
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
    let hasInvalidCard = false;
    let validCards = [];
    cards.forEach(cardGiven => {        
        const card = createCard(cardGiven);
        if(card !== null) {
            validCards.push(card.toString());
        } else {
            hasInvalidCard = true;
        }
    });

    if (!hasInvalidCard) {
        console.log(validCards.join(' '));
    }
}

const deck = ['5S', '3D', 'QD', '1C'];
printDeckOfCards(deck);