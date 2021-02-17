// this is the app route component where you register all your routes in the Index.HTML file

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// "@" indicates a decorator which is recognized by typescript and they help give classes the ability to be used as classes
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  /**
   Declaring for dependency injection
  **/
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
        console.log(error);
    })
  }
}
