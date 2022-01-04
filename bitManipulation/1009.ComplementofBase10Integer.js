/**
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
    if (!n) {
        return 1;
    }
    let size = Math.floor(Math.log2(n) + 1);
    let mask = 2 ** size - 1;
    return n ^ mask;
};