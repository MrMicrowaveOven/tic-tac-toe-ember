import Ember from 'ember';

export default Ember.Component.extend({
  value: 0,
  actions: {
    fill(player){
      this.set('value', player);
    }
  }
});
