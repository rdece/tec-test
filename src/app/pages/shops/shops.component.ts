import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Shop } from 'src/app/interfaces/commons/Shop';
import { ResponseShopsList } from 'src/app/interfaces/responses/ResponseShopsList';
import { LocalStorageService } from 'src/app/services/commons/local-storage.service';
import { ShopsService } from 'src/app/services/commons/shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  isCollapsed = true;
  shopsList : Shop[] = [];
  getShopsList$: Subscription = new Subscription();

  constructor(
    private shopsService: ShopsService,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.getShopsList();
  }

  getShopsList(){
    this.getShopsList$ = this.shopsService.getShopsList().subscribe({
      next: async (response: ResponseShopsList) => {
        if (response != null ){
          this.shopsList = response.results;
        }
      },
      error: (err) => {}
    })
  }

  goShopDetail(shop: Shop){
    this.localStorage.setItem("selectedShop", JSON.stringify(shop))
    this.router.navigate(['/shop-detail']);
  }

}
