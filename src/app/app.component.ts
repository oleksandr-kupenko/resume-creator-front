import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  list: any = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.testGetPosts().subscribe((data) => {
      this.list = data;
    });
  }
}
