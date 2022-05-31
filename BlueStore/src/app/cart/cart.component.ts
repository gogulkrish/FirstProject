import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public usrname="Nirmal"
  public userphnum="+91 93841 58468"
  public usradrs="No.10,2nd cross Street, Chennai. 600045"
  public productname="SkyBags bag"
  public cartpcolor="Blue"
  public dvlrydate="Thursday Nov 11"
  public cartpdcharge="40"
  public productprice="489"
  public orgprice="1000"
  public extraoff="Extra 70% off"
  public priceusave="500(50%)"
  
  constructor() { }

  ngOnInit(): void {
  }

}
