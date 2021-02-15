
window.selecciones=[];

var dict = new Object();
var dict = {};

cont=0;

var variable=[]


function receiver(request,sender,sendResponse){
    if(request.text3=='1'){
        dict[request.text] = request.text2;
    }
    else if(request.text3=='0'){
        delete dict[(request.text).toString().trim()];
    }
    console.log("inicio");
    for(var key in dict) {
         var value = dict[key];
         console.log(value);
         console.log(key);
    }
    
}
function onClickHandler(info, tab) {
    if (info.menuItemId == "checkbox1") {
        chrome.tabs.executeScript(null, {file: "jquery341min.js"}, function(){
            if (!window.selecciones.length){
                chrome.runtime.onMessage.addListener(receiver);
            }
            chrome.tabs.executeScript(null,{file:"highlight.js"});
        });
    }
    else if(info.menuItemId == "checkbox2"){
        chrome.tabs.executeScript(null, {file: "jquery341min.js"}, function(){
            if (!window.selecciones.length){
                chrome.runtime.onMessage.addListener(receiver);
            }
            chrome.tabs.executeScript(null,{file:"undohighlight.js"});
        });
    }
     else {
      console.log("item " + info.menuItemId + " was clicked");
      console.log("info: " + JSON.stringify(info));
      console.log("tab: " + JSON.stringify(tab));
    }
  };
  
  chrome.contextMenus.onClicked.addListener(onClickHandler);
  
  chrome.runtime.onInstalled.addListener(function() {

    var context = "selection";


    chrome.contextMenus.create(
        {"title": "Seleccionar", "contexts":[context],"type": "checkbox", "id": "checkbox1"});
    chrome.contextMenus.create(
        {"title": "Deshacer", "contexts":[context],"type": "checkbox", "id": "checkbox2"});
    console.log("checkbox1 checkbox2");
  
  });


