import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-locate-data',
  templateUrl: './locate-data.component.html',
  styleUrls: ['./locate-data.component.css']
})
export class LocateDataComponent implements OnInit {
cartList = {};

  constructor(public apiService: ApiServiceService) { }

  ngOnInit() {
   
    this.apiService.getWishListCategories().subscribe((data) => {
      this.cartList = data;
   
    });
    setTimeout(() => {
      console.log(this.cartList)
    }, 1000);
  }

}
