var findAllPeople = function(n, meetings, firstPerson) {
    const parent = Array.from({ length: n }, (_, i) => i);
    
    const find = (i) => {
        if (parent[i] === i) return i;
        return parent[i] = find(parent[i]);
    };
    
    const union = (i, j) => {
        const rootI = find(i);
        const rootJ = find(j);
        if (rootI !== rootJ) {
            parent[rootI] = rootJ;
        }
    };
    
    const connected = (i, j) => find(i) === find(j);
    
    // Initial secret sharing at time 0
    union(0, firstPerson);
    
    // Sort meetings by time
    meetings.sort((a, b) => a[2] - b[2]);
    
    let i = 0;
    while (i < meetings.length) {
        let j = i;
        const currentTime = meetings[i][2];
        const pool = new Set();
        
        // Group all meetings happening at the same time
        while (j < meetings.length && meetings[j][2] === currentTime) {
            union(meetings[j][0], meetings[j][1]);
            pool.add(meetings[j][0]);
            pool.add(meetings[j][1]);
            j++;
        }
        
        // Reset people who didn't actually get the secret in this time block
        for (let person of pool) {
            if (!connected(person, 0)) {
                parent[person] = person;
            }
        }
        i = j;
    }
    
    const result = [];
    for (let k = 0; k < n; k++) {
        if (connected(k, 0)) result.push(k);
    }
    return result;
};