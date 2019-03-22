import { Component } from '@angular/core';
import { Quote } from './models/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Upvote or Downvote a Quote';

  masterQuoteList: Quote[] = [
    new Quote(`Happiness is when what you think, what you say, and what you do
     are in harmony. Mahatma Gandhi`),
    new Quote(`I have decided to stick with love. Hate is too great a burden to
     bear. Martin Luther King Jr.`),
    new Quote(`I learned that courage was not the absence of fear, but the
     triumph over it. The brave man is not he who does not feel afraid, but he
     who conquers that fear. Nelson Mandela`),
    new Quote(`Let us always meet each other with smile, for the smile is the
     beginning of love. Mother Teresa`),
    new Quote(`I'm not a 'Business-Man'! I'm a Business... man! Let me handle
     my business, damn! Jay-Z`)
  ];
}
