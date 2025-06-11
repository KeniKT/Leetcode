/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanMap = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

    for (let i = 0; i < romanMap.length; i++) {
        const { value, symbol } = romanMap[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
};