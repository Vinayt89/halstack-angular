import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcBoxModule } from '@dxc-technology/halstack-angular';
import { ScreenTwoComponent } from './screen-two.component';
import { FormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import {  
  DxcSelectModule,
  DxcRadioModule,
  DxcCheckboxModule,
  DxcLinkModule,
  DxcButtonModule,
} from "@dxc-technology/halstack-angular";


@NgModule({
  declarations: [ScreenTwoComponent],  // Declare the component here
  imports: [
    CommonModule,
    DxcBoxModule,
    DxcSelectModule,
    DxcRadioModule,
    DxcCheckboxModule,
    // DxcLinkModule,
    DxcButtonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [ScreenTwoComponent] 
})
export class ScreenTwoModule { }
