
//компонент для карты
define(['jquery', 'Vue', 'bootstrapBundle'], // библиотека jqury, фреймворк Vue

function ($, Vue, bootstrapBundle) {

    return Vue.component('test-cart-plot', {
       props: ['text3'],//данные переданные на вход компоненту
        template: ' \
        <div class="testComponent" >\
       {{text3}}\
</div>\
        ',
        methods: {
            
        }
    });
});