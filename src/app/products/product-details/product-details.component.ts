import { Component, OnInit } from "@angular/core";
import { IProduct } from "../product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product Details";
  product: IProduct | undefined;
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const param=this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
    
    // let id = +this.route.snapshot.paramMap.get("id");
    // this.pageTitle += `:${id}`;
    // this.product = {
    //   productId: id,
    //   productName: "Leaf Rake",
    //   productCode: "GDN-0011",
    //   releaseDate: "March 19, 2016",
    //   description: "Leaf rake with 48-inch wooden handle",
    //   price: 19.95,
    //   starRating: 3.2,
    //   imageUrl: ""
    // };
  }
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this.router.navigate(["/products"]);
  }
}
