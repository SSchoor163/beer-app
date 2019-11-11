import { Component, OnInit, Input } from '@angular/core';
import{LoginComponent} from '../../login/login.component';
import {BeerListComponent} from '../../beer-list/beer-list.component';
import {IUser} from '../../interfaces/iuser';
import {USerServiceService} from '../../services/user-service.service';
import {ResetService} from '../../services/reset.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  currentUser:IUser;
  constructor(private userService:USerServiceService, private resetService:ResetService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUserValue;
    console.log(this.currentUser);
    console.log(this.resetService.reset);
  }

}
