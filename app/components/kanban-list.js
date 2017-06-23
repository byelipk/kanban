import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['kb-card'],

  listClassName: Ember.computed('title', function() {
    return this.get('title').toLowerCase();
  }),

  collection: Ember.computed(function() {
    return ["Eat", "Sleep", "Think", "Play"];
  }),

  actions: {
    addCard() {
      let todo = window.prompt("Say something!", "Didn't say anything.");

      this.get('collection').addObject(todo);
    }
  }
});
