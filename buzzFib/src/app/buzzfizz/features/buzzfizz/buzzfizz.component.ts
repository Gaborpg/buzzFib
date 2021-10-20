import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buzzfizz',
  templateUrl: './buzzfizz.component.html',
  styleUrls: ['./buzzfizz.component.scss']
})
export class BuzzfizzComponent implements OnInit {

  public outputArray: string[] = [];

  public form!: FormGroup;

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      upToValue: [20, [Validators.required, Validators.max(100), Validators.min(20)]],
      fizz: ['Fizz', [Validators.required]],
      buzz: ['Buzz', [Validators.required]],
    });
  }


  buzzFizz(): void {
    this.outputArray = [];

    for (let index = 1; index < this.formControls.upToValue.value + 1; index++) {
      let output: string = '';

      if (index % 3 === 0) { output += this.formControls.fizz.value; }
      if (index % 5 === 0) { output += this.formControls.buzz.value; }
      if (output.length === 0) output = `${index}`;

      this.outputArray = [...this.outputArray, output]
    }

  }

}
