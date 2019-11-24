import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.css']
})
export class StoreFrontComponent implements OnInit {

  cart = {
    activeCart: [],
    total: 0
  };
  Guitars = [
    {
      Name: 'Gibson SG Standard',
      Price: 1499.00,
      Id: 'guitSPHVP',
      Quantity: 1,
      Image: '../../assets/GibsonSG.jpg'
    },
    {
      Name: 'Gibson Firebird',
      Price: 1999.00,
      Id: 'guitISZNN',
      Quantity: 1,
      Image: '../../assets/GibsonFirebird.jpg'
    },
    {
      Name: 'B C Rich Mockingbird',
      Price: 1499.00,
      Id: 'guitE5N3C',
      Quantity: 1,
      Image: '../../assets/BCRichMockingbird.jpg'
    },
    {
      Name: 'Dean Cadi',
      Price: 849.00,
      Id: 'guitM9LBE',
      Quantity: 1,
      Image: '../../assets/DeanCadi.jpg'
    },
    {
      Name: 'Ibanez Iceman',
      Price: 899.00,
      Id: 'guitWOMIU',
      Quantity: 1,
      Image: '../../assets/IbanezIceman.jpg'
    },
    {
      Name: 'ESP Snakebyte',
      Price: 1249.00,
      Id: 'guitS8N48',
      Quantity: 1,
      Image: '../../assets/ESPSnakebyte.jpg'
    },
  ]
  activeProduct = this.Guitars
  private addToCart(Id){
    if(this.cart.activeCart.find(product => product.Id === Id)){
      this.cart.activeCart.find(product => product.Id === Id).Quantity += 1;
      this.cart.activeCart.find(product => product.Id === Id).Price = ((this.activeProduct.find(product => product.Id === Id).Price) * (this.cart.activeCart.find(product => product.Id === Id).Quantity));
    } else {
      this.cart.activeCart.push(Object.assign({}, this.activeProduct.find(product => product.Id === Id)))
    }
    let newTotal = 0;
    this.cart.activeCart.forEach(function(product){
      newTotal += product.Price;
    });
    this.cart.total = newTotal;
    console.log(this.cart);
  }


  constructor() { }

  ngOnInit() {
  }

}
