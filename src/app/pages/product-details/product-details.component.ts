import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { trigger, style, animate, transition } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
    animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProductDetailsComponent implements OnInit {

  
  selectedImage!: string;
  productImages: string[] | undefined;

  ngOnInit() {

    this.productImages = [
      'images/ghee1.png',
      'images/ghee2.png',
      'images/ghee3.png',
      'images/ghee5.png'
    ];

    this.selectedImage = this.productImages[0]; // ✅ ensure it's initialized after component mounts
  }

  zoomImage: string | null = null;

  changeImage(img: string) {
    console.log('Selected Image:', img);
    this.selectedImage = img;
  }

  openZoom(image: string) {
    this.zoomImage = image;
  }

  closeZoom() {
    this.zoomImage = null;
  }


}
