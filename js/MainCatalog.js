
define(['jquery', 'bootstrapBundle', 'Vue','testComponent','mapChart','plotChart','tableNew','axios'], //перечень библиотек необходимых для работы модуля 

    function ($, bootstrapBundle,Vue,testComponent,mapChart,plotChart,tableNew,axios) { // колличество перемнных на вход должно соотвествовать в define[]

		
	return  new Vue({
		el: '#app',// блок куда инициализируется фремворк
			data: {	//данные испоьзуемые фреймворком
				text1:"Карта",
				text2:"Таблица",
				text3:"График",
				text4:"Талица",
				config:null,
				datadev:null,
				total:0
			},
			/*components:  {
				'testComponent': testComponent // тестовый компонент
			},*/
			// инициализация фреймворка
			created: function () { 
				
				var that = this;//ссылка на самого себя
				
				var settings = {
					"async": false,
					"crossDomain": true,
					"url": "http://api.geonames.org/searchJSON?username=ksuhiyp&country=ru&maxRows=10&style=SHORT",
					"method": "POST"
				}

				$.ajax(settings).done(function (response) {
					
					console.log(response);
							
					var reg = response.geonames;

					var datadev = [];

					reg.forEach(function(item, index, array) {
					
						datadev.push({"name":item.name,"dev":Math.round(Math.random() * 100)});

				  	});

					that.$data.datadev= datadev;

				});
				
			},
			//вычислимые свойства
			computed: {
				//подсчёт итого
				totalDev:{ //геттер
					get: function () {

						var that = this;

						try{

						that.$data.datadev.forEach(function(item, index, array) {
					
							that.$data.total+=item.dev;
		
						  });
						} catch(e){}

						return that.total;
					  },//сеттер
					  set: function () { }
				}
			  },
			  //метод вызывается после инициализации фремворка
			  mounted: function () {

			  },

			//методы использыемые при работе фреймворка
			methods: {			
			//---------------------------------------------------------
					
			
			}
		})
	});