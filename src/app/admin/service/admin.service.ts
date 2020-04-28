import {Injectable} from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  SERVER_REGISTRY = 'http://34.89.217.254:8080/api/auth/signup';

  constructor(private httpClient: HttpClient) {
  }

  registry(user: User): Observable<any> {

    console.log('rejestracja: ', user);
    let response$: Observable<any>;

    response$ = this.httpClient.post<any>(this.SERVER_REGISTRY, user);
    return response$;
  }

}
