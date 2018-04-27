import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotifyConfig} from './notify.config';
import {OnChange} from 'ngx-bootstrap';

@Component({
  selector: 'notify,app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  /** Notify type. Provides one of four bootstrap supported contextual classes: `success`, `info`, `warning` and `danger` */
  @Input() public type: string = 'warning';
  /** If set, displays an inline "Close" button */
  @OnChange()
  @Input() public dismissible: boolean = false;
  /** Number in milliseconds, after which notify will be closed */
  @Input() public dismissOnTimeout: number | string;

  /** This event fires immediately after close instance method is called, $event is an instance of Notify component. */
  @Output() public onClose: EventEmitter<NotifyComponent> = new EventEmitter<NotifyComponent>();
  /** This event fires when notify closed, $event is an instance of Notify component */
  @Output() public onClosed: EventEmitter<NotifyComponent> = new EventEmitter<NotifyComponent>();

  public isClosed: boolean = false;
  public classes: string = '';
  public dismissibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public constructor(_config: NotifyConfig) {
    Object.assign(this, _config);
    this.dismissibleChange.subscribe((dismissible: boolean) => {
      this.classes = this.dismissible ? 'notify-dismissible' : '';
    });
  }

  public ngOnInit(): void {
    if (this.dismissOnTimeout) {
      // if dismissOnTimeout used as attr without binding, it will be a string
      setTimeout(() => this.close(),
        parseInt(this.dismissOnTimeout as string, 10));
    }
  }

  // todo: animation ` If the .fade and .in classes are present on the element,
  // the notify will fade out before it is removed`
  /**
   * Closes an notify by removing it from the DOM.
   */
  public close(): void {
    if (this.isClosed) {
      return;
    }

    this.onClose.emit(this);
    this.isClosed = true;
    this.onClosed.emit(this);
  }
}
