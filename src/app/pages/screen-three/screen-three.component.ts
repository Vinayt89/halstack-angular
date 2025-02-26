import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Option } from '@dxc-technology/halstack-angular';
import { GenericTextService } from "src/app/services/generic.text.service";

@Component({
  selector: 'app-screen-three',
  templateUrl: './screen-three.component.html',
  styleUrls: ['./screen-three.component.scss']
})
export class ScreenThreeComponent implements OnInit {
  messages: any = {};

  constructor(private router: Router, private generictextservice: GenericTextService) {}

  ngOnInit() {
    this.loadTextData('screen-three.json');
  }

  q3RadioBtnOptions = [
    { id: '', date: '2022年01月', desc:'（目安：3年前に新車で購入）', value: '' },
    { id: '', date: '2020年01月', desc:'（目安：5年前に新車で購入）', value: '' },
    { id: '', date: '2015年01月', desc:'（目安：10年前に新車で購入）', value: '' }

  ];

  q5RadioBtnOptions = [
    {id: '', label:'ラジオ', value:''},
    {id: '', label:'BS放送', value:''},
    {id: '', label:'CS放送 (有料衛星放送)', value:''},
    {id: '', label:'新聞', value:''},
    {id: '', label:'テレビ (地上波)', value:''},
    {id: '', label:'インターネットの クチコミ・SNS', value:''},
    {id: '', label:'インターネット広告 (PC)', value:''},
    {id: '', label:'インターネット広告 (スマートフォン)', value:''},
    {id: '', label:'一括見積りサイト', value:''},
    {id: '', label:'知人、友人からの紹介', value:''},
    {id: '', label:'セゾンカードの広告', value:''},
    {id: '', label:'店舗・代理店・チラシ などからご加入の方', value:''}
  ];

  licensePlates = [
    {
      id: 'plate1',
      imageUrl: 'assets/img/img_plate_01.png',
      color: '白地',
      code: '3',
      description: '普通乗用車'
    },
    {
      id: 'plate2',
      imageUrl: 'assets/img/img_plate_02.png',
      color: '白地',
      code: '5',
      description: '小型乗用車'
    },
    {
      id: 'plate3',
      imageUrl: 'assets/img/img_plate_03.png',
      color: '白地',
      code: '4',
      description: '小型貨物車'
    },
    {
      id: 'plate4',
      imageUrl: 'assets/img/img_plate_04.png',
      color: '黄地',
      code: '5, 7',
      description: '軽四輪乗用車'
    },
    {
      id: 'plate5',
      imageUrl: 'assets/img/img_plate_05.png',
      color: '黄地',
      code: '4, 6',
      description: '軽四輪貨物車'
    }
  ];

  q3Selectlabels = ['初度登録年月'];

  scrollToQ1Section(): void {
    const q1Section = document.getElementById('q1Section');
    if (q1Section) {
    const yOffset = 0;
    const yPosition = q1Section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }

  scrollToQ2Section(): void {
    const q2Section = document.getElementById('q2Section');

    if (q2Section) {
      const rect = q2Section.getBoundingClientRect();
      const yOffset = 0;
      const scrollPosition = rect.top + window.scrollY + yOffset;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }

  isQ3Checked: boolean = false;
  q3Checked(event: Event): void {
    this.isQ3Checked = !this.isQ3Checked;
  }

  goToPreviousScreen() {
    this.router.navigate(['/screen-two'], {
      state: { highlightHeader2: true }
    });
  }

  goToNextScreen() {
    this.router.navigate(['/screen-four'], {
  });
  }

  selectOptions:  Option[]  = [{ label: "BMW", value: "BMW" }];
  selectedOption1: string = '';  
  selectedOption2: string = '';  
  isTableVisible: boolean = false; 

  onSelectedChange(){
    this.isTableVisible = this.selectedOption1.trim() !== ' ' && this.selectedOption2.trim() !== ' ';
  }

  q2TableRadioBtnOptions = [
    {id: '',label:'12AP20', value:'12AP20'},
    {id: '',label:'12AR30', value:'12AR30'},
    {id: '',label:'12AV20', value:'12AV20'},
    {id: '',label:'12AW30', value:'12AW30'},
    {id: '',label:'12CF89A', value:'12CF89A'},
    {id: '',label:'12CF89S', value:'12CF89S'},
    {id: '',label:'12CM20', value:'12CM20'},
    {id: '',label:'12DM30', value:'12DM30'},
    {id: '',label:'12EF20', value:'12EF20'},
    {id: '',label:'12ET44', value:'12ET44'},
  ];

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

  sidePanelLinks = [
    { text: '福祉車両の取扱いは？', href: 'https://faq-ins-saison.dga.jp/car/otona/faq_detail.html?id=15696' },
    { text: '該当する車名がない場合は？', href: 'https://faq-ins-saison.dga.jp/car/otona/faq_detail.html?id=1434' },
    { text: '該当する型式が出てこない場合は？', href: 'https://faq-ins-saison.dga.jp/car/otona/faq_detail.html?id=1475' },
    { text: '車のタイプとは何ですか？また、どこに書いてありますか？', href: 'https://faq-ins-saison.dga.jp/car/otona/faq_detail.html?id=1443' },
    { text: '改造車とは何ですか？', href: 'https://faq-ins-saison.dga.jp/glossary/faq_detail.html?id=1079' },
    {text:'並行輸入車とは何ですか？', href:'https://faq-ins-saison.dga.jp/glossary/faq_detail.html?id=1080'},
    {text:'使用目的の決め方とは？', href:'https://faq-ins-saison.dga.jp/car/otona/faq_detail.html?id=1350'},
    {text:'通勤・通学を選択する場合とは？', href:'https://faq-ins-saison.dga.jp/car/otona/faq_detail.html?id=1520'},
    {text:'車を“送迎”で利用している場合の使用目的は？', href:'https://faq-ins-saison.dga.jp/car/otona/faq_detail.html?id=1519'}
  ];

  footerLinks = [
    { text: '会社情報', href: 'https://www.sompo-direct.co.jp/shisan_company/company.html' },
    { text: '勧誘方針', href: 'https://www.sompo-direct.co.jp/shisan_company/canvass.html' },
    { text: '個人情報保護宣言', href: 'https://www.sompo-direct.co.jp/shisan_company/privacy.html' },
    { text: 'サイトご利用にあたって', href: 'https://www.sompo-direct.co.jp/shisan_company/sitepolicy.html#goriyoukankyounitsuite' },
    { text: '各種資料のダウンロード', href: 'https://www.sompo-direct.co.jp/shisan_company/pdf.html' }
  ];
}

