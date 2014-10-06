import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  classNames: ['track-image'],

  fetchArt: function() {
    this.set('src', '');

    var id = this.get('trackID');

    if (Ember.isEmpty(id)) { return; }

    id = id.split(':')[2];

    var url = 'https://api.spotify.com/v1/tracks/' + id;

    ajax(url).then(function(data) {
      this.set('src', data.album.images[0].url);
    }.bind(this));
  }.observes('trackID').on('didInsertElement')
});
