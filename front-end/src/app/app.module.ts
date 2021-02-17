import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemeFormComponent } from './meme-form/meme-form.component';
import { MemeFeedComponent } from './meme-feed/meme-feed.component';
import { MemeService } from './meme.service';

@NgModule({
  declarations: [
    AppComponent,
    MemeFormComponent,
    MemeFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
