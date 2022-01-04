/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    // let newNum = num.toString(2).split('').map(x => x == '1' ? '0' : '1').join('');
    // return parseInt(newNum, 2);

    if (!num) {
        return 1;
    }
    let size = Math.floor(Math.log2(num) + 1);
    let mask = 2 ** size - 1;
    return num ^ mask;
};