import Ember from 'ember';
// The game-board component will contain the squares, each of which is shown as a button.
export default Ember.Component.extend({
  // Board info
  // squares will eventually be filled with game-squares, but until I learn how to properly
    // nest components I'll just use numbers.
    // 0 is an empty quare, 1 is an X move, 2 is a O move.
  squares: [[0,0,0],[0,0,0],[0,0,0]],
  // Squares needed to win.  A quick 'match' or similar function should make checking
    // victory fairly easy.
  winning_squares: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
  // Will turn false if a winner is found.
  game_continues: true,
  actions: {
    make_move(row, column, player){
      // This took a while to figure out why I couldn't just edit one bit
        // of the array I get from this.get.
      var temp_board = this.get('squares');
      // debugger;
      // My current theory:
      // Using the this.get method doesn't return a basic array.
      // It returns an array-like object with a bunch of meta data.
      // This weird thing can't even be sliced, so I'm doing this the old fashioned
        // way until I can find a better method.
      var new_board = [];
      new_board[0] = temp_board[0];
      new_board[1] = temp_board[1];
      new_board[2] = temp_board[2];
      new_board[row][column] = player;
      this.set('squares', new_board);
    },
    // This will check to see if the given player is a winner.
    // Since a player can only win after making a move, there's no need to
      // check both players each time.
    is_winner(player){
      var winner = false;
      // winning_squares.forEach(winning_square){
      // }
    }
  }
});
