

define(['jquery', 'Vue', 'bootstrapBundle'], // библиотека jqury, фреймворк Vue

function ($, Vue, bootstrapBundle) {

    return Vue.component('test-cart-map', {
       props: ['text1'],
        template: ' \
        <div class="testComponent" >\
       {{text1}}\
</div>\
        ',
        methods: {
            
        }
    });
});