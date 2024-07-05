const removeFromArray = function(array, ...items) {
    return array.filter(val => !items.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
