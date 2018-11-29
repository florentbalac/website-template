import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "./contact.service";
import { HttpClient } from '@angular/common/http';
import { Message } from "./message";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  providers: [ContactService],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // Contact Form
  contactForm: FormGroup;  
  // Form state
  loading = false;
  success = false;
  errorMail = false;
  // Send mail - Endpoint To be corrected
  endpoint = 'https://us-central1-firestarterdev-cloudfunctions.net/httpEmail';

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.minLength(3),
        Validators.required
      ]],
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      message: ['', [
        Validators.required
      ]],
    })
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  submitHandler(message: Message) {
    this.loading = true;
     this.http.post(this.endpoint, message).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.success = true;
      },
      err => {
        this.loading = false;
        this.errorMail = true;
        console.log(err);
      }
    )
      
  }


  

}
