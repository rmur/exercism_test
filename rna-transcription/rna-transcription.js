var DnaTranscriber = function(){
}

DnaTranscriber.prototype.toRna = function(dna){
    var rnaValue = ''
    var rna = []
    for (var i = 0; i < dna.length; i++){
        if (dna[i] === 'G'){
            rnaValue = 'C';
            rna.push(rnaValue);
        }
        else if (dna[i] === 'C'){
            rnaValue = 'G';
            rna.push(rnaValue);
        }
        else if (dna[i] === 'T'){
            rnaValue = 'A';
            rna.push(rnaValue);
        }
        else if (dna[i] === 'A'){
            rnaValue = 'U';
            rna.push(rnaValue);
        }
        else { 
            throw new Error('Invalid input');
        }
    }
    return rna.join('');
    
}
module.exports = DnaTranscriber;