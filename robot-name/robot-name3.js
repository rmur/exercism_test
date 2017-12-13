var used = {};
var allNames ={};

var Robot = function () {
    
    
    this.name = this.reset();
    return this;
}

Robot.prototype.getRandomNumbers = function(){
    var numbers = '0123456789';
    var randomNumbers;
    for(var i = 3; i > 0 ; i--){
        randomNumbers += numbers[Math.floor(Math.random() * numbers.length)];    
    }
    return randomNumbers;
}

Robot.prototype.getRandomLetters = function(){
    return String.fromCharCode(this.getRandomInt(65, 90));
}

Robot.prototype.generateName = function(){
    if (Object.keys(used).length === 10000) throw new Error("Limit of all possible names is reached!!");
    var name = this.getRandomLetters() + this.getRandomLetters() + this.getRandomNumbers();
    return name;
}

Robot.prototype.reset = function(){
    var name = '';
    do {name=this.generateName();}
    while (used[name]);

    this.name = name;
    used[name] = true;
    return this.name;

}

module.exports = Robot;
