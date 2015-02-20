$(function(){
//Do all work here!!

// """""""""$("").css({});""""""""" is the css selector prperty for change through JQuery

// 1. Use the Jquery method `find()` to look for all the specified li children of Div class `row`.
// 2. Then set up a click event to highlight all the children in the Div class `row`.
  var find = $("div.find");
  var row = $("div.row");
  find.click(function (event) {

  });
  

// 1. Use the JQuery method `siblings()` to find all of the siblings of li class `nav_home`.
// 2. Then set up a click event to change the background color of each of the siblings to red.
  var siblings = $("div.siblings");
  var nav_home = $("li.nav_home");
  siblings.click(function (event) {

  });
 

// 1. Use the JQuery method `children()` to find all the children of parent h1 `desktop_logo`.
// 2. Then set up a click event to hide the child elements using the CSS property visibility.
  var children = $("div.children");
  var desktop_logo = $("h1.desktop_logo");
  children.click(function (event) {

  });
  

// 1. Use the JQuery method `parent()` to find the immediate parent of the Div class `hero`.
// 2. Then set up a click event to console.log the result of the function.
  var parent = $("div.parent");
  var hero = $("div.hero");
  parent.click(function (event) {

  });

// 1. Use the JQuery method `parents()` to find all the `ancestors` of Span class `nameof`.
// 2. Then set up a click event to console.log the result of the function.
// Note: the syntax of the method states that it will return the results in reversed order despite the fact that it searches from the bottom up.
  var parents = $("div.parents");
  var nameof = $("span.nameof");
  parents.click(function (event) {

  });

// 1. Use the JQuery method `closest()` to find the first `div` of the ul class `main_nav`.
// 2. Then set up a click event to console.log the result of the function.
  var closest = $("div.closest");
  var main_nav = $("ul.main_nav");
  closest.click(function (event) {

  });

});
