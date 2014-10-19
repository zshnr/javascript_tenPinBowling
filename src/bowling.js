function Bowling(){
	this.pins = 10;
	this.frames = 10;
	this.ball = 1;
};

function Ball(){};

Bowling.prototype.throwBall = function() {
	10 - (Math.floor((Math.random() * 10) + 1));
};