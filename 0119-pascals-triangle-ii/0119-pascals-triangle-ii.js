/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // The result array will hold the elements of the rowIndex-th row.
    // The size of the row is rowIndex + 1.
    const result = new Array(rowIndex + 1);

    // The first element of any row (k=0) is always 1, which is C(rowIndex, 0).
    result[0] = 1;

    // We can calculate C(r, k) using C(r, k-1) as:
    // C(r, k) = C(r, k-1) * (r - k + 1) / k
    // where r is rowIndex, and k goes from 1 to rowIndex.
    
    // We use BigInt for intermediate calculations to prevent potential
    // integer overflow since the binomial coefficients can grow large,
    // though for the given constraint (rowIndex <= 33), standard
    // JavaScript numbers (which are 64-bit floats) should be sufficient.
    // However, for robustness, we'll use BigInt internally and convert
    // back to Number at the end, as the problem's expected output is Number[].
    // Note: If the constraints were higher (e.g., rowIndex > 40), BigInt would be essential.

    for (let k = 1; k <= rowIndex; k++) {
        // C(r, k) = C(r, k-1) * (r - k + 1) / k
        
        // C(r, k-1) is result[k-1]
        // r - k + 1 is (rowIndex - k + 1)
        
        // We calculate result[k] = result[k-1] * (rowIndex - k + 1) / k

        // We use BigInt for the calculation part
        let prevCoefficient = BigInt(result[k - 1]);
        let numerator = BigInt(rowIndex - k + 1);
        let denominator = BigInt(k);
        
        // The result of the division is always an integer.
        let currentCoefficient = (prevCoefficient * numerator) / denominator;
        
        // Store the result back as a standard JavaScript Number (as expected).
        result[k] = Number(currentCoefficient);
    }

    return result;
};