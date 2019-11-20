
catalog = null;// перменная в котрую инициализируется фреймворк VUE JS
// инициализация require js 
// подключает библиотеки и разрешает зависимости между библиотеками

require.config({ 
    paths: {
        //--------------------------------------------------------
        //перчень подключаемых библиотек
        jquery: 'jquery-3.4.1.min', 
        bootstrapBundle: "bootstrap.bundle.min",
        Vue: 'Vue',
        //--------------------------------------------------------
        //перчень подключаемых файлов
		MainCatalog:'MainCatalog',// экземпляр фрейворк, точка входа
        testComponent:'components/testComponent', // тестовый компонет	
        mapChart:'components/mapChart',// компонент карты
        plotChart:'components/plotChart', // компонент графика
        tableNew:'components/tableNew', // компонент таблицы
        xmlToJson:'xml2json',
        chart:'Chart.min',
        utils:'utils',
        axios:'axios.min'
        //--------------------------------------------------------
    },
    shim: { // разрешение зависимостей между модулями в [] указаны библиотеки и модули необходимые для работы
        "jquery": {
            deps: []
        },
        "bootstrapBundle": {
            deps: ['jquery']
        },
        
		"MainCatalog":{
			 deps: ['jquery', 'bootstrapBundle', 'Vue','axios']
		},
        "testComponent":{ deps: ['jquery', 'bootstrapBundle', 'Vue'] },
        
        "mapChart":{ deps: ['jquery', 'bootstrapBundle', 'Vue']},

        "plotChart":{ deps: ['jquery', 'bootstrapBundle', 'Vue']},
        
        "tableNew":{ deps: ['jquery', 'bootstrapBundle', 'Vue']}

    }
});
//------------------------------------------------------------------------------------
//ВНИМАНИЕ колличество аргументов в define должно соотвествовать, количеству аргументов в function 
define(['jquery', 'bootstrapBundle', 'Vue','MainCatalog','xmlToJson','chart','utils','axios'],

    function ($, bootstrapBundle, Vue,MainCatalog,xmlToJson,chart,utils,axios) {
        //-------------------------------------------------------------------------------------------------
        // инициализация 
        catalog = require('MainCatalog'); 

        console.log(catalog);

        return catalog;
    });