import { Component, OnInit } from '@angular/core';
import Tracker from '@openreplay/tracker';
import trackerFetch from '@openreplay/tracker-fetch';

type Product = {
  id: string,
  slug: string,
  name: string,
  description: string,
  images: [{ url: string }],
  variants: [],
  price: {
    value: number
  },
  options: [],
  
}

const getMakeUpProducts = async (): Promise<Product[]> => {
  console.log('Getting the makeup products')
  
  try {
    let response = await fetch(
      'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&apiKey=123fff132'
      )
      const products = await response.json()
      
      let newProds = products.map((p: any) => {
        return {
          id: '' + p.id,
          slug: "",
          name: p.name,
          description: '',
          images: [{ url: p.image_link }],
          variants: [],
          price: {
            value: +p.price,
          },
          options: [],
        }
      })
      
      return newProds
    } catch (e) {
      console.log(e)
      return []
    }
  }
  
  
  @Component({
    selector: 'app-make-up-products',
    templateUrl: './make-up-products.component.html',
    styleUrls: ['./make-up-products.component.css']
  })
  export class MakeUpProductsComponent implements OnInit {
    products:Product[] = [];
    
    constructor() { }
    
    ngOnInit(): void {
      const fn = async () => this.products = await getMakeUpProducts()    
      
      
      const tracker = new Tracker({
        projectKey: "BoVSUAwwLSTH2tUmNGyk"
      });
      tracker.use(trackerFetch({
        overrideGlobal: true
      })); 
      tracker.start();
      
      fn()
      
    }
    
  }
  