import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-trash-icon',
  templateUrl: './trash-icon.component.html',
  styleUrls: ['./trash-icon.component.scss']
})
export class TrashIconComponent {

  @Input() colorIcon!: string;
  @Input() titleIcon: string = 'Delete';
  @Output() emitDelete: EventEmitter<boolean> = new EventEmitter();

  emitClick(): void {
    this.emitDelete.emit( true );
  }
}
