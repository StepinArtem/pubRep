
define(['jquery', 'bootstrapBundle', 'Vue','testComponent','mapChart','plotChart','tableNew'], //перечень библиотек необходимых для работы модуля 

    function ($, bootstrapBundle,Vue,testComponent,mapChart,plotChart,tableNew) { // колличество перемнных на вход должно соотвествовать в define[]

		
	return  new Vue({
		el: '#app',// блок куда инициализируется фремворк
			data: {	//данные испоьзуемые фреймворком
				text1:"Текст 1",
				text2:"Текст 2",
				text3:"Текст 3",
				text4:"Текст 4"
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