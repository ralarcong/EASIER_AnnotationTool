var html = "";
if (typeof window.getSelection != "undefined") {
    var sel = window.getSelection();
    if (sel.rangeCount) {
    var container = document.createElement("div");
    for (var i = 0, len = sel.rangeCount, range; i < len; ++i) {
        range = sel.getRangeAt(i);
        if (range.startContainer === range.endContainer
            && range.startContainer.nodeType === Node.TEXT_NODE
            && range.startOffset === 0
            && range.endOffset === range.startContainer.length) {
        range.selectNode(range.startContainer.parentElement);
        }
        container.appendChild(range.cloneContents());
    }
    html = container.innerHTML;
    }
} else if (typeof document.selection != "undefined") {
    if (document.selection.type == "Text") {
    html = document.selection.createRange().htmlText;
    }
}


range = window.getSelection().getRangeAt(0);


startEl = range.startContainer;
endEl = range.endContainer;
ParentEl =  range.commonAncestorContainer;
childEl = range.commonAncestorContainer.childNodes;

if (startEl.nodeType == 3 && $(startEl.parentNode).attr('class') == "color"){
    $span = $(startEl.parentNode);
    $span.replaceWith($span.html());
}
else if (endEl.nodeType == 3 && $(endEl.parentNode).attr('class') == "color"){
    $span = $(endEl.parentNode);
    $span.replaceWith($span.html());
}
else if (ParentEl.nodeType == 3 && $(ParentEl).attr('class') == "color"){
    $span = $(ParentEl);
    $span.replaceWith($span.html());   
}
else{
    for (var i = 0; i < childEl.length; i++) {
        if ($(childEl[i]).attr('class') == "color"){
            if (~html.indexOf(String($(childEl[i]).html()))){
                $span = $(childEl[i]);
                $span.replaceWith($span.html());
            }
        }
    }
}


message={
    text:$span.html(),
    text3:'0',
}

chrome.runtime.sendMessage(message);