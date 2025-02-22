import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { ComponentsModule } from "./components/components.module";
import { ShopsComponent } from "./pages/shops/shops.component";
import { ShopDetailComponent } from "./pages/shop-detail/shop-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "shops", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "shops", component: ShopsComponent },
  { path: "landing", component: LandingpageComponent },
  { path: 'shop-detail', component: ShopDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
