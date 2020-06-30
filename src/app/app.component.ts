import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  form: FormGroup;
  isSubmitted: boolean;

  constructor(private api: ApiService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      childName: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      gradeInSession: ['', [Validators.required]],
      guardianContact: ['', Validators.required],
      email: ['', Validators.required],
      homeCity: ['', Validators.required],
      childSchool: ['', Validators.required],
      activityTime: ['', Validators.required],
      date: ['', Validators.required],
      terms: [false, Validators.required],
    });
    // this.form.controls.gender.setValue('Select');
  }

  onSubmit() {
    this.form.controls['date'].setValue(new Date().toDateString());
    if (this.form.invalid) { return; }
    // this.isSubmitted = true;
    this.api.submitForm(this.form.value);
  }

  get controls() { return this.form.controls; }

  terms() {
    this.form.controls['terms'].setValue(true);
  }
  onReset() {
    this.isSubmitted = false;
    // this.form.reset();
  }
}
