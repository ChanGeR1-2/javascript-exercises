const findTheOldest = function (people) {
    return people.reduce((oldest, curr) => {
        return getAge(oldest.yearOfBirth, oldest.yearOfDeath) < getAge(curr.yearOfBirth, curr.yearOfDeath) ? curr : oldest;
    })
};

function getAge(birth, death) {
    return death ? death - birth : new Date().getFullYear() - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
