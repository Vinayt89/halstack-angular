import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcBoxModule } from '@dxc-technology/halstack-angular';
import { ScreenFourComponent } from './screen-four.component';
import { FormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import {  
  DxcSelectModule,
  DxcRadioModule,
  DxcCheckboxModule,
  DxcLinkModule,
  DxcButtonModule,
  DxcTableModule
} from "@dxc-technology/halstack-angular";


@NgModule({
  declarations: [ScreenFourComponent],  // Declare the component here
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
    DxcTableModule,
    HttpClientModule
  ],
  exports: [ScreenFourComponent] 
})
export class ScreenFourModule { }
