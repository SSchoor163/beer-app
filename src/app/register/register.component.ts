import { Component, OnInit } from "@angular/core";
import { IUser } from "../interfaces/iuser";
import { FormBuilder, FormGroup } from "@angular/forms";
import { USerServiceService } from "../services/user-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  newUser: IUser;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService: USerServiceService,private Router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: "",
      FirstName: "",
      LastName: "",
      email: "",
      BOD: "",
      FavoriteFood: "",
      FavoriteMovie: "",
      FavoriteArtist: "",
      Hobbie: ""
    });
  }

  onSubmit(user) {
    this.userService.register(user).subscribe(user => {
      if (user) this.Router.navigateByUrl("/");
    });
  }

}
