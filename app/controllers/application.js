import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../config/environment';

export default Ember.Controller.extend({
  isPlaying: Ember.computed.equal('state', 'playing'),
  isLoading: false,

  startPolling: function() {
    this.refresh();
  }.on('init'),

  refresh: function() {
    this.run('info').then(function() {
      Ember.run.later(this, 'refresh', 1000);
    }.bind(this));
  },

  run: function(command, showSpinner) {
    if (showSpinner) {
      this.set('isLoading', true);
    }

    return ajax(config.apiURL + '/' + command).then(function(data) {
      this.setProperties(data);
      this.set('isLoading', false);
    }.bind(this));
  },

  actions: {
    play: function() {
      this.run('play', true);
    },

    pause: function() {
      this.run('pause', true);
    },

    next: function() {
      this.run('next', true);
    },

    up: function() {
      this.run('up', true);
    },

    down: function() {
      this.run('down', true);
    }
  }
});
