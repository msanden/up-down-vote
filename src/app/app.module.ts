import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListQuoteComponent } from './list-quote/list-quote.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    ListQuoteComponent,
    NewQuoteComponent,
    EditQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
