1. create a form element
2. create a input element with an id 
3. create a lable for that input. The lable has a 'for' attribute, which should be the same value as the inputs id. 
4. create a button element with type='submit' 
5. give the form element an id 
6. get the form by its id in your main.js
7. attach an event listner to the form - addEventListner takes two arguments - the event to listen for in a string ('submit') and a callbackfunction.
8. The callback function should take the 'event' object as a parameter
9. call event.preventDefault in the body of the callback function. 