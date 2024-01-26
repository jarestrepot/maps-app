import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-tag-icon',
  templateUrl: './tag-icon.component.html',
  styleUrls: ['./tag-icon.component.scss']
})
export class TagIconComponent {
  @Input() colorIcon!: string;
  @Input() titleIcon: string = 'Show';
  @Output() emitShowTag: EventEmitter<boolean> = new EventEmitter()

  emitClick():void {
    this.emitShowTag.emit( true );
  }
}
