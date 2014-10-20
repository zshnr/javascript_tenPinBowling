describe('Ten Pin Bowling', function(){

	beforeEach(function(){
		game = new Bowling;
	});

	it('Starts with ten pins', function(){
		expect(game.pins).toEqual(10);
	});

	it('Starts with ten frames', function(){
		expect(game.frames).toEqual(10);
	});

	it('Starts with a ball', function (){
		expect(game.ball).toEqual(1);
	});

	it('Ball can knock down pins', function(){
		game.throwBall();
		expect(typeof game.pins).toEqual('number');
	});

	


});