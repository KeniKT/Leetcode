function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    const queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 0) {
        let t1 = queue.shift();
        let t2 = queue.shift();

        if (!t1 && !t2) {
            continue;
        }
        if (!t1 || !t2 || t1.val !== t2.val) {
            return false;
        }

        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }

    return true;
};