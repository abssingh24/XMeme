import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meme } from '../models/meme.model';
import { MemeService } from '../meme.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//Component which contains meme-form for posting a meme
@Component({
  selector: 'app-meme-form',
  templateUrl: './meme-form.component.html',
  styleUrls: ['./meme-form.component.scss']
})
export class MemeFormComponent implements OnInit {

  @Output() memePostEvent = new EventEmitter<any>();

  memPostLabel: string = "Post your Meme here ...";
  errMsg = "";

  //meme formGroup containing the three input fields.
  memeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    caption: new FormControl(''),
    url: new FormControl('', Validators.required)
  });

  constructor(
    private memeService : MemeService
  ) { }

  ngOnInit(): void {
  }

  //method gets triggered when submit button is pressed in meme-form.
  //It fetches data from form-group and validates the field values.
  //Sends data to post a meme.
  //On successful submission, resets the form.
  submitMemeForm(){
    if(this.memeForm.valid){
      let meme = new Meme();
      meme.name =  this.memeForm.controls['name'].value;
      meme.caption = this.memeForm.controls['caption'].value;
      meme.url = this.memeForm.controls['url'].value;
      this.memeService.postMeme(meme).subscribe((resp:any) => {
        console.log("post resp", resp);
        this.formSubmitSuccess();
        this.memePostEvent.emit(resp.id);
      }, err => {
        console.log("post error", err)
      })
    } else {
      if(this.memeForm.controls['name'].invalid){
        this.errMsg = 'Please enter name';
      }else if(this.memeForm.controls['url'].invalid){
        this.errMsg = 'Please enter Meme Url';
      }
    }
  }

  //empties the error message field's value on success of meme post.
  //resets the filled form as well.
  formSubmitSuccess(){
    this.errMsg = '';
    this.memeForm.reset();
  }

}
