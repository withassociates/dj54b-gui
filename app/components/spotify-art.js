import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],

  fetchArt: function() {
    var id = this.get('trackID');

    if (!id) { return; };

    id = id.split(':')[2];
    this.set('src', '');

    ajax('https://api.spotify.com/v1/tracks/' + id)
    .then(function(data) {
      this.set('src', data.album.images[0].url);
    }.bind(this));
  }.observes('trackID').on('didInsertElement')
});
