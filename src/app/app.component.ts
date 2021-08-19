import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  miles: any;
  ratePerMile: any;
  totalRate: any;
  initialRate = 0;

  form = new FormGroup({
    rate: new FormControl(''),
    miles: new FormControl(''),
    total: new FormControl('')
  })
  // reactiveForm = new FormGroup({
  //   firstname: new FormControl('', [Validators.required]),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //     pincode: new FormControl()
  //   })
  // })
  //  onSave(){
  //    console.log(this.form.value)
  //  }
  // onSubmit() {
  //   console.log(this.reactiveForm.value);
  // }
  ngOnInit() {
    this.form.get('miles').valueChanges.subscribe(data => {
      // this.inputMiles = data;
    })

    this.form.get('rate').valueChanges.subscribe(data => {
      // this.inputRate = data;
      this.multiplyInputs();
    })
    this.form.get('total').valueChanges.subscribe(data => {
      this.totalRate = data;
      this.divideInputs();
    })


    // this.reactiveForm.get('firstname').valueChanges.subscribe(data =>{
    //   this.feature = data;
    //   console.log(data);
    // })
    // this.reactiveForm.valueChanges.subscribe(data=>{

    //   console.log(data);
    // })

  }
  multiplyInputs() {
    this.ratePerMile = this.form.get('rate').value;
    this.miles = this.form.get('miles').value;
    this.initialRate = this.miles * this.ratePerMile;
    console.log(this.initialRate)
  }
  divideInputs() {
    this.ratePerMile = this.totalRate / this.miles;
    // console.log(this.inputRate)
  }
}
