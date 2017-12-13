// var possibleNames={};
var used = {};
var allNames ={};
function generateAllNames(){


}
var Robot = function(){

	this.name=this.reset();
	return this;
};

Robot.prototype.getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

Robot.prototype.getRandomLetter = function() {
	return String.fromCharCode(this.getRandomInt(65, 90));
};

Robot.prototype.generateName = function() {
	if (Object.keys(used).length === 10000) throw new Error("Maximum number of available names reached!");
	var temp=this.getRandomLetter()+this.getRandomLetter();
	temp+=this.getRandomInt(0,9);
	temp+=this.getRandomInt(0,9);
	temp+=this.getRandomInt(0,9);
	return temp;
};

Robot.prototype.reset = function() {
	var temp="";
	do { temp=this.generateName(); }
	while (used[temp]);

	this.name=temp;
	used[temp]=true;
	return this.name;
};

module.exports = Robot;