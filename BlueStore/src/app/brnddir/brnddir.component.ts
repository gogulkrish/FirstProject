import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brnddir',
  templateUrl: './brnddir.component.html',
  styleUrls: ['./brnddir.component.css']
})
export class BrnddirComponent implements OnInit {
  clthng1 ="MEN'S CLOTHING:"
  clthng2 ="ACCESSORIES:"
  clthng3 ="BRANDS:"
  public brndsepbar="|"
  public clothingg=['Shirts','T-shirts','Pants','Track-pants','Suit Jacket','Shorts','Printed T-Shirt','Hoodies','Denim shorts','Crew Sweater','Jeans','Basic Tees','Printed Shirts']
  public bdaccessors=['Sunglasses','Watch','Sneakers','Formal Shoes','Wallets','Casual Shoes','Belts','Bags','Bracelets','Hat','Tie','Socks']
  public bdbrands=['Ralph Lauren','Gucci','Nike','Prada','Levis','Calvin Klein','Armani','Tommy Hilfiger','H&M','Hermes','Wrangler','Diesel','The North Face','Champion','Givenchy','Columbia Sportswear','Todd Snyder','Suitssupply','Adidas','Puma','New Balance','Reebok','Clarks','Converse','Skechers','Fila','Woodland','Brooks','Timberland','Lee Cooper','Crocs','American Tourister','Skybags','Fastrack','Wildcraft']
  
  constructor() { }

  ngOnInit(): void {
  }

}
