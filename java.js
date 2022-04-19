var deliveryDate = document.getElementById( "deliveryDate" );
    var today = new Date();
    var next2week = new Date(today.getFullYear(), today.getMonth(), today.getDate()+14);

    var QmediumMaki = document.getElementById( "QmediumMaki" );
    var QsmallMaki = document.getElementById( "QsmallMaki" );
    var Qbakedsalmon = document.getElementById( "Qbakedsalmon" );
    var Qcheesecake8 = document.getElementById( "Qcheesecake8" );
    var Qcheesecake7 = document.getElementById( "Qcheesecake7" );
    var Qcheesecake6 = document.getElementById( "Qcheesecake6" );
    var Qcheesecake5 = document.getElementById( "Qcheesecake5" );
    var Qchocochip = document.getElementById( "Qchocochip" );
    var Qcrinkles = document.getElementById( "Qcrinkles" );
    var Qsugarcookies = document.getElementById( "Qsugarcookies" );
    var Qextranori = document.getElementById( "Qextranori" );
    var Qextraspicy = document.getElementById( "Qextraspicy" );
    var Qextracheese = document.getElementById( "Qextracheese" );
    var Qsmallbrownrice = document.getElementById( "Qsmallbrownrice" );
    var Qmediumbrownrice = document.getElementById( "Qmediumbrownrice" );


    var PmediumMaki = QmediumMaki*380
    var PsmallMaki = QsmallMaki*250
    var Pbakedsalmon = Qbakedsalmon*230
    var Pcheesecake8 = Qcheesecake8*750
    var Pcheesecake7 = Qcheesecake7*650
    var Pcheesecake6 = Qcheesecake6*550
    var Pcheesecake5 = Qcheesecake5*450
    var Pchocochip = Qchocochip*120
    var Pcrinkles = Qcrinkles*120
    var Psugarcookies = Qsugarcookies*90
    var Pextranori = Qextranori*25
    var Pextraspicy = Qextraspicy*30
    var Pextracheese = Qextracheese*30
    var Psmallbrownrice = Qsmallbrownrice*10
    var Pmediumbrownrice = Qmediumbrownrice*20

    function ValidDateFunction() {
        if (deliveryDate >= next2week) {
        alert("Success!")
        } else {
        alert("Invalid Date! Must be at least 2 weeks from now")
        }
    }

    function showDiv() {
        document.getElementById('checkout').style.display = "block";
    }