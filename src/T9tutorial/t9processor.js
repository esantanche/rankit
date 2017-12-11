/**
 * This file is from https://github.com/arifwn/t9-emulator.
 * It's the file where there are the fucntions used to perform the T9 prediction.
 */

var t9dictionary = '';
var t9dictionaryTree = {};
var t9words = [];
var t9keyMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

/**
 * The dictionary used to make the predictions is loaded and transformed
 * into a tree following the Trie algorithm (https://github.com/jrolfs/javascript-trie-predict/blob/master/predict.js)
 * @param {*} dictionary 
 */
export function t9init (dictionary) {

    t9dictionary = dictionary;
    t9words = dictionary.split(/\s+/g);

    var tree = {};

    t9words.forEach(function (word) {
        var letters = word.split('');
        var leaf = tree;

        for (var i = 0; i < letters.length; i++) {
            var letter = letters[i].toLowerCase();
            var existing = leaf[letter];
            var last = (i === letters.length - 1);

            // If child leaf doesn't exist, create it
            if (typeof(existing) === 'undefined') {
                // If we're at the end of the word, mark with number, don't create a leaf
                leaf = leaf[letter] = last ? 1 : {};

            // If final leaf exists already
            } else if (typeof(existing) === 'number') {
                // Increment end mark number, to account for duplicates
                if (last) {
                    leaf[letter]++;

                // Otherwise, if we need to continue, create leaf object with '$' marker
                } else {
                    leaf = leaf[letter] = { $: existing };
                }

            // If we're at the end of the word and at a leaf object with an
            // end '$' marker, increment the marker to account for duplicates
            } else if (typeof(existing) === 'object' && last) {
                if (existing.hasOwnProperty('$')) {
                    leaf[letter].$++;
                } else {
                    leaf[letter] = existing;
                    leaf[letter].$ = 1;
                }

            // Just keep going
            } else {
                leaf = leaf[letter];
            }
        }

    });
    
    t9dictionaryTree = tree;

};

/**
 * This is the function that is called from the function recalculate_new_state in Keypad.js to get the predictions
 * @param {*} numericInput String of typed numbers
 */
export function t9predict(numericInput) {
    var input = new String(numericInput);
    var results = t9findWords(numericInput, t9dictionaryTree, true);

    return results;
};

/**
 * Function used by t9predict
 * @param {*} sequence String of typed numbers
 * @param {*} tree The dictionary in tree format
 * @param {*} exact 
 * @param {*} words 
 * @param {*} currentWord 
 * @param {*} depth 
 */
function t9findWords(sequence, tree, exact, words, currentWord, depth) {

    var current = tree;
    
    sequence = sequence.toString();
    words = words || [];
    currentWord = currentWord || '';
    depth = depth || 0;

    // Check each leaf on this level
    for (var leaf in current) {
        var word = currentWord;
        var value = current[leaf];
        var key;

        // If the leaf key is '$' handle things one level off since we
        // ignore the '$' marker when digging into the tree
        if (leaf === '$') {
            key = sequence.charAt(depth - 1);
            if (depth >= sequence.length) {
                words.push(word);
            }
        } else {
            key = sequence.charAt(depth);
            word += leaf;
            if (depth >= (sequence.length - 1) && typeof(value) === 'number' && key && (t9keyMap[key].indexOf(leaf) > -1)) {
                words.push(word);
            }
        }

        // If the leaf's value maps to our key or we're still tracing
        // the prefix to the end of the tree (`exact` is falsy), then
        // "we must go deeper"...

        if ((key && t9keyMap.hasOwnProperty(key) && t9keyMap[key].indexOf(leaf) > -1) || (!key && !exact)) {
            t9findWords(sequence, value, exact, words, word, depth + 1);
        }
    }

    // Yeah, not as cool when not returning the recursive function call
    // returns, but we gotta just rely on JS references since we may be
    // going more than one way down the tree and we don't want to be
    // breaking the leaf loop
    return words;
};
