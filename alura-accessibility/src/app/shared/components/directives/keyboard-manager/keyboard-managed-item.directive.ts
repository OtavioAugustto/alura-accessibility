import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appKmItem]'
})
export class KeyBoardManagedItemDirective {
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {

  }
}
