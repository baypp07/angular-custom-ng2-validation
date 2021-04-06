import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-validation",
  templateUrl: "./custom-validation.component.html",
  styleUrls: ["./custom-validation.component.css"]
})
export class CustomValidationComponent implements OnInit {
  categories$
  constructor() {}
  
  save(product) {
    console.log(product);
  }

  ngOnInit() {}
}
