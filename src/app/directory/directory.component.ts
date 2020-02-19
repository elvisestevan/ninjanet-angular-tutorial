import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  name: string;
  term: string = "a";
  
  items = [
    {name: "João", gender: "M"},
    {name: "Maria", gender: "F"},
    {name: "José", gender: "M"}
  ];

  classes = {"blue": true, "red": false, "underline": true}

  constructor(private route: ActivatedRoute, private logger: LoggingService) {
    this.name = route.snapshot.params['name'];
  }


  ngOnInit(): void {
    this.logger.log(DirectoryComponent.name);
  }

}
