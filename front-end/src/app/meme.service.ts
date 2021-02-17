import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meme } from './models/meme.model';
import { environment } from 'src/environments/environment';

//meme-service which contains two methods:
//one for fetching all memes by calling GET API
//second for posting a meme by calling POST API
@Injectable({
  providedIn: 'root'
})
export class MemeService {


  constructor(
    private http: HttpClient
  ) { }

  //method for fetching all memes by calling GET API
  fetchLatestMemes(){
    return this.http.get(environment.backEnd_url);
  }

  //method for posting a meme by calling POST API
  postMeme(meme: Meme){
    return this.http.post(environment.backEnd_url, meme);
  }

}
