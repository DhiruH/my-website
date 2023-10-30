import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  {
    IsMenuOpen = true;
    onMenuClick(){
      console.log(this.IsMenuOpen);
      this.IsMenuOpen = !this.IsMenuOpen;
    }
}
