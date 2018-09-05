import {Component} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private _dismiss: any;

    get dismiss() {
        if (this._dismiss) {
            return this._dismiss;
        }
        return 'Dismiss the toast to see the values';
    }

    get keys() {
        if (this._dismiss) {
            return Object.keys(this._dismiss).join(' ');
        }
        return '';
    }

    constructor(private toastCtrl: ToastController) {

    }

    async showToast() {
        const toast = await this.toastCtrl.create({
            message: 'I am a toast which should pass data and role!',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Close me!',
            duration: 2000
        });

        toast.present();

        this._dismiss = await toast.onDidDismiss();


        console.log('Dismissed toast', this._dismiss);
        if (this._dismiss.role === 'close') {
            console.log('Close button pressed!');
        }
    }

}
