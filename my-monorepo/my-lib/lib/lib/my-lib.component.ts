import { Component } from '@angular/core';
import { MyLibModule } from '../my-lib.module';

@Component({
  selector: 'lib-my-lib',
  standalone:true,
  imports: [MyLibModule],
  template: `
    <p>
    THIS IS MY LIBRARY.
    </p>
  `,
  styles: ``
})
export class MyLibComponent {

}
