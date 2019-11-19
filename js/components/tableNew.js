
//компонент для карты
define(['jquery', 'Vue', 'bootstrapBundle'], // библиотека jqury, фреймворк Vue

function ($, Vue, bootstrapBundle) {

    return Vue.component('test-table', {
        props: ['text4'],//данные переданные на вход компоненту
        template: ' \
        <div class="testComponent" >\
       {{text4}}\
</div>\
        ',
        methods: {
            
        }
    });
});