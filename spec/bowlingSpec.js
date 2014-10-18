describe('Ten Pin Bowling', function(){

	it('Starts with ten pins', function(){
		game = new Bowling;
		expect(game.pins).toEqual(10);
	});
});