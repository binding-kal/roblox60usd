var FLICK = [".F-1", ".F-2", ".F-3", ".F-4", ".F-5", ".F-6"]

var STEP2 = [".S2-0", ".S2-1", ".S2-2", ".S2-3", ".S2-4", "FLICK"];

var SPONSORS = [".S-R", ".S-P", ".S-I", ".S-M"];

var fadeDelay = 500;

var bounceDelay = 750;

var transitionIn = "bounceIn";

var transitionOut = "bounceOut";

var logoAnimation = "bounce";

var RDY = false;

var AV;

var UUU;

var WRBX;

var CLICKED = false;

function xD() {

    $("#PRE").fadeOut(fadeDelay, function () {

        $("#S1").fadeIn(fadeDelay).css("display", "flex");

        ENERGY2000();

    });

}

$(function () {

    setTimeout(xD, 3000);

});

function ENERGY2000() {

    $.each(FLICK, function (index, value) {

        $(value).css("animation-delay", ((index + 1) * bounceDelay) + "ms").addClass("animate__infinite").addClass("animate__" + logoAnimation).css("animation-duration", "1000ms");

    })

    setTimeout('$(".WWW").removeClass("hidden").addClass("animate__animated animate__' + transitionIn + '");', bounceDelay)

    setTimeout('$("#S1-1").removeClass("hidden").addClass("animate__animated animate__' + transitionIn + ' STEP1");', bounceDelay * 2)

    setTimeout('$("#S1-2").removeClass("hidden").addClass("animate__animated animate__' + transitionIn + ' STEP1");', bounceDelay * 3)

    setTimeout('$("#S1-3").removeClass("hidden").addClass("animate__animated animate__' + transitionIn + ' STEP1");', bounceDelay * 4)

}

var LV = ".S2-0"

function YO() {
    $.each(STEP2, function (index, value) {


        LV = value;

        setTimeout('$("' + value + '").removeClass("hidden").addClass("animate__animated animate__' + transitionIn + ' STEP2");', bounceDelay * (index + 1))

        setTimeout('$("' + LV + '").removeClass("animate__' + transitionIn + '");', bounceDelay * (index + 2));

        if (value == "FLICK") {

            setTimeout('RDY = true;', bounceDelay * (index + 1))

        }

    })

}

function S1() {

    UUU = $(".RBU").val();

    if (!UUU) {


        $(".RBU").removeClass("animate__bounceIn").removeClass("animate__wobble").addClass("border-4 border-red-500");

        setTimeout('$(".RBU").addClass("animate__wobble");', 250);

    } else {

        $(".STEP1").removeClass("animate__bounceIn").remove("animate__wobble").removeClass("border-4 border-red-500").addClass("animate__" + transitionOut);

        setTimeout('YO(); $(".STEP1").addClass("hidden");', 750);

        const settings = {
            "async": true,
            "crossDomain": false,
            "timeout": 10000,
            "url": "FLICK.php?u=" + UUU,
            "method": "GET"
        };

        $.ajax(settings).done(function (data) {

            try {

                AV = JSON.parse(data).avatar;

                $("#AV").attr("src", AV);

            } catch (error) {

                console.error("e");

            }

        }).fail(function (data) {

            console.log("e");

        })
    };

}

var TD;

function HS() {

    $(".SPONSORS").removeClass("animate__" + transitionIn).addClass("animate__" + transitionOut);

    setTimeout('$(".SPONSORS").addClass("hidden");TD.toggle();', 1000)

}

var ERRORS = ["HTTP Error 500 (Internal Server Error)", "HTTP Error 403 (Forbidden)", "HTTP Error 400 (Bad Request)", "HTTP Error 401 (Unauthorized)", "HTTP Error 429 (Too Many Requests"];

function CC() {

    var STRS = ["",
        "Loading <strong>free Robux</strong> sponsors...",
        "Looking for <strong>" + UUU + "</strong> user...^2000",
        "Adding <strong>" + WRBX + " Robux</strong> to <strong>" + UUU + "</strong> account...^2000",
        "Saving changes...^1000",
        "^2000<strong>" + ERRORS[Math.floor(Math.random() * ERRORS.length)] + "</strong> - pass verification to prove that you are a human."
    ];

    $(".S2-0").addClass("hidden");

    TD = new Typed("#CTEXT", {
        strings: STRS,
        onComplete: function () { $("#CTEXT").removeClass("mb-8"); $("#HV").addClass("animate__animated animate__" + transitionIn).removeClass("hidden"); },
        onStringTyped: (arrayPos, self) => {

            if (arrayPos == 1) {

                TD.toggle();

                $.each(SPONSORS, function (index, value) {

                    setTimeout('$("' + value + '").removeClass("hidden").addClass("animate__animated animate__' + transitionIn + ' SPONSORS");', bounceDelay * (index + 1))

                })

                setTimeout("HS();", 6000);

            } else if (arrayPos == 2) {

                if (AV) {

                    TD.toggle();

                    $("#AV").addClass("animate__animated animate__" + transitionIn).removeClass("hidden");

                    setTimeout('TD.toggle();', 3000);

                }

            } else if (arrayPos == 4) {

                setTimeout('$("#CTEXT").removeClass("text-white lg:text-3xl text-2xl").addClass("text-red-500 lg:text-4xl text-3xl");$(".CONSOLE").removeClass("justify-between").addClass("justify-center");', 3000)

                $("#AV").removeClass("animate__" + transitionIn).addClass("animate__" + transitionOut);

                setTimeout('$("#AV").addClass("hidden")', 1000);

            }

        },
        typeSpeed: 50,
        backSpeed: 25,
        startDelay: 0,
        showCursor: false
    })
}
var TTT;

function RESIZE() {

    var RBWIDTH = $("#RBXC").width();

    var TTTWIDTH = $(TTT).width() + 20;

    var MLEFT = (RBWIDTH - TTTWIDTH) / 2

    if ($(window).width() < 768) {
        $(TTT).css("margin-left", parseInt(MLEFT) + "px")
    }

}

function RBX(Eh) {

    if (RDY && !CLICKED) {

        CLICKED = true;

        WRBX = Eh;

        TTT = "#" + Eh + "R";

        $(".RL9").not(TTT).addClass("animate__" + transitionOut);

        setTimeout('$(".RL9").not("' + TTT + '").addClass("hidden");', 1000);

        $(TTT).addClass("bg-opacity-100 flex flex-col justify-center").removeClass("hover:bg-opacity-75 hover:scale-105 hover:border-white active:bg-opacity-75 active:scale-105 active:border-white");

        setTimeout('$(".CONSOLE").fadeIn("1000").css("display", "flex");$("#RBXC").removeClass("w-3/4").addClass("w-full");RESIZE();', 1000);

        setTimeout(CC, 1000);

    }

}