import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieapiComponent } from './movieapi/movieapi.component';
import { MovieServiceService } from './movie-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MovieServiceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
