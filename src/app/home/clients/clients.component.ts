import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { SlideConfig } from 'src/app/models/slide-config.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  slideConfig = new SlideConfig()

  clients!:Client[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.slideConfig.breakpoints = {sm:1,md:2,lg:3,xl:5};
    this.slideConfig.showDots=false;
    this.slideConfig.showLeftRightArrow = false;
    this.slideConfig.autoPlay = true;
    this.getAllClients()
  }

  getAllClients() {
    this.httpClient.get('assets/data/clients.json').subscribe({
      next: (clients) => {
        this.clients = clients as Client[];
      },
      error: (errors) => {
        console.log(errors)
      }
    })
  }

}
