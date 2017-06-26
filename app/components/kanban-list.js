import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col'],

  backgroundColor: Ember.computed('list', function() {
    let color = this.get('list.color');
    let escaped = Ember.Handlebars.Utils.escapeExpression(
      `background-color: ${color}`);
    return new Ember.String.htmlSafe(escaped);
  }),

  actions: {
    addCard() {
      let todo = window.prompt("Say something!", "Didn't say anything.");
      this.get('todos').addObject(todo);
    },

    shiftLeft(todo) {
      this.sendAction('shiftLeft', todo, this.get('index'));
    },

    shiftRight(todo) {
      this.sendAction('shiftRight', todo, this.get('index'));
    }
  }
});
