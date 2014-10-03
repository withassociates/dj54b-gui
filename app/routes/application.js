import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../config/environment';

var apiURL = config.apiURL;

export default Ember.Route.extend({
  setupController: function() {
    this.run('info');
  },

  run: function(command) {
    var controller = this.controllerFor('application');

    return ajax(apiURL + '/' + command).then(function(data) {
      controller.setProperties(data);
    });
  },

  actions: {
    play: function() {
      this.run('play');
    },

    pause: function() {
      this.run('pause');
    },

    next: function() {
      this.run('next');
    },

    up: function() {
      this.run('up');
    },

    down: function() {
      this.run('down');
    }
  }
});
