import { Component, OnInit } from '@angular/core';
import { getFirstName, getPhoto } from 'src/utils/auth.util';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  name = '';
  photo = '';

  constructor(private menu: MenuController) {
  }

   async ngOnInit() {
    this.name = getFirstName();
    this.photo = getPhoto();
  }

  closeMenu() {
    this.menu.close();
  }

}
