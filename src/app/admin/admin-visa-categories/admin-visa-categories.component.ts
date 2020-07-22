import { Component, OnInit } from "@angular/core";
import { AdminVisaCategoriesService } from "./admin-visa-categories.service";
import { Category } from "../../models/Category";
import { Observable } from "rxjs";

@Component({
  selector: "ngx-admin-visa-categories",
  templateUrl: "./admin-visa-categories.component.html",
  styleUrls: ["./admin-visa-categories.component.scss"],
})
export class AdminVisaCategoriesComponent implements OnInit {
  list_visa_categories$: Observable<
    Category[]
  > = this._adminVisaCategoriService.getListVisaCategories();
  list_visa_categories: Category[] = [];

  constructor(private _adminVisaCategoriService: AdminVisaCategoriesService) {}

  ngOnInit() {}
}
