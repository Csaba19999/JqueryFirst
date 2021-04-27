$(function (){
    htmlSzerkesztes();
});

function nev() {
    var bevmezo = $("#nev").val();
    console.log(bevmezo);
}



var kepObj1 = {
    kep: "8.jpg",
    cim: "Cím 1",
    leiras: "1. kép leírása"


};

var kepObj2 = {
    kep: "9.jpg",
    cim: "Cím 2",
    leiras: "2. kép leírása"

};

var kepObj3 = {
    kep: "10.jpg",
    cim: "Cím 3",
    leiras: "3. kép leírása"

};

var objektumTomb = [kepObj1,kepObj2,kepObj3];

$(function htmlSzerkesztes() {
    beTolt(0);
    $("#bal").click("click",balra);
    $("#jobb").click("click",jobbra);
    

    $("article div").eq(1).append("<ul> <li>1</li> <li>2</li> <li>3</li> <li>4</li> </ul>");
    for (var i = 0; i < objektumTomb.length; i++) {
        $("article div").eq(1).append('<img src="kepek/174412089_909579066562534_721731223898567988_n.jpg" alt=""/>');


    }




    var kepElemCim = $(".kepTarolo h1");
    var kepElem = $(".kepTarolo");
    var kepElemTartalom = $(".kepTarolo p");
    var kep = $(".kepTarolo img");

    for (var i = 0; i < kep.length; i++) {
        $("article div").eq(1).html("összes div");
        kep[i].src = objektumTomb[i].kep;
        kepElemCim[i].innerHTML = objektumTomb[i].cim;
        kepElemTartalom[i].innerHTML = objektumTomb[i].leiras;

    }

    for (var i = 0; i < kepElemCim.length; i++) {

        kepElem[i].addEventListener("mouseover", formazFel);
        kepElem[i].addEventListener("mouseleave", formazLe);
        kepElem[i].addEventListener("click", nagyKepBetolt);



    }



});


function formazFel() {

    this.classList.add("kepTaroloAktiv");

}
function formazLe() {

    this.classList.remove("kepTaroloAktiv");

}

function nagyKepBetolt() {
   var id=this.id;
    
        beTolt(id);
        
   
 
 
    console.log(this.id);
}

function beTolt(index) {
    $("#nagykep img")[0].src = objektumTomb[index].kep;
    $("#nagykep h1")[0].innerHTML = objektumTomb[index].cim;
    $("#nagykep p")[0].innerHTML = objektumTomb[index].leiras;
}

function balra(){
    
}

function jobbra(){
    
}






