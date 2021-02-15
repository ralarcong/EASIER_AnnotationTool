if (window.getSelection()) {

    var selection = window.getSelection();
    let selected=selection.toString().trim();
    var range =selection.getRangeAt(0).cloneRange();
    var commonParent = $(range.commonAncestorContainer.parentNode);
    var oracion;

    if(selected.toString().length > 1){
       
        var newNode = document.createElement("span");
        newNode.setAttribute("class", "color_new");
        newNode.setAttribute("style", "background-color: pink;");
        range.surroundContents(newNode);

        commonParent.html().split(/[\.\?\!](?= )/g).map(function(v){
            var newNodeSentence = document.createElement("span");
            newNodeSentence.setAttribute("class", "sentence");
            $(newNodeSentence).html(v.trim())
            if ($(newNodeSentence).children('.color_new').length > 0){
                oracion=$(newNodeSentence).text();
                $(".color_new").attr("class", "color")
            }
        }); 

        let message={
            text:selected.toString(),
            text2:oracion,
            text3:'1',
        }

        chrome.runtime.sendMessage(message);
    }
}