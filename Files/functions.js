//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: krisvalchev@gmail.com

var drinkNumber = 1;
var screenSize = 0; // 0 - normal, 1 - 1000px

function start()
{
    if (screenSize == 0)
    {
        document.getElementById("f01").style.animation = "fadeInUp .5s ease-out forwards .3s";
        document.getElementById("s02").style.animation = "fadeInUp .5s ease-out forwards .5s";
    }
    else if (window.screen.width > 1000) //screenSize == 1
    {
        document.getElementById("f01").style.animation = "fadeInLeft .5s ease-out forwards .3s";
    }
}

function openSideMenu()
{
    document.getElementById("sideMenu").style.transform = "translate(0px)";
}

function closeSideMenu()
{
    document.getElementById("sideMenu").style.transform = "translate(-700px)";
}

function nextBeer()
{
    if (drinkNumber == 1 && screenSize == 0)
    {
        document.getElementById("f01").style.animation = "fadeOutDown .5s ease-in forwards"
        document.getElementById("s02").style.animation = "fadeOutDown .5s ease-in forwards";

        document.getElementById("f03").style.animation = "fadeInUp 1s ease-out forwards";
        document.getElementById("s04").style.animation = "fadeInUp 1s ease-out forwards";

        document.getElementById("prevButton").style.animation = "fadeInUp 1s ease-out forwards";

        drinkNumber = 2;
    }
    else if (drinkNumber == 2 && screenSize == 0)
    {
        document.getElementById("f03").style.animation = "fadeOutDown .5s ease-in forwards"
        document.getElementById("s04").style.animation = "fadeOutDown .5s ease-in forwards";

        document.getElementById("f05").style.animation = "fadeInUp 1s ease-out forwards";
        document.getElementById("s06").style.animation = "fadeInUp 1s ease-out forwards";

        drinkNumber = 3;
    }
    else if (drinkNumber == 3 && screenSize == 0)
    {
        document.getElementById("f05").style.animation = "fadeOutDown .5s ease-in forwards"
        document.getElementById("s06").style.animation = "fadeOutDown .5s ease-in forwards";

        document.getElementById("f07").style.animation = "fadeInUp 1s ease-out forwards";
        document.getElementById("s08").style.animation = "fadeInUp 1s ease-out forwards";

        document.getElementById("nextButton").style.animation = "fadeOutDown .5s ease-in forwards";

        drinkNumber = 4;
    }

    //  After the screen is smaller than 1000px

    if (drinkNumber == 1 && screenSize == 1)
    {
        document.getElementById("f01").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("s02").style.animation = "fadeInLeft 1s ease-out forwards";

        document.getElementById("prevButton").style.animation = "fadeInUp 1s ease-out forwards";

        drinkNumber = 2;
    }
    else if (drinkNumber == 2 && screenSize == 1)
    {
        document.getElementById("s02").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("f03").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 3;
    }
    else if (drinkNumber == 3 && screenSize == 1)
    {
        document.getElementById("f03").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("s04").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 4;
    }
    else if (drinkNumber == 4 && screenSize == 1)
    {
        document.getElementById("s04").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("f05").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 5;
    }
    else if (drinkNumber == 5 && screenSize == 1)
    {
        document.getElementById("f05").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("s06").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 6;
    }
    else if (drinkNumber == 6 && screenSize == 1)
    {
        document.getElementById("s06").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("f07").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 7;
    }
    else if (drinkNumber == 7 && screenSize == 1)
    {
        document.getElementById("f07").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("s08").style.animation = "fadeInLeft 1s ease-out forwards";

        document.getElementById("nextButton").style.animation = "fadeOutDown .5s ease-in forwards";

        drinkNumber = 8;
    }
}

function prevBeer()
{
    if (drinkNumber == 2 && screenSize == 0)
    {
        document.getElementById("f03").style.animation = "fadeOutDown .5s ease-in forwards"
        document.getElementById("s04").style.animation = "fadeOutDown .5s ease-in forwards"
        
        document.getElementById("f01").style.animation = "fadeInUp 1s ease-out forwards";
        document.getElementById("s02").style.animation = "fadeInUp 1s ease-out forwards";

        document.getElementById("prevButton").style.animation = "fadeOutDown .5s ease-in forwards"

        drinkNumber = 1;
    }
    else if (drinkNumber == 3 && screenSize == 0)
    {
        document.getElementById("f05").style.animation = "fadeOutDown .5s ease-in forwards"
        document.getElementById("s06").style.animation = "fadeOutDown .5s ease-in forwards"
        
        document.getElementById("f03").style.animation = "fadeInUp 1s ease-out forwards";
        document.getElementById("s04").style.animation = "fadeInUp 1s ease-out forwards";

        drinkNumber = 2;
    }
    else if (drinkNumber == 4 && screenSize == 0)
    {
        document.getElementById("f07").style.animation = "fadeOutDown .5s ease-in forwards"
        document.getElementById("s08").style.animation = "fadeOutDown .5s ease-in forwards"
        
        document.getElementById("f05").style.animation = "fadeInUp 1s ease-out forwards";
        document.getElementById("s06").style.animation = "fadeInUp 1s ease-out forwards";

        document.getElementById("nextButton").style.animation = "fadeInUp 1s ease-out forwards";

        drinkNumber = 3;
    }

    //  After the screen is smaller than 1000px

    if (drinkNumber == 2 && screenSize == 1)
    {
        document.getElementById("s02").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("f01").style.animation = "fadeInLeft 1s ease-out forwards";

        document.getElementById("prevButton").style.animation = "fadeOutDown .5s ease-in forwards"

        drinkNumber = 1;
    }
    else if (drinkNumber == 3 && screenSize == 1)
    {
        document.getElementById("f03").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("s02").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 2;
    }
    else if (drinkNumber == 4 && screenSize == 1)
    {
        document.getElementById("s04").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("f03").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 3;
    }
    else if (drinkNumber == 5 && screenSize == 1)
    {
        document.getElementById("f05").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("s04").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 4;
    }
    else if (drinkNumber == 6 && screenSize == 1)
    {
        document.getElementById("s06").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("f05").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 5;
    }
    else if (drinkNumber == 7 && screenSize == 1)
    {
        document.getElementById("f07").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("s06").style.animation = "fadeInLeft 1s ease-out forwards";

        drinkNumber = 6;
    }
    else if (drinkNumber == 8 && screenSize == 1)
    {
        document.getElementById("s08").style.animation = "fadeOutRight .5s ease-in forwards"
        document.getElementById("f07").style.animation = "fadeInLeft 1s ease-out forwards";

        document.getElementById("nextButton").style.animation = "fadeInUp 1s ease-out forwards";

        drinkNumber = 7;
    }
}

function myFunction(x)
{
    if (x.matches)
    {
        screenSize = 1;
    }
    else
    {
        screenSize = 0;
    }
}
  
  var x = window.matchMedia("(max-width: 1000px)")
  myFunction(x)
  x.addListener(myFunction)