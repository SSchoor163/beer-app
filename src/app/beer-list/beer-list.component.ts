import { Component, OnInit } from '@angular/core';
import {BeerService} from '../beer.service'
import { IBeer } from '../ibeer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beerList:IBeer[] = [];
  displayedColumns:string[] = ["name", "tagline", "first_brewed"];
  constructor(private beerService:BeerService) { }

  ngOnInit() {
    this.beerService.getAll()
    .subscribe(data=> this.beerList = data);
  }

}
