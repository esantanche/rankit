# A bit of history

# The T9 tutorial

The T9 tutorial I'm using is this one: https://www.sainsmograf.com/labs/t9-emulator/

It's github repository is this one: https://github.com/arifwn/t9-emulator

# How is the tutorial built?

There is no React. It's JavaScript with some JQuery.

There is a keyboard. As you press the buttons, you get the predictions in the field above the keyboard.

# How to make it fit into my React playground

The tutorial is going to have its own folder.

It's the folder /src/T9tutorial

The entry point component is in T9TutorialApp.js

It's used in App.js where it's associated to a route.

It will be accessible on /t9tutorial (like http://rankit.emanuelesantanche.com/t9tutorial)

# Creating the keypad

FIXME

# Fetching the dictionary

The T9 predictor needs a dictionary to work.

To fecth the dictionary and pass it to the predictor I had to modify the nginx server configuration for it
to be able to access text files directly. The previous nginx configuration was set to pass all queries to
React and I couldn't fetch a file, the dictionary, with a plain http request.


