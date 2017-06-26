// export { default } from 'ember-local-storage/adapters/local';

import DS from 'ember-data';
import Inflector from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1',

  pathForType: function(type) {
    return Inflector.pluralize(Ember.String.underscore(type));
  }
});
