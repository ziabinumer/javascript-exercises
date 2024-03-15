const removeFromArray = function(arr, ...args) {
    const newArray = [];
    for (let x of arr)
    {
        if (!args.includes(x)) newArray.push(x);
        
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
