import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public mystore=['My Account','My Order','My Shopping bag','My Wishlist']
  public usefllinks=['Contact Us','FAQ','T&C','Terms of use','Track Orders','Shipping','Cancellation','Returns','Privacy Policy']
  
  constructor() { }

  ngOnInit(): void {
  }

}
