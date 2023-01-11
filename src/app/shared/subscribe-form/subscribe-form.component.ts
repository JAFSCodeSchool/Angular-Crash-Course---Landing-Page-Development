import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css'],
})
export class SubscribeFormComponent implements OnInit {
  email: string | undefined = undefined;
  message: string = '';
  errrorMessage: string = '';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.httpClient.post('/api/subscriptionForm.php', form.value).subscribe(
      (data: any) => {
        if (data.message === 'SUCCESS') {
          this.message = 'Thank You.';
        }
        console.log(data)
      },
      (error) => {
        this.errrorMessage = error.error;
        console.log(error)
      }
    );
  }
}
