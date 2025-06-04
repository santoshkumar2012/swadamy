import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

isCartVisible = false;
isMobile: any;
currentSlideIndex = 0;

constructor(private cartService: CartService){}

ngOnInit(){

   this.cartService.cartVisible$.subscribe((visible: boolean) => {
      this.isCartVisible = visible;
    });

}

 hideCart() {
    this.cartService.hideCart();
  }
}
