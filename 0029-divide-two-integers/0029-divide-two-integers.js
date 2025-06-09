/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_INT = 2147483647; // 2^31 - 1
    const MIN_INT = -2147483648; // -2^31

    // Handle edge case: dividend = -2^31, divisor = -1
    // The result should be 2^31 - 1 (MAX_INT) as 2^31 overflows a 32-bit signed int
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }

    // Determine the sign of the result
    // If true, the result is negative; otherwise, it's positive
    const isNegative = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);

    // Convert both dividend and divisor to negative numbers
    // This handles the MIN_INT (-2^31) case correctly
    // because its positive counterpart (2^31) cannot be represented.
    const absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);

    let currentDividend = absDividend;
    let currentDivisor = absDivisor;
    let quotient = 0;

    // Loop as long as the currentDividend is greater than or equal to the currentDivisor
    // We are essentially doing repeated subtraction using bit shifts to speed it up.
    while (currentDividend >= currentDivisor) {
        let tempDivisor = currentDivisor;
        let multiple = 1;

        // Find the largest multiple of divisor that is less than or equal to currentDividend
        // We use bit shifting (multiplying by powers of 2)
        // tempDivisor << 1 must be checked to avoid overflow for large numbers
        // We also need to make sure tempDivisor is not so large that tempDivisor << 1 overflows
        // A common trick to check for overflow for positive numbers when shifting left is:
        // (tempDivisor <= (MAX_INT >> 1)) and (currentDividend - (tempDivisor << 1) >= 0)
        // Or, more simply: ensure tempDivisor is not too large and tempDivisor * 2 still fits
        // (tempDivisor << 1) > tempDivisor is also a way to check if it's overflowing (become negative or zero)
        // Since we are using Math.abs and positive numbers for the main loop, we need to be careful with MAX_INT.

        // A robust way to prevent `tempDivisor << 1` from overflowing or becoming negative:
        // Check if `tempDivisor` is already greater than `MAX_INT / 2`.
        // If `tempDivisor` is `MAX_INT / 2 + 1`, then `tempDivisor << 1` would be `MAX_INT + 2`, which wraps around.
        // Or simply `tempDivisor > MAX_INT - tempDivisor` would also indicate an overflow risk.

        // A simpler approach for the inner loop, handling values carefully:
        // We want to find largest `(currentDivisor * 2^k)` that is `less than or equal to currentDividend`.
        // We can do this by checking `currentDividend - (tempDivisor << 1) >= 0`
        // However, `(tempDivisor << 1)` might overflow.

        // Let's go back to the standard way of handling this with positive numbers:
        // The condition `currentDividend >= (tempDivisor << 1)` is crucial.
        // It's also important to check if `tempDivisor` itself is already too large for `tempDivisor << 1` to be valid.
        // This means `tempDivisor` should not exceed `MAX_INT / 2`.
        // In JavaScript, numbers are 64-bit floats, so bitwise operations handle up to 32 bits and then convert back.
        // We need to be careful with the conceptual limits.

        // The safe way to do `(tempDivisor * 2)` without overflow concerns (if numbers are small enough):
        // `tempDivisor + tempDivisor`
        // But for powers of 2, bit shifts are efficient.
        // The condition `(tempDivisor << 1) > 0` is an indicator of overflow if `tempDivisor` itself is positive.
        // Also `currentDividend - (tempDivisor << 1)` might become negative.

        while (currentDividend >= (tempDivisor + tempDivisor) && (tempDivisor > 0 && (tempDivisor << 1) > tempDivisor)) {
             // The second part `(tempDivisor > 0 && (tempDivisor << 1) > tempDivisor)` checks for positive overflow.
             // If tempDivisor is so large that `tempDivisor << 1` becomes negative or zero (due to 32-bit wrap-around),
             // then this condition will prevent further shifting.
            tempDivisor <<= 1;
            multiple <<= 1;
        }

        currentDividend -= tempDivisor;
        quotient += multiple;
    }

    // Apply the sign
    if (isNegative) {
        quotient = -quotient;
    }

    // Clamp the result to the 32-bit signed integer range
    if (quotient > MAX_INT) {
        return MAX_INT;
    }
    if (quotient < MIN_INT) {
        return MIN_INT;
    }

    return quotient;
};