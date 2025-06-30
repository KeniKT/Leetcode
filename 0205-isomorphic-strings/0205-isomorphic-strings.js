/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sToT = {}; // Maps characters from s to characters in t
    const tToS = {}; // Maps characters from t to characters in s (to ensure reverse uniqueness)

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check mapping from s to t
        if (sToT.hasOwnProperty(charS)) {
            if (sToT[charS] !== charT) {
                return false; // s[i] already mapped to a different character
            }
        } else {
            sToT[charS] = charT;
        }

        // Check mapping from t to s (for reverse uniqueness)
        if (tToS.hasOwnProperty(charT)) {
            if (tToS[charT] !== charS) {
                return false; // t[i] already mapped from a different character in s
            }
        } else {
            tToS[charT] = charS;
        }
    }

    return true;
};