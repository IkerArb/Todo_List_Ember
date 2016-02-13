Todos.Router.map(function(){
  this.resource('todos',{path: '/'}); //Maneja un recurso que puede tener hijos (nested)
  this.route('my_route',{path: '/my_route'}); //Maneja la redirección simple (get normalito)
})
