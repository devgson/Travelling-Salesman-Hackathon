var cities = [
    'a','b','c'
];
const longitudee = {
        a : 20,
        b : 5,
        c : 60
    };
const latitudes = {
        a : 12,
        b : 40,
        c : 10
    };

//Distance between 2 latitude and longitude pairs/points
function distance(lat1,lon1,lat2,lon2,) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

//Conversion of degree to radians
function deg2rad(deg) {
    return deg * (Math.PI/180);
}

//All possible permutations of one array of data
function perms(data){
    if (!(data instanceof Array)) {
        throw new TypeError("input data must be an Array");
    }
    data = data.slice();  // make a copy
    var permutations = [],
        stack = [];

    function doPerm(){
        if (data.length == 0) {
            permutations.push(stack.slice());
        }
        for (var i = 0; i < data.length; i++) {
            var x = data.splice(i, 1);
            stack.push(x);
            doPerm();
            stack.pop();
            data.splice(i, 0, x);
        }
    }
    doPerm();
    return permutations;
}

//Calcule Distances based on Permutation.
function computeDistance(){
    var value,len;
    //Store the permutation in a string
    value = perms(cities);

    //Convert Permutation to a string and then to an array for easy traversal
    len = value.toString().split(',');

    //the permutations are in three's i.e.(abc,cba), So loop through the array in three's
    for (var i =0; i<len.length; i+=3) {
        var distance1= distance(longitudee[len[i]],latitudes[len[i]],longitudee[len[i+1]],latitudes[len[i+1]]);
        var distance2= distance(longitudee[len[i+1]],latitudes[len[i+1]],longitudee[len[i+2]],latitudes[len[i+2]]);        
        var distances= distance1 + distance2;
        console.log(`${len[i]} => ${len[i+1]} => ${len[i+2]}`);
        console.log(`Distance : ${Math.round(distances).toLocaleString()}Km`);
    } 
}
//test distance b/w two points
console.log(distance(5,10,20,12));
//test permutation
console.log(perms(cities));
//store the permutations in a variable
console.log(computeDistance());