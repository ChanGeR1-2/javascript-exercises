const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'ERROR';
    }
    if (min < 0 || max < 0) return 'ERROR';

    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    let output = 0;
    for (let i = min; i <= max; i++) {
        output += i;
    }
    return output;

};

// Do not edit below this line
module.exports = sumAll;
