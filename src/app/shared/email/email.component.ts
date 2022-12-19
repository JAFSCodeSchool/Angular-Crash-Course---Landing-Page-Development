import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Input('align')
  align = 'center';

  constructor() { }

  ngOnInit(): void {
  }

}
