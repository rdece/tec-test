import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/interfaces/commons/Game';
import { GameDetail } from 'src/app/interfaces/commons/GameDetail';
import { ShopDetail } from 'src/app/interfaces/commons/ShopDetail';
import { LocalStorageService } from 'src/app/services/commons/local-storage.service';
import { ModalsService } from 'src/app/services/commons/modals.service';
import { ShopsService } from 'src/app/services/commons/shops.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  @ViewChild('myModal') modal:ElementRef;
  isCollapsed = true;
  gamesList : Game[] = [];
  shopDetail: ShopDetail;
  getShopDetail$: Subscription = new Subscription();
  modalRef: BsModalRef;

  constructor(
    private localStorage: LocalStorageService,
    private shopsService: ShopsService,
    private modalsService: ModalsService
    ) { }

  ngOnInit(): void {
    this.shopDetail = JSON.parse(this.localStorage.getItem("selectedShop"));
    this.gamesList = this.shopDetail.games;
    this.getShopDetail(this.shopDetail.id);
  }

  getShopDetail(id: string){
    this.getShopDetail$ = this.shopsService.getShopDetail(id).subscribe({
      next: async (response: ShopDetail) => {
        if (response != null ){
          this.shopDetail = {...this.shopDetail, description: response.description};
        }
      },
      error: (err) => {}
    })
  }

  showGameInfo(game: Game){
    this.getShopDetail$ = this.shopsService.getGameDetail(game.id).subscribe({
      next: async (response: GameDetail) => {
        if (response != null ){
          this.modalsService.alert(response).subscribe((answer) => {});
        } 
        else {
          return null;
        }
      },
      error: (err) => { return null;},
      complete: () => { return null;}
    });
  }



}
