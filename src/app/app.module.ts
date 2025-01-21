import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import {
  DxcHeaderModule,
  DxcFooterModule,
  ThemeModule,
  DxcApplicationLayoutModule,
} from "@dxc-technology/halstack-angular";  
import { ScreenOneModule } from './pages/screen-one/screen-one.module';
import { ScreenTwoModule } from './pages/screen-two/screen-two.module';
import { ScreenThreeModule } from './pages/screen-three/screen-three.module';
import { ScreenFourModule } from './pages/screen-four/screen-four.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    DxcApplicationLayoutModule,
    ThemeModule,
    ScreenOneModule,
    ScreenTwoModule,
	  ScreenThreeModule,
    ScreenFourModule,
    DxcHeaderModule,
    DxcFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
