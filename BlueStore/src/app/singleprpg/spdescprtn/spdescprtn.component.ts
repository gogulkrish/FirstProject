import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spdescprtn',
  templateUrl: './spdescprtn.component.html',
  styleUrls: ['./spdescprtn.component.css']
})
export class SpdescprtnComponent implements OnInit {
  productname="Puma Printed T-Shirt(Red)"
  productprice="499"
  orgprice="1000"
  extraoff="Extra 30% Off"
  priceusave="500(50%)"
  dvlrydate="Monday, Sep 13"

  prodctlist1="Care Instructions: Machine wash cold, Tumble dry low, Wash Clothes Inside Out With Similar Color."
  prodctlist2="Fit Type: Regular Fit"
  prodctlist3="Regular Fit Half Sleeve Polo is made of comfortable, Bio Washed cotton-poly pique fabric, a three-button placket, and ribbed cuffs for a classic look."
  prodctlist4="Fabric Composition - Cotton 60% Poly 40% Blend, Bio Wash Pique Fabric."
  prodctlist5="Pattern - Color Block Men’s Polo Tshirt, Rib Collar & Sleeve for Amazing Fit."
  prodctlist6="“Made In India” by Socially Compliant MSME Factory. All Components Used to make this T-Shirt are Proudly Made in India."
  
  prodescrptn="Regular Fit Half Sleeve Polo for Plus Size Men is made of comfortable, Bio Washed cotton-poly pique fabric, a three-button placket, and ribbed cuffs for a classic look. Fabric Composition - Cotton 60% Poly 40% Blend, Bio Wash Pique Fabric. Pattern - Solid Color Men’s Polo TShirt, Rib Collar & Sleeve for Amazing Fit. Classic American Crew Signature Polo with Logo Embroidery on Chest. “Made In India” by Socially Compliant MSME Factory. All Components Used to make this T-Shirt are Proudly “Made in India”."

  deslst1="27 x 22 x 2 cm; 300 Grams"
  deslst2="9 December 2019"
  deslst3="Sunstar Appparels Private Limited"
  deslst4="AC3020-XXL"
  deslst5="India"
  deslst6="Sunstar Appparels Private Limited"
  deslst7="300 g"
  deslst8="#1,134 in Clothing & Accessories"

  
  constructor() { }

  ngOnInit(): void {
  }

}
