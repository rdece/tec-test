import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Shop } from 'src/app/interfaces/commons/Shop';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {


  @Output() goShopDetailPressed$ = new EventEmitter<Shop>();
  @Input('shop') shop: Shop;

  constructor() { }

  ngOnInit(): void {

  }

  goToShopDetail(){
    this.goShopDetailPressed$.emit(this.shop)
  }

  goToStore(url: string){
    window.open("https://" + url, "_blank");
  }

}
