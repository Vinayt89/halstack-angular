import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.scss'],

})
export class ScreenTwoComponent implements OnInit {

  @ViewChild('headerimg2') headerimg2!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  activeTab = 1;
  selectTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }

  isQ3Checked: boolean = false;
  toggleQ3Checked(event: Event): void {
    this.isQ3Checked = !this.isQ3Checked;
  }

  isQ4Checked: boolean = false;
  toggleQ4Checked(event: Event): void {
    this.isQ4Checked = !this.isQ4Checked;
  }  

  q2RadioBtnOptions = [
    { id: 'q1RadioBtn1', label: '加入している', value: '加入している' }
    ,{ id: 'q1RadioBtn2', label: '加入していない', value: '加入していない' }
  ];

  q2RadioBtn2Options = [
    { id: 'q1RadioBtn1', caption: 'いいえ、', desc: '現在ご加入の自動車保険を解約せず、満期日で「おとなの自動車保険」に加入する', value: '' }
    ,{ id: 'q1RadioBtn2', caption: 'はい、', desc: '現在ご加入の自動車保険を解約して「おとなの自動車保険」に加入する', value: '' }
  ];

  selectedOption: string = '';
  onSelectionChange(value: string) {
    this.selectedOption = value;
    console.log('Selected Option:', this.selectedOption);
  }

  q2RadioBtnPopupOptions = [
    { id: 'q1RadioBtn3', label: '現在ご加入の自動車保険を解約せず、満期日で「おとなの自動車保険」に加入する'
      , value: 'いいえ' }
    ,{ id: 'q1RadioBtn4', label: '現在ご加入の自動車保険を解約して 「おとなの自動車保険」に加入する', value: 'はい' }
  ];

  q2RadioBtnPopupSelected: string = 'no';

  selectOption(option: string) {
    this.q2RadioBtnPopupSelected = option;
  }

  q2RadioBtn3Options = [
    { id: 'sonny', label: 'ソニー損保', value: 'sonny' },
    { id: 'axa', label: 'アクサ損保', value: 'axa' },
    { id: 'sbi', label: 'SBI損保', value: 'sbi' },
    { id: 'edesign', label: 'イーデザイン損保', value: 'edesign' },
    { id: 'mitsui', label: '三井ダイレクト損害保険', value: 'mitsui' },
    { id: 'japan', label: '損保ジャパン (旧損保ジャパン日本興亜)', value: 'japan' },
    { id: 'tokio', label: '東京海上日動', value: 'tokio' },
    { id: 'sumitomo', label: '三井住友海上', value: 'sumitomo' },
    { id: 'aioi', label: 'あいおいニッセイ同和損保', value: 'aioi' },
    { id: 'sompo', label: 'ＳＯＭＰＯダイレクト（おとなの自動車保険/旧セゾン自動車火災保険）', value: 'sompo' },
    { id: 'other', label: 'その他の保険会社', value: 'other' },
    {id: '', label:'わからない', value: ''}
  ];

  q2Selectlabels = ['満期日'];
  
  q2RadioBtn4Options = [
    { id: '', label: '事故はない', value: '' },
    { id: '', label: '事故あり（1件のみ）', value: '' },
    { id: '', label: '事故あり（2件以上）', value: '' },
  ];

  q2RadioBtn5Options = [
    { id: '', label: 'いいえ', value: '' }
    ,{ id: '', label: 'はい', value: '' }
  ];

  goToPreviousScreen() {
    this.router.navigate(['/screen-one'], {
      state: { highlightHeader2: true }
    });
  }

  goToNextScreen() {
    this.router.navigate(['/screen-three'], {
  });
  }

  sidePanelLinks = [
    { text: '中断証明書とは？', href: 'https://faq-ins-saison.dga.jp/glossary/faq_detail.html?id=1084' },
    { text: '「満期日」とは何ですか？', href: 'https://faq-ins-saison.dga.jp/glossary/faq_detail.html?id=1287' },
    { text: '「現在の等級」とは、何ですか？', href: 'https://faq-ins-saison.dga.jp/glossary/faq_detail.html?id=1447' },
    { text: '情報交換制度とは？', href: 'https://faq-ins-saison.dga.jp/glossary/faq_detail.html?id=1098' },
    { text: 'ノーカウント事故とは？', href: 'https://faq-ins-saison.dga.jp/car/otona/faq_detail.html?id=8156' }
  ];
  
  footerLinks = [
    { text: '会社情報', href: 'https://www.sompo-direct.co.jp/shisan_company/company.html' },
    { text: '勧誘方針', href: 'https://www.sompo-direct.co.jp/shisan_company/canvass.html' },
    { text: '個人情報保護宣言', href: 'https://www.sompo-direct.co.jp/shisan_company/privacy.html' },
    { text: 'サイトご利用にあたって', href: 'https://www.sompo-direct.co.jp/shisan_company/sitepolicy.html#goriyoukankyounitsuite' },
    { text: '各種資料のダウンロード', href: 'https://www.sompo-direct.co.jp/shisan_company/pdf.html' }
  ];
  
  isSpanClicked: boolean = false;
  onSpanClicked(event: Event): void {
    this.isSpanClicked = !this.isSpanClicked;
  }

  q4RadioBtnOptions = [
    { id: '', desc: '保険契約13年目程度', grade:'18等級 ', value: '' },
    { id: '', desc: '保険契約9年目程度', grade:'14等級', value: '' },
    { id: '', desc: '保険契約5年目程度', grade:'10等級', value: '' },
    {id:'', desc:'保険契約2年目程度', grade:'7等級', value:''}
  ];
}

