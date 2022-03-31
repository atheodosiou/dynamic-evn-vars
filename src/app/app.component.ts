import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { config } from 'src/assets/config/cofig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-env-vars';
  results:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(config.baseUrl).subscribe(res => {
      this.results = res;
      console.log(res);
    })
  }
}
