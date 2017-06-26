import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.attr('string'),
  todoList: DS.belongsTo('todo-list', {
    async: true
  })
});
