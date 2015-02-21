#Jquery demo for Tree Traversal

##Initiating Project Specs:

1. Fork and clone this repo
2. Navigate to this project's root directory in your command terminal.
3. **`Run npm install`**
4. **`Run bower install`**


##Run the project in the browser:

1. Open a new tab to your terminal and initiate **`gulp`**
2. In the other tab open up your sublime text (**`subl .`**) in the main directory of the Project
3. Open project in "**`localhost:3000`**" in the Chrome browser.
4. Open the javascript console in Chrome and be sure to be at the highest resolution possible ("No less than 1360px width of screen")

-Follow along and do all work in the app.js file in the public/js directory for live coding

##Tasks 

###Learn to understand Tree Traversal and effectivly use its functions

- find()
- siblings() 
- children() 
- parent() 
- parents() 
- closest() 

##What is a tree?
###The Dom tree 

The DOM tree is a representation of a complex structure such as a html page.
  It is named a "tree structure" because of its visual likeness to that of a actual tree. Even though the chart is generally upside down compared to an actual tree, with the "root" at the top and the "leaves" at the bottom. The tree's leaves in our case are your html tags and any objects stored in them. The specific term for these tags are **`nodes`**. These nodes are your **div, h, p, a tags etc.** The tree is very useful to us. Especially when working with html pages. It is very easy to get lost in your html page if you dont know the exact location of your tags at a given moment. It also makes styling css almost imposible (at least for me).
  In JQuery there's a surplus amount of functions to traverse throughout the tree as it is represented and gone through linearly.(Up and Down)

  ![alt tag](https://github.com/yukio808/JQuery_Demo_Tree_Traversal/blob/master/public/images/dom_tree%20(1).gif)

  **For more info**: "en.wikipedia.org/wiki/Tree_traversal"

###Step 1: find();
The .find() method allows us to find all the **`descendants`** of specified element in the DOM tree.
Simply add a extra class called **`highlife`** to the specified target using the addClass method at the end of the `find()` method. 
An Example will be shown in the live coding on 2/23/15.
Everyone else good luck

1. Use the Jquery method **`find()`** to look for all the **`li`** children of Div class **`row`**.
2. Then finish the pre-coded click event to change background color to green on all the **`**li**`** children in the Div class **`**row**`**.

###Step 2: siblings();
The .siblings() method allows us to find all the **`**siblings**`** of a specified element in the DOM tree.
Simply add a extra class called **`gravire`** to the specified target using the addClass method at the end of the `find()` method. 
An Example will be shown in the live coding on 2/23/15.
Everyone else good luck

1. Use the JQuery method **`siblings()`** to find all of the siblings of **`li.fall`** .
2. Then finish the pre-coded click event to change the background color of each of the siblings to red.

###Step 3: children();
The .children() method allows us to find the children of a specified element in the DOM tree.
This selector is very similar to **`**find()**`**, however the children selector only goes down 1 section of a tree.
Simply add a extra class called **`kowloon`** to the specified target using the addClass method at the end of the `find()` method. 
An Example will be shown in the live coding on 2/23/15.
Everyone else good luck

1. Use the JQuery method **`children()`** to find all the children of parent of h1 **`desktop_logo`**.
2. Then finish the pre-coded click event to hide the child elements using the CSS property visibility.

###Step 4: Parent();
The .parent() method traverses to the immediate parent of a specified element in the DOM tree

1. Use the JQuery method **`parent()`** to find the immediate parent of the Div class **`hero`**.
2. Then finish the pre-coded click event to console.log the result of the function.

###Step 5: parents();
The .parents() method allows us to search through the ancestors of a specified element in the DOM tree.
Again another very similar function this time for parent. You can think of the parent() method as your **`immediate parent`**(ie.your mom or your dad) and the **`parents()`** method as a representation of your **`ancestors`**(ie. your grandparents and their parents) all the way to the begining.

1. Use the JQuery method **`parents()`** to find all the **`ancestors`** of Span class **`nameof`**.
2. Then finish the pre-coded click event to console.log the result of the function.
Note: the syntax of the method states that it will return the results in reversed order despite the fact that it searches from the bottom up.

###Step 6: closest();
The .closest() method searches through the element and their ancestors in the DOM tree for a specified parameter (i.e. objects, elements, and strings, etc) and then stops when it finds the **`first`** matching result.
This method very similar to **`parent()`** in the sense that it only produces one result. However the closest() method can traverse throughout the tree to find a result instead of taking the first imediate parent that the **`parent()`** method does.

1. Use the JQuery method **`closest()`** to find the first **`div`** of the ul class **`main_nav`**.
2. Then finish the pre-coded click event to console.log the result of the function.