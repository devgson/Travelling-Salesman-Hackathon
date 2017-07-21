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
var shortestRoute = [];
var shortestRoutes = [];
var all_routes = [];
var permutations=[];

/*//add a location
function add(lon,lat){
    locations.push({
        'longitude' : lon,
        'latitude' : lat
    });
}
*/

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

function compute(){

    
}
//test distance b/w two points
console.log(distance(5,10,20,12));
//test permutation
console.log(perms(cities));
//store the permutations in a variable
var value= perms(cities);

//the permutations are stored in the form of an array, convert it to a string array with to string function
   var len = value.toString();

   //you can run a for loop to see what the string array contains
   console.log(len[6]);

   var y = len[0];
   // var distance= longitudes.y;
   // this gets the length of the string array

    console.log(len.length);

    //the permutations are in three's i.e.(abc,cba) and the string array has a comma between each variable i.e. a,b,c
    //so the first 3 locations would have indexes of 0,2,4.. the next three 6,8,10 and so on
    //so you'd just loop by 6 till it reaches the end.
    //run a forloop showing all the contents of the string array if you're still confused

    for (var i =0; i<len.length; i+=6) {

        var distance1= distance(longitudee[len[i]],latitudes[len[i]],longitudee[len[i+2]],latitudes[len[i+2]]);
        var distance2= distance(longitudee[len[i+2]],latitudes[len[i+2]],longitudee[len[i+4]],latitudes[len[i+4]]);        
        var distances=distance1+distance2;
        console.log(distances);
        console.log(len[i]);
        console.log(len[i+2]);
        console.log(len[i+4])
    }

    

/*
for (var i =0; i<value.length; i++) {
    for (var j =0; j<value.length; j++) {
        
    console.log(value[i][j]);

}
}
for (let letter of value) {
    console.log(letter);
}*/
