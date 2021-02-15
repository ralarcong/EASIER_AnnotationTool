function setup(){
    noCanvas();
    let bgpage= chrome.extension.getBackgroundPage();
    let diccionario=bgpage.dict;


    $('#boton').click(function do_something(){
        var newURL = "test.html";
        chrome.tabs.create({ url: newURL });

    });


    
}
