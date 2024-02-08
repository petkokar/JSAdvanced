function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human';

    function toSpeciesString() {
        return `I am a ${this.species}. ${this.toString()}`;
    }
    classToExtend.prototype.toSpeciesString = toSpeciesString;
}
