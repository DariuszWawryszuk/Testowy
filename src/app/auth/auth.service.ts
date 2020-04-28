import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {JwtResponse, User} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_SIGNIN = 'http://34.89.217.254:8080/api/auth/signin';

  constructor(private httpClient: HttpClient) {
  }

  public isLoggedIn() {
    console.log('zalogowany');
    console.log(localStorage.getItem('ACCESS_TOKEN'));
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }


  singIn(user: User): Observable<JwtResponse> {
    // const response$ = of( {
    //   name: 'Jan',
    //   email: 'ttt@wp.pl',
    //   access_token: '1234',
    //   expires_in: 333,
    //   role: 'user'
    // });
    console.log(user);
    let response$: Observable<JwtResponse>;

    response$ = this.httpClient.post<JwtResponse>(this.AUTH_SERVER_SIGNIN, user);

    return response$.pipe(
      tap(async (res: JwtResponse) => {

        if (res) {
          localStorage.setItem('AUTH_SERVER_SIGNIN', res.access_token);
        }
      })
    );
  }

  signOut() {
    localStorage.removeItem('ACCESS_TOKEN');
    console.log('wylogowany');
  }


}
