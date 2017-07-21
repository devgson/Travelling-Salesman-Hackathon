var locations = [
    {
        loc : {
             latitude : 12,
             longitude : 20
        }
    },
    {
        loc : {
            latitude: 40,
            longitude: 5
        }
    },
    {
        loc : {
            latitude: 10,
            longitude: 60
        }
    }
];
var longitudes = [];
var latitudes = [];
var shortestRoute = [];
var shortestRoutes = [];
var all_routes = [];

/*//add a location
function add(lon,lat){
    locations.push({
        'longitude' : lon,
        'latitude' : lat
    });
}
*/
//Distance between 2 latitude and longitude pairs/points
function distance(lat1,lon1,lat2,lon2) {
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

var lon =[];
var lat =[];
//Supposed to be the main calculation
function compute(){
    var newLocations = locations;
    newLocations.forEach(function(currentValue,currentIndex){
        for(num in currentValue.loc){
            if (num == "latitude"){
            var c = currentValue.loc.latitude;
            lat.push(c);
        } else if (num == "longitude") {
            var d = currentValue.loc.longitude;
            lon.push(d);
        }
    }
});
}
//test distance between two points
console.log(distance(5,10,20,12));
//test permutation
console.log(perms(locations));