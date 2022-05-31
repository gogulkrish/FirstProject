import { Component,Output, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  public myvalue="false";
  public color="Orange";
  public mycolors=['red','green','blue']
  public j="0";
  name="nirmal"
}
