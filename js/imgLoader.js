/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
function pasteHandler(e) {
// если поддерживается event.clipboardData (Chrome)
      if (e.clipboardData) {
      // получаем все содержимое буфера
      var items = e.clipboardData.items;
      if (items) {
         // находим изображение
         for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") !== -1) {
               // представляем изображение в виде файла
               var blob = items[i].getAsFile();
               // создаем временный урл объекта
               var URLObj = window.URL || window.webkitURL;
               console.log(URLObj);
               var source = URLObj.createObjectURL(blob);                
               // добавляем картинку в DOM
               createImage(source);
            }
         }
      }
   // для Firefox проверяем элемент с атрибутом contenteditable
   } else {      
      setTimeout(checkInput, 1);
   }
}
 
function checkInput() {
    var child = pasteCatcher.childNodes[0];   
   pasteCatcher.innerHTML = "";    
   if (child) {
// если пользователь вставил изображение – создаем изображение
      if (child.tagName === "IMG") {
         createImage(child.src);
      }
   }
}
 
function createImage(source) {
	
   var pastedImage = new Image();
 //  var imgURL = URL.createObjectURL(source);
  $("#imgAdd").attr("src", source).load = function()
	{
		URL.revokeObjectURL(this.src);
	};
	
}

    