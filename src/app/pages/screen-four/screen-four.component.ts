import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-screen-four',
  templateUrl: './screen-four.component.html',
  styleUrls: ['./screen-four.component.scss'],

})
export class ScreenFourComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

    footerLinks = [
      { text: '会社情報', href: 'https://www.sompo-direct.co.jp/shisan_company/company.html' },
      { text: '勧誘方針', href: 'https://www.sompo-direct.co.jp/shisan_company/canvass.html' },
      { text: '個人情報保護宣言', href: 'https://www.sompo-direct.co.jp/shisan_company/privacy.html' },
      { text: 'サイトご利用にあたって', href: 'https://www.sompo-direct.co.jp/shisan_company/sitepolicy.html#goriyoukankyounitsuite' },
      { text: '各種資料のダウンロード', href: 'https://www.sompo-direct.co.jp/shisan_company/pdf.html' }
    ];
}