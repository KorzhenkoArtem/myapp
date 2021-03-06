import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../service/data-handler.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less'],
})
export class CategoriesComponent implements OnInit {
  // categories: Category[] | undefined;
  categories: Category[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
  }
}
