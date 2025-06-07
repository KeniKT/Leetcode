/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;

    let totalGas = 0;
    let totalCost = 0;
    let currentTank = 0;
    let startingStation = 0;

    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];

        // Calculate the net gas difference for the current station
        let diff = gas[i] - cost[i];
        currentTank += diff;

        // If currentTank drops below zero, it means we cannot reach station i+1
        // from our current startingStation. So, we reset and try the next station
        // as a potential starting point.
        if (currentTank < 0) {
            currentTank = 0; // Reset tank as if starting fresh
            startingStation = i + 1; // Try the next station as the starting point
        }
    }

    // If total gas is less than total cost, it's impossible to complete the circuit.
    // Otherwise, the startingStation we found is the unique solution.
    if (totalGas < totalCost) {
        return -1;
    } else {
        return startingStation;
    }
};