import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col'],

  store: Ember.inject.service(),

  backgroundColor: Ember.computed('list', function() {
    let color = this.get('list.color');
    let escaped = Ember.Handlebars.Utils.escapeExpression(
      `background-color: ${color}`);
    return new Ember.String.htmlSafe(escaped);
  }),

  actions: {
    addCard() {
      let task = window.prompt("What is thy bidding, my master?");

      if (task) {
        const list = this.get('list');
        const todo = this.get('store').createRecord('todo', {
          task: task,
          todoList: list
        });

        todo.save();
      }
    },

    shiftLeft(todo) {
      this.sendAction('shiftLeft', todo, this.get('index'));
    },

    shiftRight(todo) {
      this.sendAction('shiftRight', todo, this.get('index'));
    }
  }
});
