import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-screen-one",
  templateUrl: "./screen-one.component.html",
  styleUrls: ["./screen-one.component.scss"],
})
export class ScreenOneComponent implements OnInit {
  imgDxc: string;

  underlined: boolean = true;
  newWindow: boolean = true;
  inheritColor: boolean = true;
  activeImage: number | null = null;

  q3Radio1: boolean = false;
  q3Radio2: boolean = false;
  q4Radio1: boolean = false;
  q4Radio2: boolean = false;
  q4Radio3: boolean = false;

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

  yearOptions = Array.from({ length: 101 }, (_, i) => ({
    label: `${1980 + i}`,
    value: 1980 + i,
  }));
  monthOptions = Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }));
  dayOptions = Array.from({ length: 31 }, (_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }));

  adjustDropdownPosition(type: string) {
    setTimeout(() => {
      const dropdown = document.querySelector('.dxc-select-dropdown') as HTMLElement;

      if (dropdown) {
        const triggerElement = document.querySelector(`.select-container dxc-select[label="${type}"]`) as HTMLElement;

        if (triggerElement) {
          const triggerRect = triggerElement.getBoundingClientRect();

          dropdown.style.position = 'absolute';
          dropdown.style.top = `${triggerRect.top - dropdown.offsetHeight}px`; // Place above
          dropdown.style.left = `${triggerRect.left}px`; // Align with trigger
          dropdown.style.zIndex = '1000';
        }
      }
    }, 50); // Delay to allow dropdown to render
  }

  onYearChange(event: any) {
    console.log('Year selected:', event.value);
  }

  onMonthChange(event: any) {
    console.log('Month selected:', event.value);
  }

  onDayChange(event: any) {
    console.log('Day selected:', event.value);
  }

   isSectionVisible: boolean = false;
   isImageVisible: boolean = false;
   selectedOption: string = 'close'; // Default option
   
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

  footerLinks = [
    { text: '会社情報', href: 'https://www.sompo-direct.co.jp/shisan_company/company.html' },
    { text: '勧誘方針', href: 'https://www.sompo-direct.co.jp/shisan_company/canvass.html' },
    { text: '個人情報保護宣言', href: 'https://www.sompo-direct.co.jp/shisan_company/privacy.html' },
    { text: 'サイトご利用にあたって', href: 'https://www.sompo-direct.co.jp/shisan_company/sitepolicy.html#goriyoukankyounitsuite' },
    { text: '各種資料のダウンロード', href: 'https://www.sompo-direct.co.jp/shisan_company/pdf.html' }
  ];
}