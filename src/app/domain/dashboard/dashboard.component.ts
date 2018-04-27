import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("DENTRO DO DASHBOARD");
    // this.layout.title = 'Dashboard';
  }
}
