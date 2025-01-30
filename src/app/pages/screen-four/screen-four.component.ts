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

  faqs = [
    { question: 'ダイレクト自動車保険は、なぜ保険料がとても安いのですか？' },
    { question: '初めてインターネットで手続きをするので補償をきちんと選べているか不安です...' },
    { question: 'インターネットでの契約手続きが不安です・・' }
  ];

  bottomSectionColumn1 = ['車名:', '型式:', '初度登録年月:', '使用目的:', '前年走行距離:'];
  bottomSectionColumn2 = ['主な使用地:', '主に使用される方 (記名被保険者) の生年月日:', '免許証の色:', '新しい等級:', '事故有係数適用期間:', '同居のお子様の運転:'];
  bottomSectionColumn3 = ['運転者の範囲:', '保険始期日:', '保険期間:', '現在ご加入の保険会社名:', 'ご契約期間内の事故件数:'];
  
  footerLinks = [
      { text: '会社情報', href: 'https://www.sompo-direct.co.jp/shisan_company/company.html' },
      { text: '勧誘方針', href: 'https://www.sompo-direct.co.jp/shisan_company/canvass.html' },
      { text: '個人情報保護宣言', href: 'https://www.sompo-direct.co.jp/shisan_company/privacy.html' },
      { text: 'サイトご利用にあたって', href: 'https://www.sompo-direct.co.jp/shisan_company/sitepolicy.html#goriyoukankyounitsuite' },
      { text: '各種資料のダウンロード', href: 'https://www.sompo-direct.co.jp/shisan_company/pdf.html' }
    ];
}