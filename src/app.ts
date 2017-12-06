import {Router, RouterConfiguration} from 'aurelia-router';
//import {HttpClient} from 'aurelia-fetch-client';

    export class App {

      json = "hola mundo";
      router: Router;

      configureRouter(config: RouterConfiguration, router: Router){
        config.title = 'Contacts';
        config.map([
          { route: '',              moduleId: 'no-selection',   title: 'Select'},
          { route: 'contacts/:id',  moduleId: 'contact-detail', name:'contacts' }
        ]);

        this.router = router;
      }

    /*  getData(){
        let client = new HttpClient();

        client.fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            console.log(data);
          });
      }*/
    }
