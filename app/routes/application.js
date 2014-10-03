import Ember from 'ember';
import config from '../config/environment';

var apiURL = config.apiURL;

export default Ember.Route.extend({
  actions: {
    play: function() {
      $.getJSON(apiURL + '/play');
    },

    pause: function() {
      $.getJSON(apiURL + '/pause');
    },

    next: function() {
      $.getJSON(apiURL + '/next');
    },

    up: function() {
      $.getJSON(apiURL + '/up');
    },

    down: function() {
      $.getJSON(apiURL + '/down');
    },

    info: function() {
      $.getJSON(apiURL + '/info');
    },
  }
});
