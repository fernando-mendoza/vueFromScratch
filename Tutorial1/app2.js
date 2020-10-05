Vue.component('header-component', {
    props: ['titleText'],
    template: `
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
    <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    {{ titleText }}
    </a>
    </nav>
    `
})

var app7 = new Vue({
    el: '#app7',
    data: {
        title: 'mi titulo',
    }
})