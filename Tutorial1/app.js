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