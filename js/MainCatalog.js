
define(['jquery', 'bootstrapBundle', 'Vue','testComponent','mapChart','plotChart','tableNew'], //перечень библиотек необходимых для работы модуля 

    function ($, bootstrapBundle,Vue,testComponent,mapChart,plotChart,tableNew) { // колличество перемнных на вход должно соотвествовать в define[]

		
	return  new Vue({
		el: '#app',// блок куда инициализируется фремворк
			data: {	//данные испоьзуемые фреймворком
				text1:"Карта",
				text2:"Таблица",
				text3:"График",
				text4:"Талица"
			},
			/*components:  {
				'testComponent': testComponent // тестовый компонент
			},*/
			// инициализация фреймворка
			created: function () { 
				
				var that = this;//ссылка на самого себя
				
			},
			//методы использыемые при работе фреймворка
			methods: {			
			//---------------------------------------------------------
					
			
			}
		})
	});