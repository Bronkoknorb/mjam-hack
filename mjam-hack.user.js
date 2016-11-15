// ==UserScript==
// @name        Mjam Mittagsmenü Hack
// @namespace   https://github.com/Bronkoknorb/mjam-hack
// @description Make the Mittagsmenü on mjam.net visible
// @include     http://www.mjam.net/*
// @include     http://mjam.net/*
// @include     https://www.mjam.net/*
// @include     https://mjam.net/*
// @version     3
// @grant       GM_addStyle
// @require http://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js
// ==/UserScript==

// we install a timer task to repeatedly unhide unavailable options from the menu
var timer = setInterval(myTimer, 1000);
function myTimer() {
    // unhide and display italic instead
    $("#menu_category_list .categories__chooser li.unavailable").css('display', 'block').css('font-style', 'italic');
    $("#menu_list .section.unavailable").removeClass('unavailable').css('font-style', 'italic');
}
