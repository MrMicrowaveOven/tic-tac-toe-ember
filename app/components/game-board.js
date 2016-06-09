import Ember from 'ember';

export default Ember.Component.extend({
  squares: [[0,0,0],[0,0,0],[0,0,0]],
  winning_squares: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
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
      // This weird thing can't be sliced, so I'm doing this the old fashioned
        // way until I can find a better way.
      var new_board = [];
      new_board[0] = temp_board[0];
      new_board[1] = temp_board[1];
      new_board[2] = temp_board[2];
      new_board[row][column] = 1;
      this.set('squares', new_board);
    },
    is_winner(player){
      var winner = false;
      // winning_squares.forEach(winning_square){
      // }
    }
  }
});
