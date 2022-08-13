// The names of files containing a class must begin with a capital letter (convention)

// Imports
import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

// Class
// Here we implements Mappable which allows to display errors 
// directly in the class if a field or a method is missing
export class User implements Mappable {

	// Fields
	name:string;
	location:{
		lat:number;
		lng:number;
	};
	color:string = 'firebrick';

	// Constructor
	constructor(){
		this.name = faker.name.firstName();
		this.location = {
			lat:Number(faker.address.latitude()),
			lng:Number(faker.address.longitude())
		};
	};

	// Content for infoWindow marker in google map
	markerContent():string{
		return `<div>
			<h1>User name : ${ this.name }</h1>
		</div>`;
	};

};