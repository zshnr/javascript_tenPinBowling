describe('Elements of the Game:', function(){

	describe('Player', function(){

		it('should have a name', function(){
			player = new Player;
			expect(player.name).toEqual('name');
		});

	});

});