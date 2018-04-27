import {AfterContentInit, Component, ContentChild, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormControlName, NgModel} from "@angular/forms";

@Component({
  selector: 'input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorPattern: string

  input: any

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control

    console.log(this.input)
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usada com uma diretiva ngModel ou formControlName')
    }
  }

  isFieldRequired() {
    return true //this.input._validators.validate()
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
