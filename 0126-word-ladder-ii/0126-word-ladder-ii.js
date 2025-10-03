/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    let parents = new Map();  // word -> [previous words]
    let found = false;
    let queue = [beginWord];
    let visited = new Set([beginWord]);

    while (queue.length > 0 && !found) {
        let nextLevel = new Set();
        for (let word of queue) {
            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                    let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                    if (wordSet.has(newWord) && newWord !== word) {
                        if (!visited.has(newWord)) {
                            if (!parents.has(newWord)) parents.set(newWord, []);
                            parents.get(newWord).push(word);

                            if (newWord === endWord) found = true;
                            nextLevel.add(newWord);
                        }
                    }
                }
            }
        }
        for (let w of nextLevel) visited.add(w);
        queue = Array.from(nextLevel);
    }

    let results = [];
    if (!found) return results;

    function backtrack(word, path) {
        if (word === beginWord) {
            results.push([beginWord, ...path.slice().reverse()]);
            return;
        }
        if (!parents.has(word)) return;
        for (let p of parents.get(word)) {
            path.push(word);
            backtrack(p, path);
            path.pop();
        }
    }

    backtrack(endWord, []);
    return results;
};
