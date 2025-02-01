import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ScreenOneComponent } from "./screen-one.component";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {
  DxcBoxModule,
  DxcBoxComponent,
  DxcTagModule,
  DxcTagComponent,
  DxcHeadingComponent,
  DxcHeadingModule,
  DxcSelectModule,
  DxcRadioModule,
  DxcLinkModule,
  DxcButtonModule
} from "@dxc-technology/halstack-angular";


@NgModule({
  declarations: [
    ScreenOneComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DxcBoxModule,
    DxcTagModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    DxcHeadingModule,
    DxcSelectModule,
    DxcRadioModule,
    DxcLinkModule,
    DxcButtonModule,
    HttpClientModule
  ],
  exports: [ScreenOneComponent],
  entryComponents: [DxcBoxComponent, DxcTagComponent, DxcHeadingComponent],
})
export class ScreenOneModule {}
