var app = new Vue({
    el: '#app',
    data: {
    message: 'Hello Vue!'
    },
    methods: {
      mostrarMensaje: function(){
        return 'Hello Vue! - MM'
      }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: 'Construir algo increíble' }
      ]
    }
  })

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hola Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hola Vue!'
    }
  })

  Vue.component('todo-item', {  
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
  })

  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetales' },
        { id: 1, text: 'Queso' },
        { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
      ]
    }
  })