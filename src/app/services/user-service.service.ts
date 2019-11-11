import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/iuser";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class USerServiceService {

  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem("currentUser")));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>("https://localhost:44367/api/auth/login", {
        email: email,
        password: password
      })
      .pipe(
        map(user => {
          console.log(user);
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
         console.log(this.currentUser);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }

  register(user: any): Observable<IUser> {
    return this.http.post<IUser>(
      "https://localhost:44367/api/auth/register",
      user
    );
  }

}
