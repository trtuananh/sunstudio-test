/**
 * @param {number} n
 * @return {number}
 */
function pickUpSticks(n) {
	// Your code here
    var count = 0;
    if (n == 1) 
        return 1;
    else if (n == 2) {
        return 2;
    }
    else if (n == 3) {
        return 4;
    }
    else {
        return pickUpSticks(n - 1) + pickUpSticks(n - 2) + pickUpSticks(n - 3)
    }
}

console.log(pickUpSticks(45))
