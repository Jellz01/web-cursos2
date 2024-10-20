import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  httpClient = inject(HttpClient);
  data$: Observable<any> = of(null); // Initialize with null

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    const url = 'https://free-api-live-football-data.p.rapidapi.com/football-league-heatmap-overall?playerid=827606&leagueid=17&seasonid=52186';
    const apiKey = '0c71630071msh6ed9f74032e0e18p122b3ejsn51b37893c463';

    this.data$ = this.httpClient.get<any>(url, {
        headers: {
            'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    });

    this.data$.subscribe(data => {
        console.log('Fetched data:', data); // Log the fetched data
    });
}

}
