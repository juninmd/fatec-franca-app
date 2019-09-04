import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/core/app.module';
import { environment } from './environments/environment';

import 'moment/locale/pt-br';

import axios from 'axios';

if (environment.production) {
  enableProdMode();
}


const auth = localStorage.getItem('token');

axios.defaults.headers = {
  authorization: auth
};

axios.defaults.baseURL = environment.fatecApi.baseUrl;
axios.defaults.method = 'get';


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
