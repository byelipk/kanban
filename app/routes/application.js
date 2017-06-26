import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const promise = this.get('store').findAll('todoList', {
      include: 'todos'
    });

    return promise.then(data => {
       if (data.get('length') === 0) {
         return this.preloadStore();
       }
       else {
         return data;
       }
     });
  },

  preloadStore() {
    this.get('store').push({
      data: [
        {
          id: 1,
          type: 'todo-list',
          attributes: {
            title: 'Winnie',
            color: '#e8741e'
          },
          relationships: {
            todos: {
              data: [
                {id: 1, type: 'todo'},
                {id: 2, type: 'todo'},
                {id: 3, type: 'todo'},
              ]
            }
          }
        },
        {
          id: 2,
          type: 'todo-list',
          attributes: {
            title: 'Bob',
            color: '#35a59c'
          },
          relationships: {}
        },
        {
          id: 3,
          type: 'todo-list',
          attributes: {
            title: 'George',
            color: '#8e6395'
          },
          relationships: {}
        },
        {
          id: 4,
          type: 'todo-list',
          attributes: {
            title: 'Thomas',
            color: '#35a59c'
          },
          relationships: {}
        },
      ],
      included: [
        {
          id: 1,
          type: 'todo',
          attributes: {
            task: 'Eat',
          },
          relationships: {
            todoList: {id: 1, type: 'todo-list'}
          }
        },
        {
          id: 2,
          type: 'todo',
          attributes: {
            task: 'Drink',
          },
          relationships: {
            todoList: {id: 1, type: 'todo-list'}
          }
        },
        {
          id: 3,
          type: 'todo',
          attributes: {
            task: 'Sleep',
          },
          relationships: {
            todoList: {id: 1, type: 'todo-list'}
          }
        }
      ]
    });

    this.get('store').peekAll('todo-list').forEach(list => list.save());

    this.get('store').peekAll('todo').forEach(todo => todo.save());

    return this.get('store').peekAll('todo-list');
  }
});
