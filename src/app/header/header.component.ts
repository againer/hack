import { Component, OnInit } from '@angular/core';

import { Header } from '../header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header: Header = {
    outfit: 'Moxion News',
  };

  constructor() {}

  ngOnInit(): void {}
}
