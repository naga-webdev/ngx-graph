import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.scss']
})
export class RaterComponent implements OnInit {
  graphData;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.httpClient
      .get('./../../assets/data/rater.json')
      .subscribe(
        data => (this.graphData = data),
        error => console.log(error),
        () => console.log('method completed')
      );
  }
}
