import Ember from 'ember';

export default Ember.Controller.extend({
  isPlaying: Ember.computed.equal('state', 'playing')
});
