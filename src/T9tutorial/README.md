# T9 tutorial

It's about emulating T9 prediction. You use a 1 to 9 keypad to enter English words.

# A bit of history

## The T9 tutorial

The T9 tutorial I'm using is this one: https://www.sainsmograf.com/labs/t9-emulator/

It's github repository is this one: https://github.com/arifwn/t9-emulator

## How is the tutorial built?

There is no React. It's JavaScript with some JQuery.

There is a keypad. As you press the buttons, you get the predictions in the field above the keypad.

## How to make it fit into my React playground

The tutorial is going to have its own folder.

It's the folder /src/T9tutorial

The entry point component is in T9TutorialApp.js

It's used in App.js where it's associated to a route.

It will be accessible on /t9tutorial (like http://rankit.emanuelesantanche.com/t9tutorial)

## Creating the keypad

The keypad uses React Material Design components because the entire website uses them.

## Fixing event handler

The event handler that handles button clicks, needed to be fixed because it wasn't working in the
original form that used the event object. I had to pass to the handler the button number explicitly.

## Fetching the dictionary

The T9 predictor needs a dictionary to work.

To fecth the dictionary and pass it to the predictor I had to modify the nginx server configuration for it
to be able to access text files directly. The previous nginx configuration was set to pass all queries to
React and I couldn't fetch a file, the dictionary, with a plain http request. React was preventing it.

## Management of predictions

I had to rewrite the entire management of predictions. What happens when a keypad button is pressed, what to display, how to manage deletions, how to cycle the predictions, how to clear everything and restart typing.

The code in the original tutorial can't be used as such for this management operations.

It was useful for the prediction engine.
