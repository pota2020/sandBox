// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). https://leetcode.com/problems/binary-tree-level-order-traversal/

// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

// const levelOrder = (root) => {
//     if (!root) return [];
//     return [
//         ...(function* rec(arr) {
//             if (arr.length === 0) return;
//             yield arr.map(x => x.val);
//             yield* rec([...arr.flatMap(x => [x.left, x.right].filter(x => x))]);
//         }([root]))
//     ];
// };

const levelOrder = (root)=>(function rec(arr) {
        return arr.length === 0 ? [] : [arr.map(x => x.val), ...(rec(arr.flatMap(x => [x.left, x.right].filter(x => x))))];
    })(root ? [root] : [] );
