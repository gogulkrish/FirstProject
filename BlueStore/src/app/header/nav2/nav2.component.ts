import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {
  public topwear=['T-Shirts','Formal Shirts','Casual Shirts']
  public bottomwear=['Jeans','Casual Trousers','Formal Trousers','Track Pants','Shorts','Cargos','Three fourths']
  public winterwear=['Sweat Shirts','Jackets','Sweater','Track Suits']
  public ethnicwear=['Kurtha','Ethnic Wear','Sherwanis','Dhoti']
  public innerwear=['Briefs & Trunts','Vests','Boxers','Night suits']

  public accessories=['Wallets','Rainwear','Belts','Jwellery','Mask']
  public luaggage=['All Travel & luggage','Backpacks','Soft Luggage','Essentials','Hard Luggage','Laptop Bag']

  public footwear=['Sports Shoes','Casual Shoes','Formal Shoes','Sandals & Floaters','Flip-Flops','Loafers','Boots','Running Shoes','Sneakers']
  public topftwear=['Nike','Adidas','Puma','Woodland','Clarks','Lee Cooper','Fila','Reebok','Crocs','Skechers']

  public watches=['Fastrack','Casio','Titan','Fossil','Sonata']
  public fitnessband=['Fastrack Wearables','Fitbit','Garmin','Oneplus','Realme']
  public smartwatch=['Boat','Samsung','Disel','Citizen','Casio','Mi']
  public analogwatch=['Titan','Casio','Sonata','Timex','Mtg']

  public grooming=['Deodorants','Perfumes','Bread Care & Grooming','Trimmers','Shavers','Grooming Kits']
  public topgrmbrands=['Nivea','The Man Company','Garnier','Ustraa','Gillette','Phlips','Himalaya','Biotique','Set Wet','Axe','Vega men','Bombay Shaving Company','Jaguar','Davidoff','Bvlgari']

  constructor() { }

  ngOnInit(): void {
  }

}
