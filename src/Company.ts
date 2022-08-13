// Imports
import { faker } from "@faker-js/faker";

// Class
// implements Mappable his optionnal, just for bugs help ,-)
export class Company {

	// Fields
	companyName:string;
	catchPhrase:string;
	location:{
		lat:number;
		lng:number;
	};
	color:string = 'firebrick';

	// Constructor
	constructor(){
		this.companyName = faker.company.name();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat:Number(faker.address.latitude()),
			lng:Number(faker.address.longitude())
		};
	};

	// Content for infoWindow marker in google map
	markerContent():string{
		return `<div>
			<h1>Company name : ${ this.companyName }</h1>
			<h3>Catchphrase : ${ this.catchPhrase }</h3>
		</div>`;
	};

};