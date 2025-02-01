import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { GenericTextService } from "src/app/services/generic.text.service";

@Component({
  selector: "app-screen-one",
  templateUrl: "./screen-one.component.html",
  styleUrls: ["./screen-one.component.scss"],
})
export class ScreenOneComponent implements OnInit {
  imgDxc: string;
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
    this.imgDxc = "assets/img/dxclogo.svg";
    this.loadTextData('screen-one.json');
  }

   isSectionVisible: boolean = false;
   isImageVisible: boolean = false;
   selectedOption: string = 'close';

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

  step = 1;  // Current step
  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }
  
  q1Selectlabels = ['生年月日'];

  footerLinks = [
    { text: '会社情報', href: 'https://www.sompo-direct.co.jp/shisan_company/company.html' },
    { text: '勧誘方針', href: 'https://www.sompo-direct.co.jp/shisan_company/canvass.html' },
    { text: '個人情報保護宣言', href: 'https://www.sompo-direct.co.jp/shisan_company/privacy.html' },
    { text: 'サイトご利用にあたって', href: 'https://www.sompo-direct.co.jp/shisan_company/sitepolicy.html#goriyoukankyounitsuite' },
    { text: '各種資料のダウンロード', href: 'https://www.sompo-direct.co.jp/shisan_company/pdf.html' }
  ];
}