export default function() {

  this.get('/todo-lists', () => {
    return {
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
            "todo-list": {id: 1, type: 'todo-list'}
          }
        },
        {
          id: 2,
          type: 'todo',
          attributes: {
            task: 'Drink',
          },
          relationships: {
            "todo-list": {id: 1, type: 'todo-list'}
          }
        },
        {
          id: 3,
          type: 'todo',
          attributes: {
            task: 'Sleep',
          },
          relationships: {
            "todo-list": {id: 1, type: 'todo-list'}
          }
        }
      ]
    }
  });
}
