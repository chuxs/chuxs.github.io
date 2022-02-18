
var ng = {lat: 9.0820, lng: 8.6753};
var mapOptions = {
    center: ng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};



//Create the map
var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);

//create a direction service object to use route method and get a result  for  our request

var directionsService = new google.maps.DirectionsService();

//create a directions Renderer object which we will use to display the route

var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the direction renderer to the map

directionsDisplay.setMap(map);

//
function calcRoute(){
    //create Request

    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //this can also be WALKING, CYCLING OR BUS
        unitSystem: google.maps.UnitSystem.METRIC //METRIC for kilometers and IMPERIAL for miles
    }

    //Pass the request to the route method
    directionsService.route(request, (result, status) => {
    if (status == google.maps.DirectionsStatus.OK) {
        
        //get distance and time
        const output = document.querySelector('#output');
        output.innerHTML = "From:" + document.getElementById("from").value + ".<br /> To: " + document.getElementById("to").value + ".<br /> Drivng distance: <i class='fa fa-automobile'> </i>" + result.routes[0].legs[0].distance.text + ".<br /> Duration: <i class='fa fa-clock-o'> </i>" + result.routes[0].legs[0].duration.text;

         //display the route on the map
         directionsDisplay.setDirections(result);
    }
    else{
        //delete route from map
        directionsDisplay.setDirections({ routes: []});

        //center the map back at nigeria
        map.setCenter(ng);

        //show error message
        output.innerHTML = "Could not retrive driving distance <i class='fa fa-exclamation'></i>";
    }
});

}

// to clear the inputs and output
function clearPage(){
    document.getElementById("from").value = "";
    document.getElementById("to").value = ""
    document.querySelector('#output').innerHTML= "The results will appear here"
    

}

//create autocomplete objects for all inputs

var options = {
    types: ['(cities)'],
    fields: ["address_components", "geometry", "name"],
    strictBounds: false,
    types: ["establishment"],
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);

