
//компонент для карты
define(['jquery', 'Vue', 'bootstrapBundle'], // библиотека jqury, фреймворк Vue и бутсрап

function ($, Vue, bootstrapBundle) {

    return Vue.component('test-cart-map', {
       props: ['text1'],//данные переданные на вход компоненту
        template: ' \
        <div class="testComponent" >\
       {{text1}}\
</div>\
        ',
        methods: {
            
        }
    });
});