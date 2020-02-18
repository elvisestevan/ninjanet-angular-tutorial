import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute) {
    this.name = route.snapshot.params['name'];
  }


  ngOnInit(): void {
  }

}
