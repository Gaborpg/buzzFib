import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFibonacchi } from '../../models/fibonacchi';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {

  public outputArray: number[] = [];

  public form!: FormGroup;

  fibonacci: IFibonacchi = new IFibonacchi();

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      upToValue: [7, [Validators.required, Validators.max(100), Validators.min(1)]]
    });
  }

  fibon(): void {

    this.outputArray = [];

    for (let index = 0; index < this.formControls.upToValue.value; index++) {
      this.outputArray = [...this.outputArray, this.fibonacci.fibo(index)];
    }
  }
}
