import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerLinks: Link[] = [
    {
      url: '',
      description: 'Quem Somos',
    },
    {
      url: '',
      description: 'Produtos',
    },
    {
      url: '',
      description: 'Contato',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
