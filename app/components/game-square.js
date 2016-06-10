import Ember from 'ember';
// I'm thinking each square will just contain a value, which changes when
  // a player makes a move there.
// This will be more elegent than just using numbers.
export default Ember.Component.extend({
  value: 0,
  actions: {
    fill(player){
      this.set('value', player);
    }
  }
});
