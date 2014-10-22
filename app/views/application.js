import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['application'],
  classNameBindings: ['controller.isLoading']
});
