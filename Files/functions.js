//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: krisvalchev@gmail.com

var drinkNumber = 1;

function start()
{
    //  Something in here...
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
    if (drinkNumber == 1)
    {
        document.getElementById("f01").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f02").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        document.getElementById("prevButton").style.animation = "fadeInUp .3s ease-out forwards";

        drinkNumber = 2;
    }
    else if (drinkNumber == 2)
    {
        document.getElementById("f02").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f03").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 3;
    }
    else if (drinkNumber == 3)
    {
        document.getElementById("f03").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f04").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 4;
    }
    else if (drinkNumber == 4)
    {
        document.getElementById("f04").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f05").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 5;
    }
    else if (drinkNumber == 5)
    {
        document.getElementById("f05").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f06").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 6;
    }
    else if (drinkNumber == 6)
    {
        document.getElementById("f06").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f07").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 7;
    }
    else if (drinkNumber == 7)
    {
        document.getElementById("f07").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f08").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        document.getElementById("nextButton").style.animation = "fadeOutDown .1s ease-in forwards";

        drinkNumber = 8;
    }
}

function prevBeer()
{
    if (drinkNumber == 2)
    {
        document.getElementById("f02").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f01").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        document.getElementById("prevButton").style.animation = "fadeOutDown .1s ease-in forwards"

        drinkNumber = 1;
    }
    else if (drinkNumber == 3)
    {
        document.getElementById("f03").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f02").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 2;
    }
    else if (drinkNumber == 4)
    {
        document.getElementById("f04").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f03").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 3;
    }
    else if (drinkNumber == 5)
    {
        document.getElementById("f05").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f04").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 4;
    }
    else if (drinkNumber == 6)
    {
        document.getElementById("f06").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f05").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 5;
    }
    else if (drinkNumber == 7)
    {
        document.getElementById("f07").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f06").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        drinkNumber = 6;
    }
    else if (drinkNumber == 8)
    {
        document.getElementById("f08").style.animation = "fadeOutInfoTextImageBox .1s ease-in forwards"
        document.getElementById("f07").style.animation = "fadeInInfoTextImageBox .3s ease-out forwards";

        document.getElementById("nextButton").style.animation = "fadeInUp .3s ease-out forwards";

        drinkNumber = 7;
    }
}