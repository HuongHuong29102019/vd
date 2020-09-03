import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus = [
    {name:'Trang chủ',url:'#',disabled: false, child:null},
    {name:'Các hãng sản xuất',url:'#',disabled: true,child:[{name:'Apple',url:'#'},{name:'SamSung',url:'#'},{name:'-',url:'#'},{name:'Vsmart',url:'#'},{name:'Bphone',url:'#'}]},
    {name:'Tin tức',url:'#',disabled: false,child:null},
    {name:'Trợ giúp',url:'#',disabled: true,child:null}  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}