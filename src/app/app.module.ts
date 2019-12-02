import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
// import { WavesModule, InputsModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    FormsModule,
    AutoCompleteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
