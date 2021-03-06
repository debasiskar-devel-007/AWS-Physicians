import { Injectable, Inject, Component } from '@angular/core';
import { Observable, interval, pipe, throwError } from 'rxjs';
import { switchMap, map, takeWhile, catchError } from 'rxjs/operators';
/*import { environment } from '../../environments/environment';*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*import { JwtHelperService } from '@auth0/angular-jwt';
// import { LoggedinService } from '../loggedin.service';*/
import { CookieService } from 'ngx-cookie-service';
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {
  public nodesslurl = environment["api_url"];
  public apiurl: any = environment["landing_api_url"];
  public worksheet_apiurl: any = environment["api_calender_url"];
  public landing: any = environment['landing_api_url'];
  constructor(private _http: HttpClient, public cookie: CookieService) { }

  getData(endpoint: string) {
    var result = this._http.get(this.getEndpointUrl(endpoint)).pipe(map(res => res));

    return result;
  } //end getData


  postData(endpoint: string, source, condition) {
    var result = this._http.post(this.getEndpointUrl(endpoint), { source: source, condition: condition }/*JSON.stringify(data)*/).pipe(map(res => res));
    return result;
  } //end postData


  putData(endpoint: string, data, id: string, is_cache_buster = true) {
    if (is_cache_buster == true) {
      let ran = Math.floor(Math.random() * 10000) + 1;
      var cache_buster = '?cache=' + ran.toString();
      endpoint = endpoint + cache_buster;
    }

    var result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data)).pipe(map(res => res));

    return result;
  } //end putData


  // deleteData(endpoint:string,id:string){
  //   var result = this._http.delete(this.getEndpointUrl(endpoint)+"/"+id).pipe(map(res => res));
  // 	return result;
  // } //end deleteData

  private getEndpointUrl(endpoint: string) {
    return this.nodesslurl + endpoint + '?token=' + this.cookie.get('jwttoken');
  }
  customRequest(requestdata: any, endpoint: any) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': this.cookie.get('jwttoken')
    //   })
    // };
    if (this.cookie.get('jwttoken') != null && this.cookie.get('jwttoken') != '') {
      var result = this._http.post(this.nodesslurl + endpoint + '?token=' + this.cookie.get('jwttoken'), requestdata).pipe(map(res => res));
      return result;
    } else {
      var result = this._http.post(this.nodesslurl + endpoint, requestdata).pipe(map(res => res));
      return result;
    }

  }

  postdata(requestdata: any, endpoint: any) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': this.cookie.get('jwttoken')
    //   })
    // };
    var result = this._http.post(endpoint, requestdata).pipe(map(res => res));
    return result;

  }
  getState() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // };
    const result = this._http.get('assets/data/states.json').pipe(catchError((error) => {
      //this.openSnackBar();
      return throwError(error);
    }), map(response => response));
    return result;

  }

  getCity() {
    const result = this._http.get('assets/data/city.json').pipe(catchError((error) => {
      //this.openSnackBar();
      return throwError(error);
    }), map(response => response));
    return result;

  }

  getDatalistForSubmit(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookie.get('jwtToken')
      })
    };
    //console.log(requestdata.api_url)

    var result = this._http.post(this.apiurl + endpoint, requestdata, httpOptions).pipe(map(res => res));
    return result;




  }
  customRequest1(endpoint: any, requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookie.get('jwtToken')
      })
    };
    //console.log(requestdata.api_url)

    var result = this._http.post(this.apiurl + endpoint, requestdata, httpOptions).pipe(map(res => res));
    return result;




  }

    //ip track api function
    getclientip() {
      // console.log('endpoint');
      // this.isTokenExpired()
      var result = this._http.get("https://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map(res => res));
      return result;
    }


}
