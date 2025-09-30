/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 * this.val = val === undefined ? 0 : val;
 * this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    // Base case: If the input node is null (empty graph), return null.
    if (!node) {
        return null;
    }

    // A Map to store the mapping from original nodes to their cloned nodes.
    // This prevents infinite recursion on cycles and ensures we only clone each node once.
    const visited = new Map();

    /**
     * Depth-First Search (DFS) function to clone the graph.
     * @param {_Node} original_node The node in the original graph to clone.
     * @returns {_Node} The cloned counterpart of the original_node.
     */
    const dfs = (original_node) => {
        // If the node has already been cloned, return its clone from the map.
        if (visited.has(original_node)) {
            return visited.get(original_node);
        }

        // Create the clone for the current original node.
        // We initialize neighbors as an empty array; we'll populate it later.
        const clone_node = new _Node(original_node.val);

        // Store the mapping before processing neighbors.
        // This is crucial for handling cycles: if we encounter original_node
        // again during a neighbor's DFS, we return clone_node, which is already in the map.
        visited.set(original_node, clone_node);

        // Recursively clone the neighbors and set up the neighbors list for the clone.
        for (const neighbor of original_node.neighbors) {
            // The result of dfs(neighbor) is the clone of the neighbor.
            clone_node.neighbors.push(dfs(neighbor));
        }

        // Return the fully constructed clone.
        return clone_node;
    };

    // Start the cloning process from the given initial node.
    return dfs(node);
};