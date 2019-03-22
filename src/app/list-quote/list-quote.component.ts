import { Component, Input } from '@angular/core';
import { Quote } from '../models/quote.model'

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})

export class ListQuoteComponent {
  @Input() childQuoteList: Quote[];
}
