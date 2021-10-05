const fact = (n) => {
    let k = 1;
    for (let i = 1; i <= n; i++)
        k *= i;
    return k;
}
const permutation = (n, r) => {
    return fact(n) / fact(n - r);
}
const combination = (n, r) => {
    return fact(n) / (fact(n - r) * fact(r));
}
const multiCombination = (n, r) => {
    return combination(n + r - 1, r);
}
const multiPermutation = (n, r) => {
    return n ** r;
}
module.exports = {
    permutation: permutation,
    combination: combination,
    multiPermutation: multiPermutation,
    multiCombination: multiCombination,
};