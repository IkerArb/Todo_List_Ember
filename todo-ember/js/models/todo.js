Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
  //owner: DS.belongsTo('user'),
  //tags: DS.hasMany('tags')
});

/* Ember data es agnóstico a la base de datos*/
/* Adapters */
