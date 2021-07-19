import { DisableControlDirective } from './disabled-control.directive';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DisableControlDirective],
  imports: [CommonModule],
  exports: [DisableControlDirective]
})
export class DisableControlModule {}
