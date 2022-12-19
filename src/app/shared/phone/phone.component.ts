import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  @Input('align')
  align='center';
  
  constructor() { }

  ngOnInit(): void {
  }

}
