
define(['jquery', 'Vue', 'bootstrapBundle'], // библиотека jqury, фреймворк Vue

function ($, Vue, bootstrapBundle) {

    return Vue.component('test-table', {
       // props: [''],
        template: ' \
        <div class="testComponent" >\
       Тест3\
</div>\
        ',
        methods: {
            
        }
    });
});