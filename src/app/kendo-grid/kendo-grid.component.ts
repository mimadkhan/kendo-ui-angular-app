import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { ProductService } from '../service/product.service';
import { categories } from '../model/data.categories';
import { employees } from '../model/employees';
import { images } from '../model/images';
import { process } from "@progress/kendo-data-query";

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent implements OnInit {

@ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
public gridData: unknown[] = employees;
public gridView!: unknown[];

public mySelection: string[] = [];

  public gridItems!: Observable<GridDataResult>;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = 0;

  constructor(private service: ProductService) {
    this.loadGridItems();
}

public ngOnInit(){
  this.gridView = this.gridData;
}

public dropDownItems = categories;
public defaultItem = { text: "Filter by Category", value: null };

public handleFilterChange(item:any): void {
  this.filterTerm = item.value;
  this.skip = 0;
  this.loadGridItems();
}

public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
}

public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
}

private loadGridItems(): void {
    this.gridItems = this.service.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
}


public onFilter(input: Event): void {
  const inputValue = (input.target as HTMLInputElement).value;

  this.gridView = process(this.gridData, {
    filter: {
      logic: "or",
      filters: [
        {
          field: "full_name",
          operator: "contains",
          value: inputValue,
        },
        {
          field: "job_title",
          operator: "contains",
          value: inputValue,
        },
        {
          field: "budget",
          operator: "contains",
          value: inputValue,
        },
        {
          field: "phone",
          operator: "contains",
          value: inputValue,
        },
        {
          field: "address",
          operator: "contains",
          value: inputValue,
        },
      ],
    },
  }).data;

  this.dataBinding.skip = 0;
}

public photoURL(dataItem: { img_id: string; gender: string }): string {
  const code: string = dataItem.img_id + dataItem.gender;
  const image: { [Key: string]: string } = images;

  return image[code];
}

public flagURL(dataItem: { country: string }): string {
  const code: string = dataItem.country;
  const image: { [Key: string]: string } = images;

  return image[code];
}


}
