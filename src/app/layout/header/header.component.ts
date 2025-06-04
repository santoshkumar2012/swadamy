import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // showSearchBox = false;

  isActive = false;

  addClassToDiv() {
    this.isActive = true;
  }

  constructor(private cartService: CartService){}

  onCartClick(){
    this.cartService.showCart();
  }

  //  toggleSearchBox() {
  //   this.showSearchBox = !this.showSearchBox;
  // }

  // closeSearchBox() {
  //   this.showSearchBox = false;
  // }

}
