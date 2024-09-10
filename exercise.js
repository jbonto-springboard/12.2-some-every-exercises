const numArray = [2,3,4,5,6];
const numArrayEven = [2,4,6,8];
const numArrayOdd = [1,3,5,7];
const objArray = [
    {firstname : 'Tim', lastname : 'Thomas'},
    {firstname : 'Susan', lastname : 'commonlastname', dogName : 'spike'},
    {firstname : 'Paul', lastname : 'rarelastname', dogname : 'radar'},
    {firstname : 'Ellen', lastname : 'somehownolastname'}
]

const objArrayFamily = [
    {firstname : 'Tim', lastname : 'Thomas'},
    {firstname : 'Susan', lastname : 'Thomas'},
    {firstname : 'Paul', lastname : 'Thomas'},
    {firstname : 'Ellen', lastname : 'Thomas'}
]

const objArrayAll = [
    {firstname : 'Tim', dogName : 'spike'},
    {firstname : 'Susan', dogName : 'spike'},
    {firstname : 'Paul', dogname : 'radar'},
    {firstname : 'Ellen', dogName : 'spike'}
]
function hasOddNumber(arr){
    return arr.some(function(v){
        return v % 2 === 1;
    });
}

function hasAZero(num){
    arr = num.toString().split("");
    return arr.some(function(v){
        return v === '0';
    });
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(v){
        return v % 2 === 1;
    });
}

function hasNoDuplicates(arr){
    
    return arr.every(function(v){
        arr.splice(arr.indexOf(v),1);
        return arr.indexOf(v) === -1;
    });
}

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val;
    });
}

function hasCertainValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value;
    })
}