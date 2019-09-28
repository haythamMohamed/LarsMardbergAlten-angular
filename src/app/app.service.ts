import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class IntergerationService {
    constructor(private http : HttpClient ){}

    getCustomers () : Observable<any> {
        return (<any>this.http.get(environment.url + "customer")).pipe(retry(1));
    };
    

    searchVechiles(data: any): Observable<any> {
        let httpHeaders = new HttpHeaders({"Content-Type" : "application/json"});

        return (<any>this.http.post(environment.url + "search-vechiles", data,{headers :httpHeaders }).pipe(retry(1)));
            }
}