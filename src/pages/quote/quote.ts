import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {Quote} from "../../data/quote";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  quote: Quote;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

  ionViewDidLoad() {
    this.quote = this.navParams.data;
  }

}
