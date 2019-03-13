//Fonctions adaptées de la page http://damienalexandre.fr/Info-Bulle-en-Javascript.html

function safficheInfos(id_infos) {

    var infos = document.getElementById(id_infos);

    if (navigator.appName!="Microsoft Internet Explorer") {
	elt.style.left=e.pageX + 5+"px";
	elt.style.top=e.pageY + 10+"px";
    }
    else {
    if(document.documentElement.clientWidth>0) {
	infos.style.left=20+event.x+document.documentElement.scrollLeft+"px";
	infos.style.top=10+event.y+document.documentElement.scrollTop+"px";
    } else {
	infos.style.left=20+event.x+document.body.scrollLeft+"px";
	infos.style.top=10+event.y+document.body.scrollTop+"px";
         }
    }
    infos.style.visibility="visible";

}

function afficheInfos(id_infos) {

    var infos = document.getElementById(id_infos);
    infos.style.visibility="visible";

}

function cacheInfos(id_infos) {

    var infos = document.getElementById(id_infos);
    infos.style.visibility="hidden";
}
