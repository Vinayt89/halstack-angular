import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcBoxModule } from '@dxc-technology/halstack-angular';
import { ScreenThreeComponent } from './screen-three.component';
import { FormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon';


import {  
  DxcSelectModule,
  DxcRadioModule,
  DxcCheckboxModule,
  DxcLinkModule,
  DxcButtonModule,
} from "@dxc-technology/halstack-angular";


@NgModule({
  declarations: [ScreenThreeComponent],  // Declare the component here
  imports: [
    CommonModule,
    DxcBoxModule,
    DxcSelectModule,
    DxcRadioModule,
    DxcCheckboxModule,
    // DxcLinkModule,
    DxcButtonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [ScreenThreeComponent] 
})
export class ScreenThreeModule { }
