import { Component, inject } from '@angular/core';
import { AlertService } from '../../ui/alert/alert.service';

@Component({
  selector: 'app-alert-demo',
  templateUrl: './alert-demo.component.html',
  styleUrls: ['./alert-demo.component.scss']
})
export class AlertDemoComponent  {

  private readonly alertService = inject(AlertService);

  showSuccess() {
    this.alertService.success( 'This is a success message This is a success message This is a success message This is a success message',150000);
  }

  showError() {
    this.alertService.error('This is an error message', [
      {campo: 'Campo 1', mensaje: 'Mensaje 1 This is a success message This is a success message'},
      {campo: 'Campo 2', mensaje: 'Mensaje 2 This is a success message This is a success message'},
      {campo: 'Campo 3', mensaje: 'Mensaje 3 This is a success message This is a success message'},
    ],15000);
  }

  showInfo() {
    this.alertService.info('This is an info message',[], 15000);
  }

  showWarning() {
    this.alertService.warning('This is a warning message', [], 15000);
  }    

}
