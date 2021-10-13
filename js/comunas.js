function change(region,comuna){
    region = document.getElementById(region);
    comuna = document.getElementById(comuna);
    comuna.value="";
    comuna.innerHTML = "";
    
    if(region.value == "Santiago"){
     var optionArray = ["|","Santiago|Santiago","La Reina|La Reina","Puente Alto|PuenteAlto","Providencia|Providencia"];
    } else if (region.value == "Valparaiso"){
         var optionArray = ["|","Valparaiso|Valparaiso","Viña del Mar|Viña del Mar","Concon|Concon","Quilpue|Quilpue"];
    };

for(option=0;option < optionArray.lenght; option++){
    var pair =optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML =pair[1];
    colonia.options.add(newOption);
};
}