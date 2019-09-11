import { Component } from '@angular/core';
import { getFirstName, getPhoto } from 'src/utils/auth.util';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  name = getFirstName();
  photo = getPhoto();

  constructor(private menu: MenuController) {
  }

  closeMenu() {
    this.menu.close();
  }

}
