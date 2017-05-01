import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let credentials = [
      {
        "username":"Preeti",
        "password":"password1"
    },
    {
        "username":"Ramya",
        "password":"password2"
    },
    {
        "username":"Ricky",
        "password":"password3"
    },
    {
        "username":"Sky",
        "password":"password4"
    },
    {
        "username":"Tree",
        "password":"password5"
    }
    ];
    return {credentials};
  }
}