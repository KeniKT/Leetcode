var recoverTree = function(root) {
    let first = null, second = null, prev = null;
    let current = root;
    
    while (current) {
        if (!current.left) {
            // Process the current node (it's in the correct inorder sequence)
            if (prev && prev.val > current.val) {
                if (!first) first = prev;
                second = current;
            }
            prev = current;
            current = current.right;
        } else {
            // Find the inorder predecessor
            let predecessor = current.left;
            while (predecessor.right && predecessor.right !== current) {
                predecessor = predecessor.right;
            }
            
            if (!predecessor.right) {
                // Create the thread (link to current)
                predecessor.right = current;
                current = current.left;
            } else {
                // Thread already exists, left subtree is visited
                // Process current node
                if (prev && prev.val > current.val) {
                    if (!first) first = prev;
                    second = current;
                }
                prev = current;
                
                // Remove the thread and move to the right child
                predecessor.right = null;
                current = current.right;
            }
        }
    }
    
    // Swap the values
    if (first && second) {
        [first.val, second.val] = [second.val, first.val];
    }
};