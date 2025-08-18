var longestValidParentheses = function(s) {
    let maxLength = 0;
    let open = 0, close = 0;

    // Left-to-right pass
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else {
            close++;
        }

        if (open === close) {
            maxLength = Math.max(maxLength, 2 * open);
        } else if (close > open) {
            open = 0;
            close = 0;
        }
    }

    open = 0;
    close = 0;
    
    // Right-to-left pass
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            open++;
        } else {
            close++;
        }

        if (open === close) {
            maxLength = Math.max(maxLength, 2 * open);
        } else if (open > close) {
            open = 0;
            close = 0;
        }
    }

    return maxLength;
};