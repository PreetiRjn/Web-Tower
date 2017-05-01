import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Credentials } from './credentials';
import { InMemoryDataService }  from './in-memory-data.service';

@Injectable()
export class LoginService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private credentialsUrl = 'api/credentials';  // URL to web api
  constructor(private http: Http) { }
  getCredentials(): Promise<Credentials[]> {
    return this.http.get(this.credentialsUrl)
               .toPromise()
               .then(response => response.json().data as Credentials[])
               .catch(this.handleError);
  }
  getCredential(id: number): Promise<Credentials> {
    const url = `${this.credentialsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Credentials)
      .catch(this.handleError);
  }
  create(usrnm: string,pswd:string): Promise<Credentials> {
    return this.http
      .post(this.credentialsUrl, JSON.stringify({username: usrnm, password:pswd}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Credentials)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}