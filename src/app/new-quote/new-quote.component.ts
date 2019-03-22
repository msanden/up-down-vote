import { Component, Output, EventEmitter } from '@angular/core';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})

export class NewQuoteComponent {
  @Output() sendQuote = new EventEmitter();

  submitForm(description: string, source: string){
    let newQuote: Quote = new Quote(description, source);
    this.sendQuote.emit(newQuote);
  }
}
