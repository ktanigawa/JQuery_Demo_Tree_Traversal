#Jquery demo for Tree Traversal

##Initiating Project Application

1. Fork and clone this repo
2. Navigate to this project's root directory
3. `Run npm install`
4. `Run bower install`


##Run the presentation in the browser:

1. Open new tab to your terminal and initiate `gulp`
2. In the other tab open up your sublime text (`subl .`) in the main directory of the Project
3. Kill any servers on `localhost:8080`
4. Open project in "`localhost:8080`" in the Chrome browser.
5. Open the javascript console in Chrome and be sure to be at the highest resolution possible ("No less than 1360px width of screen")

-Follow along in the app.js file in the public/js directory

##Tasks 

###Learn to understand Tree Traversal and efffectivly use its functions

- find()
- siblings() 
- children() 
- parent() 
- parents() 
- closest() 

###Step 1: find();
The .find() method allows us to find all the descendants of specified element in the DOM tree.


1. Use the Jquery method `find()` to look for all the children of Div class `row`.
2. Then set up a click event to highlight all the children in the Div class `row`.

###Step 2: siblings();
The .siblings() method allows us to find all the siblings of a specified element in the DOM tree.

1. Use the JQuery method `siblings()` to find all of the sublings of Div class `nav_home`.
2. Then set up a click event to change the background color of each of the siblings to red.

###Step 3: children();
The .children() method allows us to find the children of a specified element in the DOM tree.
This selector is very similar to `find()`, however the children selector only goes down 1 section of a tree.

1. Use the JQuery method `children()` to find all the children of parent  `desktop_logo`.
2. Then set up a click event to hide the child elements using the CSS property visibility.

###Step 4: Parent();
The .parent() method traverses to the immediate parent of a specified element in the DOM tree

1. Use the JQuery method `parent()` to find the immediate parent of the Div class `hero`.
2. Then set up a click event to console.log the result of the function.

###Step 5: parents();
The .parents() method allows us to search through the ancestors of a specified element in the DOM tree.
Again another very similar function this time for parent. You can think of the parent() method as your `immediate parent`(ie.your mom or your dad) and the `parents()` method as a representation of your `ancestors`(ie. your grandparents and their parents) all the way to the begining.

1. Use the JQuery method `parents()` to find all the `ancestors` of Span class `nameof`.
2. Then set up a click event to console.log the result of the function.
Note: the syntax of the method states that it will return the results in reversed order despite the fact that it searches from the bottom up.

###Step 6: closest();
The .closest() method searches through the element and their ancestors in the DOM tree for a specified parameter (i.e. objects, elements, and strings, etc) and then stops when it finds the `first` matching result.
This method very similar to `parent()` in the sense that it only produces one result. However the closest() method can traverse throughout the tree to find a result instead of taking the first imediate parent that the `parent()` method does.

1. Use the JQuery method `closest()` to find the first `div` of the ul class `main_nav`.
2. Then set up a click event to console.log the result of the function.
