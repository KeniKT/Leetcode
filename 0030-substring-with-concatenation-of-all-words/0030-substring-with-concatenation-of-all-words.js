var findSubstring = function(s, words) {
    if (!s || words.length === 0) {
        return [];
    }

    const wordLen = words[0].length;
    const numWords = words.length;
    const totalLen = wordLen * numWords;
    const result = [];

    if (s.length < totalLen) {
        return [];
    }

    const wordCount = new Map();
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let count = 0;
        const currentWindowCount = new Map();

        for (let right = i; right <= s.length - wordLen; right += wordLen) {
            const currentWord = s.substring(right, right + wordLen);

            if (wordCount.has(currentWord)) {
                currentWindowCount.set(currentWord, (currentWindowCount.get(currentWord) || 0) + 1);
                count++;

                while (currentWindowCount.get(currentWord) > wordCount.get(currentWord)) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentWindowCount.set(leftWord, currentWindowCount.get(leftWord) - 1);
                    count--;
                    left += wordLen;
                }

                if (count === numWords) {
                    result.push(left);

                    const leftWord = s.substring(left, left + wordLen);
                    currentWindowCount.set(leftWord, currentWindowCount.get(leftWord) - 1);
                    count--;
                    left += wordLen;
                }
            } else {
                currentWindowCount.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return result;
};