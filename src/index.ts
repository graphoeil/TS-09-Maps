// Imports
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// Instantiation
const user = new User();
const company = new Company();
const customMap = new CustomMap('#map');

// User marker
customMap.addMarker(user);

// Company marker
customMap.addMarker(company);