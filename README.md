# Random Password Generator
A random password generator in **JavaScript**

The inspiration for this project came from a [Codepen](https://codepen.io/FlorinPop17/pen/BaBePej) by Florin Pop.

There is also a very good walkthrough/tutorial on how this works by [Brad Traversy](https://www.youtube.com/watch?v=duNmhKgtcsI) on YouTube.

An in-depth explanation into the clipboard functionality can be found [here](https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f).

### What does this do?

You set the length of the password that you want to generate and then toggle the characters you want in the password (Uppercase letters, Lowercase letters, Numbers and Symbols).

When you click the "Generate password" button, a random password using your settings will appear. Clicking on the clipboard icon button will copy the password to your clipboard.

I made some design changes to the original:

1. The password length selector was changed from a number input field to a range slider.
2. When the other settings are de-selected, the text shows with a line-through giving an additional visual aid to show whether or not that particular setting is enabled. Clicking on the text itself will also toggle the setting. 
3. Tab selection was enhanced by changing the HTML markup. The order now reflects a more logical progression i.e. Select the length, then uppercase, lowercase, numbers, symbols, generate password button and then the clipboard button.
4. When the clipboard button has been clicked, a visual confirmation message 'Copied!' appears below the generated password field and slowly fades out.
5. The setttings are stored in localStorage so that they are not lost when you refresh the page.