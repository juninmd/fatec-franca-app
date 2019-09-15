import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class PromptUpdateService {

    constructor(public alertController: AlertController, updates: SwUpdate) {
        updates.available.subscribe(async () => {
            const alert = await this.alertController.create({
                header: 'Nova versão disponível!',
                message: 'Deseja atualizar o app?',
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            updates.activateUpdate().then(() => document.location.reload());
                        }
                    }
                ]
            });

            await alert.present();
        });
    }
}