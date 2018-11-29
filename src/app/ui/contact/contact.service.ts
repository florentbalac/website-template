import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { Message} from './message';


@Injectable()
export class ContactService {
  // endpoint = 'https://us-central1-firestarterdev-.cloudfunctions.net/httpEmail';



  constructor(
    private http: HttpClient
  ) { }

  /** POST: Send a message */
  sendMessage(message) {
    // return this.http.post(this.endpoint, message)   
  }


}
