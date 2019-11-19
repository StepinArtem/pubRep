

define(['jquery', 'Vue', 'bootstrapBundle'], // библиотека jqury, фреймворк Vue

function ($, Vue, bootstrapBundle) {

    return Vue.component('test-component', {
       // props: [''],
        template: ' \
        <div class="testComponent" >\
       Тест\
</div>\
        ',
        methods: {
            
        }
    });
});