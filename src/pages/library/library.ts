import {Component, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";
import {Quote} from "../../data/quote";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  quoteCollection: { category: string, quotes: Quote[], icon: string }[];
  quotesPage: any;

  constructor(public navCtrl: NavController) {
    this.quotesPage = QuotesPage;
  }

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }


}
