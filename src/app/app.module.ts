import { StarComponent } from "./shared/star.component";

import { ProductListComponent } from "./products/product-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CovertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { ProductDetailsGuard } from "./products/product-details.guard";
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CovertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "products", component: ProductListComponent },
      { path: "products/:id", canActivate:[ProductDetailsGuard],component: ProductDetailsComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
