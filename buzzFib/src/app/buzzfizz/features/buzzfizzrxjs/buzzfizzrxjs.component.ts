import { filter, map, scan, switchMap, takeUntil } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Subject, range } from 'rxjs';
import { IBuzzFizz } from '../../models/buzzfizz';

@Component({
  selector: 'app-buzzfizzrxjs',
  templateUrl: './buzzfizzrxjs.component.html',
  styleUrls: ['./buzzfizzrxjs.component.scss']
})
export class BuzzfizzrxjsComponent implements OnInit {

  public outputArray: string[] = [];
  #output: IBuzzFizz = new IBuzzFizz();

  public form!: FormGroup;

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls
  }

  #destroy$: Subject<boolean> = new Subject<boolean>();

  #submitted: Subject<FormGroup> = new Subject<FormGroup>();

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      upToValue: [20, [Validators.required, Validators.max(100), Validators.min(20)]],
      fizz: [this.#output.fizz, [Validators.required]],
      buzz: [this.#output.buzz, [Validators.required]]
    });



    this.#submitted.pipe(
      filter(form => form.valid),
      switchMap(() =>
        range(1, this.formControls.upToValue.value).pipe(
          map((x: number) => this.#output.buzzfizz(x, this.formControls.fizz.value, this.formControls.buzz.value)),
          scan((acc: string[], curr: string) => {
            acc.push(curr);
            return acc;
          }, [])
        )),
      takeUntil(this.#destroy$)
    ).subscribe(
      output => {
        this.outputArray = output
      }
    )


  }


  buzzFizz(form: FormGroup): void {
    this.#submitted.next(form);
  }

  ngOnDestroy(): void {
    this.#destroy$.next(true);
    this.#destroy$.unsubscribe();
  }
}
