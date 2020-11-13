//funcion inicial
function llenado(){
    //Creacion de arreglos
    var peliculas=["Las ventajas de ser invisible", "It"];
    var personajes =["Amy Pond", "The Doctor", "Tony Stark"];

    //LLenado de Datos solicitados
    //Dato solicitado: nombre
    var nom = document.createElement("p");
    var text = document.createTextNode("Nombre: Eduardo Adrian Chale Ciau");
    nom.appendChild(text);
    var anteriorP = document.body.getElementsByTagName("p")[1];
    anteriorP.parentNode.replaceChild(nom, anteriorP);

    //Dato solicitado: numero de control
    var num = document.createElement("p");
    text = document.createTextNode("Número de control: 17390324");
    num.appendChild(text);
    anteriorP = document.body.getElementsByTagName("p")[2];
    anteriorP.parentNode.replaceChild(num, anteriorP);

    //Agregacion de los elementos del arreglo de peliculas
    for(var i=0; i<peliculas.length;i++){
        var renglon = document.createElement("li");
        var celda = document.createTextNode(peliculas[i]);
        renglon.appendChild(celda);
        document.getElementsByTagName("ol")[0].appendChild(renglon);
    }

    //Agregacion de los elementos del arreglo de personajes
    var lista =document.createElement("ol");
    for(i=0; i<personajes.length;i++){
        renglon = document.createElement("li");
        celda = document.createTextNode(personajes[i]);
        renglon.appendChild(celda);
        lista.appendChild(renglon);
    }

    var parrafo = document.getElementsByTagName("p")[4];
    document.body.insertBefore(lista, parrafo);
}

//funcion para agregar personajes
function agregar(){
    var valor = document.getElementById("nuevo").value;
    var renglon = document.createElement("li");
    var celda = document.createTextNode(valor);
    renglon.appendChild(celda);
    document.getElementsByTagName("ol")[0].appendChild(renglon);
}

//funcion para eliminar peliculas
function eliminar(){
    var ol= document.getElementsByTagName("ol")[1];
    var li =ol.getElementsByTagName("li")[numero.value-1];
    ol.removeChild(li);
}