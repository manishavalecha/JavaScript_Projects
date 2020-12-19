# JavaScript_Projects
#Creating the Chrome Extension that takes an input and display on web #page

Creating Chrome Extensions


Chrome Extension: Small Software are the small programs that customize browsing experience.
They enable users to tailor Chrome functionality and behaviour to individual needs and preferences.
They can be written in HTML,Javascript and CSS

What is it used for?

An Extension must fulfil a single purpose that is narrowly defined and easy to understand.
One Extension can include multiple components and range of functionality as long as it lead to common functionality.

Why is it important?

An Extension file is packed in a .crx package that users can download and install. This means Extensions do not depend on content from the web unlike ordinary web apps.

Step 1: Create a Project.

The first thing we need to create  a project and all the files we need for our extension. 
Let's start by Creating a Directory that we ‘ll call  “ Hello World Extension”  to store all the files we need for our Extension in this folder.

All Chrome Extension needs a manifest file. The Manifest files tell Chrome everything it needs to know to properly load up the Extension in Chrome.
So we’ll create a manifest.json file and put it in our folder we created.
Let's leave the file blank for now.

Next We need an icon for an Extension to make it look pleasing to the eye. It needs 19*19px png file. 

Download the icon from here 

Since Extension works on Chrome So We need an HTML file too to show the page when the user clicks on browser action.
For this We will Create Hello.html file in our “Hello World Extension” folder.

Step 2: Create manifest file

Now that we have our basic structure, we need to add code to our manifest file to describe our plugin to Chrome.

Add the following code to the manifest file.

{
 "name": "Hello Extensions",
 "description" : "Base Level Extension",
 "version": "1.0",
 "manifest_version": 3
"browser_action": {
   "default_popup": "hello.html",
   "default_icon": "hello_extensions.png"
 }
}

Most Extensions can't do much with just the manifest, For this we have declared a popup html file and extension icon in the browser action field.

Add the following code to hello.html

<html>
 <body>
   <h1>Hello Extensions</h1>
 </body>
</html>


This extension displays the hello.html when the Extension is clicked.

The next step is to include commands to execute the browser action, it is not necessary but it is fun.

The final manifest file looks like this:

{
 "name": "Hello Extensions",
 "description" : "Base Level Extension",
 "version": "1.0",
 "manifest_version": 3,
 "browser_action": {
   "default_popup": "hello.html",
   "default_icon": "hello_extensions.png"
 },
 "commands": {
   "_execute_browser_action": {
     "suggested_key": {
       "default": "Ctrl+Shift+F",
       "mac": "MacCtrl+Shift+F"
     },
     "description": "Opens hello.html"
   }
 }
}

Most of the JSON Fields of the manifest file are self explanatory and Lets I will jump to explain the important elements of the manifest file.
We have used the browser_action field in the json file to specify what the default icon is and what html page to be displayed if this default icon is clicked.

Step 3: Run the Extension from your local machine.

The last step is to install the extension on your local machine.
Navigate to chrome://extensions in your browser. 
Or Go to Chrome menu on the top right side of omnibox, hovering over More ztools, and clicking on Extensions.
Click the box next to Developer mode.
Click Load UnPacked Extension and Select Extension folder from your local directory for your Hello World Extension.

Congratulations, Now You can use the pop up based Extension by clicking the Extension icon or by pressing Ctrl+Shift+F on your keyboard to see your Extension run live.

We can also beautify the HTML page by adding Some CSS and add more functionality to that page like displaying the text box to take input and displaying the input on web page


Example:
https://github.com/exponentsoftware/MS_Chrome-extension_Monoceros_Tep_Hyderabad_Part-time_2020_1/tree/manisha/release1

