import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'ValueChanges';
  feature = '';

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
  ngOnInit(){
    // this.reactiveForm.get('firstname').valueChanges.subscribe(data =>{
    //   this.feature = data;
    //   console.log(data);
    // })
    this.reactiveForm.valueChanges.subscribe(data=>{
      
      console.log(data);
    })
  }
}
