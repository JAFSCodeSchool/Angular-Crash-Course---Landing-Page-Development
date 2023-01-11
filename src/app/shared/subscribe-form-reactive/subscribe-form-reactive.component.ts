import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form-reactive',
  templateUrl: './subscribe-form-reactive.component.html',
  styleUrls: ['./subscribe-form-reactive.component.css'],
})
export class SubscribeFormReactiveComponent implements OnInit {
  // email: string | undefined = undefined;
  message: string = '';
  errrorMessage: string = '';

  subscribeForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    // phone:new FormControl(),
    // name:new FormControl()
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  // form: NgForm
  submit() {
    this.httpClient
      .post('/api/subscriptionForm.php', this.subscribeForm.value)
      .subscribe(
        (data: any) => {
          if (data.message === 'SUCCESS') {
            this.message = 'Thank You.';
          }
          console.log(data);
        },
        (error) => {
          this.errrorMessage = error.error;
          console.log(error);
        }
      );
  }
}
