
Vue.component('menu-list',{

    template:`<ul><item v-for="item in items"><a :href="item.link"><span>{{ item.description }}</span></a></item></ul>`,

    data() {

        return {

            items:[

                { description: "Home", link:'index.html',customClass:'active'},

            ]

        }

    }

});

Vue.component('item',{

   template:'<li class=""><slot></slot></li>'

});


new Vue({

    el:'#root'

})