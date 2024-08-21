export interface APIResponse {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

const response = await fetch(API_URL);
if (!response.ok) {
    throw new Error("Something went wrong");
}

const dataJson = await response.json();

dataJson.map((item: APIResponse) => {
    return {
        id:       item.id,
        name:     item.name,
        username: item.username,
        email:    item.email,
        address:  item.address.city,
        phone:    item.phone,
        website:  item.website,
        company:  item.company,
    }
});



