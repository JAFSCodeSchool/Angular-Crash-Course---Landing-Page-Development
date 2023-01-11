import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  @Input('color')
  color = 'dynamic';

  @Input('align')
  align = 'center';
  
  constructor() { }

  ngOnInit(): void {
  }

}
