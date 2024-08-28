import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {

  }

  items = [
    {
      id: 1,
      name: 'Product A',
      price: 200,
      detail: 'this is a product A',
      imageURL: 'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/11/Blog/week3/Asus%20ZenBook%2013%20OLED%201.jpg',
    },
    {
      id: 2,
      name: 'Product B',
      price: 250,
      detail: 'this is a product B',
      imageURL: 'https://www.uboncomputer.co.th/pub/media/catalog/product/cache/566bac40c34e1b79304197de40a22c99/n/o/note-ace-a3155934t3_2_230820_220118.jpg',
    },
    {
      id: 3,
      name: 'Product C',
      price: 199,
      detail: 'this is a product C',
      imageURL: 'https://www.ktc.co.th/pub/media/Article/01/Notebook_DELL_G5SE.webp',
    },
    {
      id: 4,
      name: 'Product D',
      price: 299,
      detail: 'this is a product D',
      imageURL: 'https://news.siamphone.com/upload/news/nw52917/000-lenovo-transparent-display-laptop-keyboard-thinkbook_1.jpg',
    },
  ]

  gotoDetail(item : any) {
    this.detail.navigateForward('/detail', {state:{item}})
  }

}