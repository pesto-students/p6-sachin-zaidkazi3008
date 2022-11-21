
// Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.
//Example: Given the following
//matrix: [ [ 1, 2, 3 ],
//          [ 4, 5, 6 ],
//          [ 7, 8, 9 ] ]
//You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]



const spiralMatrix = (matrix) => {
    let left = top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    const newArr = [];
    
    while(left <= right && top <= bottom) {
        for(let i = left; i <= right; i++) {
            newArr.push(matrix[top][i]);
        }
        top++;
        for(let i = top; i <= bottom; i++) {
            newArr.push(matrix[i][right]);
        }
        right--;
        if(top <= bottom) {
            for(let i = right; i >= left ; i--) {
                newArr.push(matrix[bottom][i]);
            }

            bottom--;
        }
        if(left <= right) {
            for(let i = bottom; i >= top ; i--) {
                newArr.push(matrix[i][left]);
            }
            left++;
        }
    }
    return newArr;
};
const arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(spiralMatrix(arr));