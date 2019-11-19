
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
        mapChart:'components/mapChart',
        plotChart:'components/plotChart',
        tableNew:'components/tableNew'
        //--------------------------------------------------------
    },
    shim: { // разрешение зависимостей между модулями в [] указаны библиотеки и модулт необходимые для работы
        "jquery": {
            deps: []
        },
        "bootstrapBundle": {
            deps: ['jquery']
        },
        "Vue": {
            "exports": "Vue"
        },
		"MainCatalog":{
			 deps: ['jquery', 'bootstrapBundle', 'Vue']
		},
        "testComponent":{ deps: ['jquery', 'bootstrapBundle', 'Vue'] },
        
        "mapChart":{ deps: ['jquery', 'bootstrapBundle', 'Vue']},

        "plotChart":{ deps: ['jquery', 'bootstrapBundle', 'Vue']},
        
        "tableNew":{ deps: ['jquery', 'bootstrapBundle', 'Vue']}

    }
});
//------------------------------------------------------------------------------------
//ВНИМАНИЕ колличество аргументов в define должно соотвествовать, количеству аргументов в function 
define(['jquery', 'bootstrapBundle', 'Vue','MainCatalog'],

    function ($, bootstrapBundle, Vue,MainCatalog) {
        //-------------------------------------------------------------------------------------------------
        // инициализация 
        catalog = require('MainCatalog'); 

        console.log(catalog);

        return catalog;
    });