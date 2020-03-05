import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { findLast } from '@angular/compiler/src/directive_resolver';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: any;
  items: any;
  showCategories = false;
  CategorisItems;
  showItems = false;
  selctCat = 'Select Categories';
  selctItem = 'Select Items';
  addbutton = false;
  itemsSlected;
  whishList = {};
  constructor(public apiService: ApiServiceService) { }

  ngOnInit() {

    this.apiService.getListOfCategories().subscribe((data) => {
      this.CategorisItems = data;
      this.categories = Object.keys(data);
      this.categories.map(x => {
        this.whishList[x] = [];
      
      });
     return this.whishList
    });
  }

  showCat() {

    this.showCategories = !this.showCategories;
  }

  showItem() {
    this.showItems = !this.showItems;
  }

  selectCategories(cat) {
    this.items = this.CategorisItems[cat];
    this.showCategories = false;
    this.selctCat = cat;

  }

  selectItems(item) {
    this.selctItem = item.Name;
    this.itemsSlected = item
    this.showItems = false;
    this.addbutton = true;
  }

  add() {
    this.whishList[this.selctCat].push({ Name: this.itemsSlected.Name, Price: this.itemsSlected.Price });
    sessionStorage.setItem('whishList', JSON.stringify(this.whishList))
 


this.apiService.addWhishList( this.selctCat, this.itemsSlected.Name).subscribe(data =>{ 

  this.selctCat = 'Select Categories';
  this.selctItem = 'Select Items';
  });
  }
}



