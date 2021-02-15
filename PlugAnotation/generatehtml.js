
function setup(){
    noCanvas();
    let bgpage= chrome.extension.getBackgroundPage();
    let diccionario=bgpage.dict;
    var diccionariofinal={}
    var cont=0;
    for(var key in diccionario) {
        var value = diccionario[key];
        createP("<center><strong>"+"PALABRA"+"</strong>"+" "+key+"</center><br/>"+"<center><strong>"+"ORACI&OacuteN"+"</strong>"+" "+value+"</center>");
        input=createInput();
        input.id(cont);
        cont=cont+1;
        input=createInput();
        input.id(cont);
        cont=cont+1;
        input=createInput();
        input.id(cont);
        cont=cont+1;
        input=createInput();
        input.id(cont);
        cont=cont+1;
        input=createInput();
        input.id(cont);
        cont=cont+1;
    }
    button=createButton("Guardar");
    button.id("botonSyn");

    $('#botonSyn').click(function do_something(){
        var i=0;
        for(var key in diccionario) {
            var value = diccionario[key];
            sinonimos=[$("#"+i+"").val(),$("#"+(i+1)+"").val(),$("#"+(i+2)+"").val(),$("#"+(i+3)+"").val(),$("#"+(i+4)+"").val()]
            diccionariofinal[key] = [value.trim(),sinonimos];
            i=i+5;

        }
        for(var key in diccionariofinal) {
            var value= diccionariofinal[key];
            var posini=value[0].indexOf(key);
            var posfin=key.length+value[0].indexOf(key);
            createP("<strong>"+"PALABRA"+"</strong>"+" "+key+" "+"<strong>"+"ORACI&OacuteN"+"</strong>"+" "+value[0]+" "+"<strong>"+"Sinónimo-1"+"</strong>"+" "+value[1][0]+" "+"<strong>"+"Sinónimo-2"+"</strong>"+value[1][1]+" "+"<strong>"+"Sinónimo-3"+"</strong>"+value[1][2]+" "+"<strong>"+"Sinónimo-4"+"</strong>"+value[1][3]+" "+"<strong>"+"Sinónimo-5"+"</strong>"+value[1][4]+" "+"<strong>"+"PosiciónInicial"+"</strong>"+posini+" "+"<strong>"+"PosiciónInicial"+"</strong>"+posfin);

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
            }
            };
            xhttp.open("POST", "path to database storage_service", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(
                "{'palabra' : '"+key+"','oracion' : '"+value[0]+"','sinonimo1' : '"+value[1][0]+"','sinonimo2' : '"+value[1][1]+"','sinonimo3' : '"+value[1][2]+"','sinonimo4' : '"+value[1][3]+"','sinonimo5' : '"+value[1][4]+"','posini' : '"+posini+"','posfin' : '"+posfin+"','documentoid' : '"+$("#doccod").val()+"'}"
                );
     
            }

            alert("Datos guardados")
    });
    
    
}