import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-screen-one",
  templateUrl: "./screen-one.component.html",
  styleUrls: ["./screen-one.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ScreenOneComponent implements OnInit {
  imgDxc: string;

  underlined: boolean = true;
  newWindow: boolean = true;
  inheritColor: boolean = true;
  activeImage: number | null = null;
  
  constructor(private router: Router) {}

  goToScreenTwo() {
    this.router.navigate(['/screen-two'], {
      state: { highlightHeader2: true }
    });
  }

  componentsMargin = {
    bottom: 'large'
  }

  components: Array<any>;
  default:boolean;

  responsiveClass: string;
  innerWidth;

  responsiveSizes = {
    mobileSmall: "320",
    mobileMedium: "375",
    mobileLarge: "425",
    tablet: "768",
    laptop: "1024",
    desktop: "1440"
  }
  boxMargin={ top: "large", bottom: 'large'};
  boxPadding = 'large';

  ngOnInit() {
    this.imgDxc = "assets/img/dxclogo.svg";
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

  footerLinks = [
    { text: '会社情報', href: 'https://www.sompo-direct.co.jp/shisan_company/company.html' },
    { text: '勧誘方針', href: 'https://www.sompo-direct.co.jp/shisan_company/canvass.html' },
    { text: '個人情報保護宣言', href: 'https://www.sompo-direct.co.jp/shisan_company/privacy.html' },
    { text: 'サイトご利用にあたって', href: 'https://www.sompo-direct.co.jp/shisan_company/sitepolicy.html#goriyoukankyounitsuite' },
    { text: '各種資料のダウンロード', href: 'https://www.sompo-direct.co.jp/shisan_company/pdf.html' }
  ];
}