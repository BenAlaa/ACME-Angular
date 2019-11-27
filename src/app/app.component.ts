import { Component } from "@angular/core";
@Component({
  selector: "pm-root",
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand offset-lg-1 col-lg-8'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link btn btn-primary '[routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link '[routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "Acme";
}
