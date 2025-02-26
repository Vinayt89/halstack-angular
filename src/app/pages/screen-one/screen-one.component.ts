import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { GenericTextService } from "src/app/services/generic.text.service";

@Component({
  selector: "app-screen-one",
  templateUrl: "./screen-one.component.html",
  styleUrls: ["./screen-one.component.scss"],
})
export class ScreenOneComponent implements OnInit {
  messages: any = {};
  underlined: boolean = true;
  newWindow: boolean = true;
  inheritColor: boolean = true;
  activeImage: number | null = null;
  
  constructor(private router: Router,private generictextservice: GenericTextService) {}

  goToScreenTwo() {
    this.router.navigate(['/screen-two']);
  }

  ngOnInit() {
    this.loadTextData('screen-one.json');
  }

   isSectionVisible: boolean = false;
   isImageVisible: boolean = false;
   selectedOption: string = 'close';
   
   toggleSection(): void {
     this.isSectionVisible = !this.isSectionVisible;
   }

   toggleImageSection(): void {
    this.isImageVisible = !this.isImageVisible;
  }

  selectedSection: number | null = null;
  showSection(section: number): void {
    this.selectedSection = section;
    this.isSectionVisible = !this.isSectionVisible;
  }

  setActiveImage(imageNumber: number) {
    if (this.activeImage === imageNumber) {
      this.activeImage = null;
    } else {
      this.activeImage = imageNumber;
    }
  }

  q1Selectlabels = ['生年月日'];

  q2RadioBtn1Options = [
    { id: '', label: 'ゴールド', value: '' }
    ,{ id: '', label: 'ブルー', value: '' }
    ,{ id: '', label: 'グリーン', value: '' }
  ];

  q2RadioBtn2Options = [
    { id: '', label: '加入している', value: '加入している' }
    ,{ id: '', label: '加入していない', value: '加入していない' }
  ];

  q2RadioBtn3Options = [
    { id: '', label: '日常・レジャー', value: '日常・レジャー' }
    ,{ id: '', label: '通勤・通学', value: '通勤・通学' }
    ,{ id: '', label: '業務使用', value: '業務使用' }
  ];

  q2RadioBtn3SubOptions = [
    { id: '', label: '3,000km以下', value: '3,000km以下' }
    ,{ id: '', label: '3,000km超～5,000km以下', value: '3,000km超～5,000km以下' }
    ,{ id: '', label: '5,000km超～10,000km以下', value: '5,000km超～10,000km以下' }
    ,{ id: '', label: '10,000km超～15,000km以下', value: '10,000km超～15,000km以下' }
    ,{ id: '', label: '15,000km超', value: '15,000km超' }
  ];

  q2RadioBtn4Options = [
    { id: 1, label: '補償範囲：① 主に運転される方】のみ運転"', value: '補償範囲：①' }
    ,{ id: 2, label: '補償範囲：①+② 【主に運転される方・配偶者・別居の未婚のお子さま】のみ運転', value: '補償範囲：①+②' }
    ,{ id: 3, label: '補償範囲：①+②+③ 【同居のお子さま】以外の方が運転', value: '補償範囲：①+②+③' }
    ,{ id: 4, label: '補償範囲：①+②+③+④ 【同居のお子さま（その方の配偶者含む）】も含め運転', value: '補償範囲：①+②+③+④' }
  ];

  selectedValue: string = '';
  visibleSection: string = '';
  q4ClickEvent(value: string) {
    switch (value) {
      case '日常・レジャー':
        this.visibleSection = 'q4subsection';
        this.showSection(1);
        break;
      case '通勤・通学':
        this.visibleSection = 'q4subsection';
        this.showSection(1);
        this.moveArrowToCenter();
        break;
      case '業務使用':
        this.visibleSection = 'q4subsection';
        this.showSection(2);
        this.moveArrowToRight();
        break;
      default:
        this.visibleSection = '';
    }
  }
  q5ClickEvent(value: string) {
    switch (value) {
      case '補償範囲：①':
        this.setActiveImage(1);
        break;
      case '補償範囲：①+②':
        this.setActiveImage(2);
        break;
      case '補償範囲：①+②+③':
        this.setActiveImage(3);
        break;
      case '補償範囲：①+②+③+④':
        this.setActiveImage(4);
        break;
    }
  }

  isMovedRight = false;
  moveArrowToRight() {
    this.isMovedRight = true;
  }

  isMovedCenter = false;
  moveArrowToCenter() {
    this.isMovedCenter = true;
  }

  loadTextData(fileName: string) {
    this.generictextservice.readJSONFile(fileName).subscribe(
      (data) => {
        this.messages = data;
      },
      (error) => {
        console.error('Error loading text file:', error);
      }
    );
  }

  footerLinks = [
    { text: '会社情報', href: 'https://www.sompo-direct.co.jp/shisan_company/company.html' },
    { text: '勧誘方針', href: 'https://www.sompo-direct.co.jp/shisan_company/canvass.html' },
    { text: '個人情報保護宣言', href: 'https://www.sompo-direct.co.jp/shisan_company/privacy.html' },
    { text: 'サイトご利用にあたって', href: 'https://www.sompo-direct.co.jp/shisan_company/sitepolicy.html#goriyoukankyounitsuite' },
    { text: '各種資料のダウンロード', href: 'https://www.sompo-direct.co.jp/shisan_company/pdf.html' }
  ];
}