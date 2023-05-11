/**
 * @param {number[][]} gems
 * @param {number[]} hits
 * @return {number}
 */
function isValidMove(i, j, grid) {
    if (i < 0 || j < 0) return false;
    else if (i >= grid.length) return false;
    else if (j >= grid.length) return false;
    else return true;
}

function hitting(i, j, grid) {
    /* for (var i = 0; i < grid.length; i++) {
        // grid[i] = new Array(col).fill(0);
        console.log(grid[i]);
    } */
    //console.log("hitting", i, j);
    var color = grid[i][j];
    if (color == 0) return 0;
    grid[i][j] = 0;
    var count = 1;
    if (isValidMove(i - 1, j, grid)) {
        if (grid[i - 1][j] == color) {
            count += hitting(i - 1, j, grid);
        }
    }

    if (isValidMove(i + 1, j, grid)) {
        if (grid[i + 1][j] == color) {
            count += hitting(i + 1, j, grid);
        }
    }

    if (isValidMove(i, j - 1, grid)) {
        if (grid[i][j - 1] == color) {
            count += hitting(i, j - 1, grid);
        }
    }

    if (isValidMove(i, j + 1, grid)) {
        if (grid[i][j + 1] == color) {
            count += hitting(i, j + 1, grid);
        }
    }
    
    return count;
}

function countExplodedGems(gems, hits) {
	// Your code here
    len = gems.length;
    var row = 0;
    var col = 0;
    for (var i = 0; i < len; i++) {
        if (gems[i][0] + 1 > row) 
            row = gems[i][0] + 1;
        if (gems[i][1] + 1 > col)
            col = gems[i][1] + 1;
    }

    //console.log(row, col)

    var grid = new Array(row);
    for (var i = 0; i < row; i++) {
        grid[i] = new Array(col).fill(0);
        //console.log(grid[i]);
    }
    for (var i = 0; i < len; i++) {
        grid[gems[i][0]][gems[i][1]] = gems[i][2];
    }

    //console.log(grid[3][4]);
    var count = 0;
    for (var i = 0; i < hits.length; i++) {
        count += hitting(hits[i][0], hits[i][1], grid);
    }

    return count;
};

console.log(countExplodedGems(
	[[1, 2, 1],[1, 3, 1],[1, 4, 1],[1, 5, 1],[1, 6, 1],[1, 7, 1],[2, 2, 1],[2, 3, 2],[2, 4, 2],[2, 5, 2],[2, 6, 2],[2, 7, 1],[3, 2, 1],[3, 3, 2],[3, 4, 1],[3, 5, 1],[3, 6, 2],[3, 7, 1],[4, 2, 1],[4, 3, 2],[4, 4, 1],[4, 5, 1],[4, 6, 2],[4, 7, 1],[5, 2, 1],[5, 3, 2],[5, 4, 2],[5, 5, 2],[5, 6, 2],[5, 7, 1],[6, 2, 1],[6, 3, 1],[6, 4, 1],[6, 5, 1],[6, 6, 1],[6, 7, 1]],
    [[3, 4]])
);

console.log(countExplodedGems(
    [[1, 3, 1],[3, 7, 1],[1, 2, 1],[2, 5, 2],[4, 2, 1],[5, 3, 2],[3, 5, 1],[1, 5, 1],[3, 2, 1],[5, 7, 1],[6, 3, 1],[1, 4, 1],[6, 5, 1],[6, 7, 1],[5, 6, 2],[3, 3, 2],[4, 5, 1],[3, 6, 2],[1, 6, 1],[1, 7, 1],[4, 6, 2],[2, 3, 2],[2, 7, 1],[4, 7, 1],[5, 4, 2],[4, 4, 1],[2, 4, 2],[4, 3, 2],[6, 4, 1],[6, 2, 1],[5, 2, 1],[2, 6, 2],[5, 5, 2],[2, 2, 1],[3, 4, 1],[6, 6, 1]],
    [[3, 4], [2, 4], [4, 4], [0, 0]])
);
