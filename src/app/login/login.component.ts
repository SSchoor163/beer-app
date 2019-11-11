import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { USerServiceService } from "../services/user-service.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import {ResetService} from '../services/reset.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
   @Input() reset;
  constructor(private formBuilder: FormBuilder, private userService: USerServiceService, private router: Router, private resetService:ResetService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({ email: "", password: "" });
  }
  onSubmit(loginData) {
   
    if (this.loginForm.invalid) 
      return;
    
    this.userService
      .login(loginData.email, loginData.password)
      .pipe(first()).subscribe(
        data => {this.router.navigateByUrl("/");
        console.log(data);
        this.resetService.resetView();},
        error => {console.error("Error", error);}
      );
        
  }

}
