// By creating a CustomMap class we avoid other developpers
// to invoke google map methods in index.ts

// Instructions to every other class on how they
// can be an argument to addMarker
export interface Mappable {
	// User, Company, any other class ...to be mappable you must contain
	// a location property with lat and lng AND a function that 
	// return a string for infoWindow
	location:{
		lat:number;
		lng:number;
	};
	markerContent():string;
	color:string;
};

// Class
export class CustomMap {

	// Fields
	private googleMap:google.maps.Map;

	// Constructor
	constructor(divId:string){
		this.googleMap = new google.maps.Map(document.querySelector(divId) as HTMLElement, {
			// Map options
			zoom:2,
			zoomControl:true,
			center:{
				lat:1,
				lng:1
			}
		});
	};

	// Add marker (more generic method)
	// addMarker can take any argument that satisfy Mappable interface ,-)
	addMarker(mappable:Mappable):void{

		// Infowindow
		const infoWindow = new google.maps.InfoWindow({
			content:mappable.markerContent()
		});
		
		// Marker
		const marker = new google.maps.Marker({
			map:this.googleMap,
			position:{
				lat:mappable.location.lat,
				lng:mappable.location.lng
			}
		});

		// Marker event listener
		marker.addListener('click', () => {
			infoWindow.open(this.googleMap, marker);
		});

	};

};