var cookie = getCookie("nomsCookie");
var mangeUnCookie = false;

if(cookie)
{
    mangeUnCookie =  true
}

if(mangeUnCookie)
{
    var noms = getCookie("nomsCookie") 
    var datesEvent = getCookie("datesCookie")
    var nomsArray = noms.split(",");
    var dateEventArray = datesEvent.split(",");

    for(var i= 0; i < nomsArray.length; i++)
    {
        nom = nomsArray[i];
        dateEvent = dateEventArray[i];
        var btn = document.createElement("DIV");
        btn.setAttribute("id", nom);
        document.body.appendChild(btn);
        CountDownTimer(dateEvent, nom); 
    }
}



function CountDownTimer(dt, id)
{
    var divTest =  document.createElement(id);

    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var _week = _day * 7;
    var _month = _day * 30;

    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';
            document.body.appendChild(divTest);


            return;
        }
        var months = Math.floor(distance / _month);
        var weeks = Math.floor(distance / _week);
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);


        if (String(hours).length < 2){
            hours = 0 + String(hours);
        }
        if (String(minutes).length < 2){
            minutes = 0 + String(minutes);
        }
        if (String(seconds).length < 2){
            seconds = 0 + String(seconds);
        }


        var datestr =  months + ' Mois ' + 
         weeks + ' Semaines ' + 
        days + ' Jours ' /* + 
        hours + ' h ' + 
        minutes + ' mn ' + 
        seconds + ' s';*/

        document.body.appendChild(divTest);

        document.getElementById(id).innerHTML =id+" : "+ datestr;

    }

    timer = setInterval(showRemaining, 1000);
} 


myFunction = function() {
    var nomNew = document.getElementById("nom").value;
    var dateEventNew = document.getElementById("date").value;

    //On enregistre les cookies
    if(mangeUnCookie)
    {
        var noms = getCookie("nomsCookie")
        var datesEvent = getCookie("datesCookie")
        nomSave = noms + ","+nomNew;
        dateEventSave = datesEvent + ","+dateEventNew;

        document.cookie = "nomsCookie="+nomSave;
        document.cookie = "datesCookie="+dateEventSave;
    }
    else{
        document.cookie = "nomsCookie="+nomNew;
        document.cookie = "datesCookie="+dateEventNew;
    }


    var btn = document.createElement("DIV");

    btn.setAttribute("id", nomNew);
    document.body.appendChild(btn);
    CountDownTimer(dateEventNew, nomNew);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var hide =  function(){
    var style = document.getElementById("hide").style.display;
    if(style == "inline")
    {
        document.getElementById("hide").style.display="none";
    }
    else
    {
        document.getElementById("hide").style.display="inline";

    }


}
