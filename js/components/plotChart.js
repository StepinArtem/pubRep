
//компонент для карты
define(['jquery', 'Vue', 'bootstrapBundle'], // библиотека jqury, фреймворк Vue

function ($, Vue, bootstrapBundle) {

    return Vue.component('test-cart-plot', {

        props: ['datadev'],//данные переданные на вход компоненту
        // шаблон инициализируемый компонентом при создании
        template: ' \
        <div class="testComponent" >\
        <canvas id="chart-area"></canvas>\
        </div>\
        ', 
            
        created: function () {
           
            var that = this;
            //конфигурация графика
            var config = {
                type: 'doughnut',
                data: {
                datasets: [{
                data: [],//данные для графика
                backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
                window.chartColors.blue,
                ],
                label: 'Dataset 1'
                }],
                labels: [ ] //названия для графика
                    },
                options: {
                    responsive: true,
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Заголовок графика'
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            };
            //присваиваеконфигурацию графика
           this.$data.config = config;

          },
          // событие вызывается просле инициализации фреймворка когда страница уже полностью загружена
          mounted: function () {

            var that = this;

            console.log(that.datadev);
            //заполняем конфигурацию графика data[] и labels[]
            that.datadev.forEach(function(item, index, array) {
					
                that.$data.config.data.datasets[0].data.push(item.dev);

                that.$data.config.data.labels.push(item.name)

              });
            // инициализируем график  
            var ctx = document.getElementById('chart-area').getContext('2d');
            
            window.myDoughnut = new Chart(ctx, this.$data.config);
          
          },
        methods: {
            
        }
    });
});