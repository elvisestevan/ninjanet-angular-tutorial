import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes: any;

  constructor(private logger: LoggingService, private http: HttpClient) { }

  ngOnInit(): void {
    this.logger.log(HomeComponent.name);

    this.fetchData();

  }

  fetchData() {
    this.http.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes/10").subscribe(
      (res) => {
        console.log(res);
        this.quotes = res;
      }
    );
  }

}
