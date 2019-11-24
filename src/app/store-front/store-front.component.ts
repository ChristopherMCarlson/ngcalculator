import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.css']
})
export class StoreFrontComponent implements OnInit {

  cart = [];
  Guitars = [
    {
      Name: 'Gibson SG Standard',
      Price: '1499.00',
      Id: 'guitSPHVP',
      Image: '../../assets/GibsonSG.jpg'
    },
    {
      Name: 'Gibson Firebird',
      Price: '1999.00',
      Id: 'guitISZNN',
      Image: '../../assets/GibsonFirebird.jpg'
    },
    {
      Name: 'B C Rich Mockingbird',
      Price: '1499.00',
      Id: 'guitE5N3C',
      Image: '../../assets/BCRichMockingbird.jpg'
    },
    {
      Name: 'Dean Cadi',
      Price: '849.00',
      Id: 'guitM9LBE',
      Image: '../../assets/DeanCadi.jpg'
    },
    {
      Name: 'Ibanez Iceman',
      Price: '899.00',
      Id: 'guitWOMIU',
      Image: '../../assets/IbanezIceman.jpg'
    },
    {
      Name: 'ESP Snakebyte',
      Price: '1249.00',
      Id: 'guitS8N48',
      Image: '../../assets/ESPSnakebyte.jpg'
    },
  ]
  activeProduct = this.Guitars


  constructor() { }

  ngOnInit() {
  }

}
