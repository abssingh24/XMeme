import { Component, OnInit, Input } from '@angular/core';
import { MemeService } from '../meme.service';
import { Meme } from '../models/meme.model';

//Component displays list of latest 100 memes.
@Component({
  selector: 'app-meme-feed',
  templateUrl: './meme-feed.component.html',
  styleUrls: ['./meme-feed.component.scss']
})
export class MemeFeedComponent implements OnInit {

  @Input() memePosted: boolean;

  memeList: Array<Meme> = [];

  constructor(
    private memeService : MemeService
  ) { }

  //on component load, trigger method for fetching all memes
  ngOnInit(): void {
    this.fetchLatestMemes();
  }

  //Whenever there is change in input variable, fetch the list of memes again.
  ngOnChanges() {
    if(this.memePosted){
      this.fetchLatestMemes();
    }
  }
  
  //This method call the method of meme-service for fetching all memes.
  fetchLatestMemes(){
    this.memeService.fetchLatestMemes().subscribe((resp: Array<Meme>) => {
      this.memeList = resp;
  });
  }


}
