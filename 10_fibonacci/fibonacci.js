const fibonacci = function(count) {
    let n;
    if (typeof count !== 'number') {
        n = parseInt(count);
    } else {
        n = count;
    }

    if (n === 0) return 0;
    if (n < 0) return "OOPS";

    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
