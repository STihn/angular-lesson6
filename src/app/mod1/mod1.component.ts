import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {
 formreactive:FormGroup;
  constructor(private form: FormBuilder) {
    this.formreactive = form.group({
      name: form.control('sergey'),
      age: form.control('24'),
      phone: form.control('895239332221'),
      emails: form.array([
        form.group({
          type: form.control(''),
          mail: form.control('qwr@mail.ru'),
        })
        ])
    })
   }

  ngOnInit(): void {
  }
 get age():FormControl {
   return this.formreactive.get('age') as FormControl;
 }

 get name():FormControl {
   return this.formreactive.get('name') as FormControl;
 }
 get phone():FormControl {
   return this.formreactive.get('phone') as FormControl;
 }

 get emails():FormArray {
   return this.formreactive.get('emails') as FormArray;
 }

 refresh() {
   this.formreactive.reset();
 }
 insert(i) {
   this.emails.insert(i, this.form.group({
    type: this.form.control(''),
    mail: this.form.control('qwr@mail.ru'),
  }));
 }

 remoute(i) {
  this.emails.removeAt(i);
 }
}
