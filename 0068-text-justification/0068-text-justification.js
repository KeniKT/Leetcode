/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let currentLineWords = [];
    let currentWordsLength = 0; // Sum of lengths of words in currentLineWords

    // Helper function to justify a single line
    function justifyLine(lineWords, sumOfWordsLength, isLastLine) {
        const numWords = lineWords.length;
        
        // Case 1: Last line or a line with a single word
        if (isLastLine || numWords === 1) {
            // For single word or last line, join with single space and pad right
            const joinedWords = lineWords.join(' ');
            // The length of joinedWords should always be <= maxWidth due to the
            // initial line-packing logic.
            return joinedWords + ' '.repeat(maxWidth - joinedWords.length);
        }

        // Case 2: Regular full justification (multiple words, not last line)
        const numGaps = numWords - 1; // Number of spaces between words
        // Total spaces needed to fill maxWidth
        const totalSpacesToPad = maxWidth - sumOfWordsLength; 
        
        const baseSpacesPerGap = Math.floor(totalSpacesToPad / numGaps);
        let extraSpaces = totalSpacesToPad % numGaps;

        let justifiedLine = lineWords[0];
        for (let i = 0; i < numGaps; i++) {
            let spacesToAdd = baseSpacesPerGap;
            if (extraSpaces > 0) {
                spacesToAdd++;
                extraSpaces--;
            }
            justifiedLine += ' '.repeat(spacesToAdd) + lineWords[i + 1];
        }
        return justifiedLine;
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // Calculate the total length if the current word is added to the line,
        // including one space for separation if there are existing words.
        let potentialLineLengthWithMinSpaces;

        if (currentLineWords.length === 0) {
            // If it's the first word on the line, its length is the total length
            potentialLineLengthWithMinSpaces = word.length;
        } else {
            // If there are existing words, add their combined length, plus one space
            // for each existing word (currentLineWords.length) AND the new word's length.
            // Or simpler: currentWordsLength + currentLineWords.length (for existing spaces) + word.length + 1 (for new space)
            // No, the total length if we add 'word':
            // (currentWordsLength + currentLineWords.length) represents length of words + spaces for current words.
            // Then add word.length + 1 (for the space before the new word)
            potentialLineLengthWithMinSpaces = currentWordsLength + currentLineWords.length + word.length;
        }


        if (potentialLineLengthWithMinSpaces <= maxWidth) {
            // Word fits on the current line
            currentLineWords.push(word);
            currentWordsLength += word.length;
        } else {
            // Word does not fit, justify the current line and start a new one
            result.push(justifyLine(currentLineWords, currentWordsLength, false));
            
            // Start a new line with the current word
            currentLineWords = [word];
            currentWordsLength = word.length;
        }
    }

    // After the loop, handle the very last line of words
    result.push(justifyLine(currentLineWords, currentWordsLength, true));

    return result;
};