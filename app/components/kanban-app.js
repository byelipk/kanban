import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['kb-container'],

  actions: {
    shiftLeft(todo, index) {
      let dst = this.get('todoLists')[index - 1];

      if (dst) {
        todo.set('todoList', dst);
        todo.save();
      }
    },

    shiftRight(todo, index) {
      let dst = this.get('todoLists')[index + 1];

      if (dst) {
        todo.set('todoList', dst);
        todo.save();
      }
    }
  }
});
