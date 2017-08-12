
Vue.component('menu-list',{

    template:'<ul><item v-for="item in items">{{ item.description }}</item></ul>',

    data() {

        return {

            items:[

                { description: 'Home', complete:true},

            ]

        }

    }

});


Vue.component('item',{

   template:'<li class="active"><a href="index-2.html"><span><slot></slot></span></a></li>'

});


new Vue({

    el:'#root'

})