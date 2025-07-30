/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const components = path.split('/').filter(c => c !== '');

    for (const component of components) {
        if (component === '.') {
            continue;
        } else if (component === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(component);
        }
    }

    if (stack.length === 0) {
        return "/";
    } else {
        return "/" + stack.join('/');
    }
};