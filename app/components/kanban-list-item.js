import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['kb-card-item'],

  canShiftLeft: Ember.computed('index', function() {
    if (this.get('index') % 4 !== 0) {
      return true;
    }
    else {
      return false;
    }
  }),

  canShiftRight: Ember.computed('index', function() {
    if (4 % this.get('index') === 1) {
      return false;
    }
    else {
      return true;
    }
  }),

  actions: {
    doShiftLeft() {
      this.sendAction('shiftLeft', this.get('todo'));
    },

    doShiftRight() {
      this.sendAction('shiftRight', this.get('todo'));
    }
  }
});
