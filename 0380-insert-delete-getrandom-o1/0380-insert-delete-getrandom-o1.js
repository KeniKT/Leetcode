var RandomizedSet = function() {
    this.nums = [];
    this.valToIndex = new Map(); 
};

/** * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valToIndex.has(val)) {
        return false;
    }

    this.nums.push(val);
    this.valToIndex.set(val, this.nums.length - 1);
    return true;
};

/** * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.valToIndex.has(val)) {
        return false;
    }

    const indexToRemove = this.valToIndex.get(val);
    const lastElement = this.nums[this.nums.length - 1];

    this.nums[indexToRemove] = lastElement;
    this.valToIndex.set(lastElement, indexToRemove);

    this.nums.pop();
    this.valToIndex.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
};