function remainder(n, m) {
    if (n === 0 || m === 0) {
        if (n === 0 && m !== 0) {
            return 0;
        }
        return NaN;
    }

    const larger = Math.abs(n) > Math.abs(m) ? n : m;
    const smaller = Math.abs(n) > Math.abs(m) ? m : n;

    return larger % smaller;
}

console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(0, -1));
console.log(remainder(0, 1));
console.log(remainder(1, 0));