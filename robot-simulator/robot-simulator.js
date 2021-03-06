var Robot = function() {
    this.bearing = '';
    this.coordinates = [];
    
};



Robot.prototype.orient = function(orientation) {
    var directions = [ 'east', 'west', 'north', 'south' ];
    for (var i = 0 ; i < directions.length; i++){
        if(orientation === directions[i]){
            this.bearing = orientation;
            return this.bearing;
        }
        else { this.bearing = ''}
    }
    
    if (this.bearing != ''){
        return this.bearing;
    }
    else {
        throw new Error('Invalid Robot Bearing');
    }   
    
};

Robot.prototype.turnRight = function(){
    switch (this.bearing){
        case 'north':
            this.bearing = 'east';
            break;
        case 'east':
            this.bearing = 'south';
            break;
        case 'south':
            this.bearing = 'west';
            break;
        case 'west':
            this.bearing = 'north';
            break;
    }
}

Robot.prototype.turnLeft = function(){
    switch (this.bearing){
        case 'north':
            this.bearing = 'west';
            break;
        case 'west':
            this.bearing = 'south';
            break;
        case 'south':
            this.bearing = 'east';
            break;
        case 'east':
            this.bearing = 'north';
            break;
    }
}

Robot.prototype.at = function(x,y){
    if (typeof(x && y) === 'number'){
        this.coordinates = [x,y];
        return this.coordinates;
    }
    else{
        throw new Error('Values of coordinates must be numerical');
    }
}

Robot.prototype.advance = function(){
    var position = null;
    if (this.bearing === 'north' || this.bearing === 'south'){
        position = 1;
        
    }else if (this.bearing === 'east' || this.bearing === 'west') {
        position = 0;
        
    } 
    else {return 'Bearing is not recognised!'} 

    if (this.bearing === 'north' || this.bearing === 'east'){
        this.coordinates[position] ++;
        
    } 
    else if(this.bearing === 'south' || this.bearing === 'west'){
        this.coordinates[position] --;
        
    } 
    else {
        throw new Error('Movement is impossible, position is not set or is set to incorrect value!');
    }

}

Robot.prototype.instructions = function(instruction) {
    instructions = []
    for(var i = 0; i< instruction.length; i++)
    { 
        if (instruction[i] === 'A'){
            instructions.push('advance');
        }
        else if (instruction[i] === 'L') {
            instructions.push('turnLeft');
        }
        else if (instruction[i] === 'R'){
            instructions.push('turnRight');
        }
        else {
            throw new Error('Incorrect instruction')
        };
    }
    

    return instructions;
}

Robot.prototype.place = function(postionData) {
    this.bearing = postionData.direction;
    this.coordinates[0] = postionData.x;
    this.coordinates[1] = postionData.y;

}

Robot.prototype.evaluate = function(setOfInstructions){
    var interpretedCommands = this.instructions(setOfInstructions);   
    for (var j = 0; j < interpretedCommands.length; j++){
        if (interpretedCommands[j] === 'turnRight'){
             this.turnRight();
        }
        else if (interpretedCommands[j] === 'turnLeft'){
            this.turnLeft();
        }
        else if (interpretedCommands[j] === 'advance'){
            this.advance();
        }
    };
}


module.exports = Robot;