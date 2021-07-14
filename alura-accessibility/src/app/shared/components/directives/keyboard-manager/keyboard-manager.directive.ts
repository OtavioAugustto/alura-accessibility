import { KeyBoardManagedItemDirective } from './keyboard-managed-item.directive';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appKm]',
})
export class KeyBoardManagerDirective {
  @ContentChildren(KeyBoardManagedItemDirective)
  public items: QueryList<KeyBoardManagedItemDirective> = null;
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.items.toArray()[0].manageKeys
        console.log(this.items);
        console.log('up');
        break;
      case 'ArrowDown':
        console.log('down');
        break;
      case 'ArrowLeft':
        console.log('left');
        break;
      case 'ArrowRight':
        console.log('right');
        break;
    }
  }
}
