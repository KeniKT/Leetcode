/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    const negative = (dividend < 0) !== (divisor < 0);

    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);

    let quotient = 0;
    
    while (absDividend >= absDivisor) {
        let tempDivisor = absDivisor;
        let multiple = 1;
        
        while ((tempDivisor << 1) <= absDividend && (tempDivisor << 1) > 0) {
            tempDivisor <<= 1;
            multiple <<= 1;
        }
        
        absDividend -= tempDivisor;
        quotient += multiple;
    }
    
    if (negative) {
        quotient = -quotient;
    }

    if (quotient > INT_MAX) {
        return INT_MAX;
    }
    if (quotient < INT_MIN) {
        return INT_MIN;
    }
            
    return quotient;
};