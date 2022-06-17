var review = ["I cannot speak highly enough about how much of a pleasure it was to have my children at Country Clubhouse from the time they were babies to them being all grown up. Completely blown away by the fantastic and high quality care that Monica gives. She treats you like family and cares for your children the same way. I recommend this daycare 100% with no reservations, and look forward to bringing my younger children back here, if needed, in the future.", "Monica has been an excellent provider for my kids for years and I would highly recommend."];
var rewiewee = ["Kristin Muñoz", "Unknown"], currentTestimonialPage = 0;

function testimonialUpdate() {
    "use strict";
    document.getElementById('testMiddle').innerHTML = review[currentTestimonialPage];
    document.getElementById('testee').innerHTML = "-" + rewiewee[currentTestimonialPage];
}

function testimonialDecrease() {
    "use strict";
    if (currentTestimonialPage > 0) {
        currentTestimonialPage -= 1;
    } else if (currentTestimonialPage === 0) {
        currentTestimonialPage = review.length - 1;
    }
    testimonialUpdate();
}

function testimonialIncrease() {
    "use strict";
    if (currentTestimonialPage < review.length - 1) {
        currentTestimonialPage += 1;
    } else if (currentTestimonialPage === review.length - 1) {
        currentTestimonialPage = 0;
    }
    testimonialUpdate();
}


function getDate() {
    "use strict";
    var currentYear = new Date().getFullYear(), JoeYear = 1971, MonYear = 1979, AnthYear = 1993, LexiYear = 1998, KobyYear = 2001, KrueYear = 2011,  MaisYear = 2017;
    document.getElementById("joetooltiptext").innerHTML = document.getElementById("joetooltiptext").innerHTML.replace('n<br>', 'n<br>Age: ' + (currentYear - JoeYear) + ' ');
    document.getElementById("monicatooltiptext").innerHTML = document.getElementById("monicatooltiptext").innerHTML.replace('n<br>', 'n<br>Age: ' + (currentYear - MonYear) + ' ');
    document.getElementById("anthonytooltiptext").innerHTML = document.getElementById("anthonytooltiptext").innerHTML.replace('n<br>', 'n<br>Age: ' + (currentYear - AnthYear) + ' ');
    document.getElementById("lexitooltiptext").innerHTML = document.getElementById("lexitooltiptext").innerHTML.replace('r<br>', 'r<br>Age: ' + (currentYear - LexiYear) + ' ');
    document.getElementById("kobytooltiptext").innerHTML = document.getElementById("kobytooltiptext").innerHTML.replace('n<br>',  'n<br>Age: ' + (currentYear - KobyYear) + ' ');
    document.getElementById("kruetooltiptext").innerHTML = document.getElementById("kruetooltiptext").innerHTML.replace('n<br>', 'n<br>Age: ' + (currentYear - KrueYear) + ' ');
    document.getElementById("maisyntooltiptext").innerHTML = document.getElementById("maisyntooltiptext").innerHTML.replace('n<br>', 'n<br>Age: ' + (currentYear - MaisYear) + ' ');
}

function ActivitiesTab(x) {
    "use strict";
    var activityTab = x;
    document.getElementById("activities").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("learn").style.display = "none";
    if (activityTab == 0) {
        document.getElementById("activities").style.display = "block";
    } else if (activityTab == 1) {
        document.getElementById("play").style.display = "block";
    } else {
        document.getElementById("learn").style.display = "block";
    }
}

function SendMail() {
    "use strict";
    var success = "true", SignupError = "", AgeError = "", ContactError = "";
    var fname = document.getElementById("fname").value, lname = document.getElementById("lname").value, age = document.getElementById("age").value, number = document.getElementById("phone").value, email = document.getElementById("email").value;
    
    if (!fname) {
        success = false;
        SignupError += '"First Name" ';
    }
    if (!lname) {
        success = false;
        SignupError += '"Last Name" ';
    }
    if (age) {
        if (isNaN(age)) {
            success = false;
            AgeError = ' "Age" is not a valid number';
        }
    } else {
        success = false;
        SignupError += '"Age" ';
    }
    if (number) {
        if (number.toString().length === 10) {
            if (email) {
                if (email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    if (success) {
                        window.open('mailto:mhenkelman79@gmail.com?subject=In Search of Childcare Provider&body=Hello, my name is ' + fname + " " + lname + ", I am seeking a childcare provider for my " + age + " year old. You can contact me at " + email + " or at " + number + " thanks!");
                    }
                } else {
                    ContactError = "Email is Not in a Valid Format.";
                    success = false;
                }
            } else {
                if (success) {
                    window.open('mailto:mhenkelman79@gmail.com?subject=In Search of Childcare Provider&body=Hello, my name is ' + fname + " " + lname + ", I am seeking a childcare provider for my " + age + " year old. You can contact me at " + number + " thanks!");
                }
            }
        } else {
            ContactError = "Not a Valid Phone Number.";
            success = false;
        }
    } else if (email) {
        if (email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            if (success) {
                window.open('mailto:mhenkelman79@gmail.com?subject=In Search of Childcare Provider&body=Hello, my name is ' + fname + " " + lname + ", I am seeking a childcare provider for my " + age + " year old. You can contact me at " + email + " thanks!");
            }
        } else {
            ContactError = "Email is Not in a Valid Format.";
            success = false;
        }
    } else {
        success = false;
        ContactError += ' Must Fill in Email or Phone Number.';
    }
    if (SignupError) {
        SignupError = "You must fill out the " + SignupError + " field(s).";
    }
    if (!success) {
        document.getElementById("SignupError").innerHTML = SignupError + AgeError + ContactError;
    } else {
        document.getElementById("SignupError").innerHTML = "";
    }
}

/*  ON PAGE LOAD:  */
// Set Activities Tab == 2,
// By default shows 'Learn' Tab
ActivitiesTab("2");

// For Avatars, Calculate Age by Current Date
getDate();

// Implements Moving Backgrounds
var bgPattern = document.getElementById("bg");
window.addEventListener("scroll", function () {
    "use strict";
    bgPattern.style.backgroundPosition = +window.pageYOffset + "px";
});