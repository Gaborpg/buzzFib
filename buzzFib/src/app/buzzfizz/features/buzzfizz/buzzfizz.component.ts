import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBuzzFizz } from '../../models/buzzfizz';

@Component({
  selector: 'app-buzzfizz',
  templateUrl: './buzzfizz.component.html',
  styleUrls: ['./buzzfizz.component.scss']
})
export class BuzzfizzComponent implements OnInit {

  public outputArray: string[] = [];
  #output: IBuzzFizz = new IBuzzFizz();

  public form!: FormGroup;

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      upToValue: [20, [Validators.required, Validators.max(100), Validators.min(20)]],
      fizz: [this.#output.fizz, [Validators.required]],
      buzz: [this.#output.buzz, [Validators.required]],
    });
  }


  buzzFizz(): void {
    this.outputArray = [];

    for (let index = 1; index < this.formControls.upToValue.value + 1; index++) {
      this.outputArray = [...this.outputArray, this.#output.buzzfizz(index, this.formControls.fizz.value, this.formControls.buzz.value)];
    }

  }

}
