import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScreenOneComponent } from "./pages/screen-one/screen-one.component";
import { ScreenTwoComponent } from "./pages/screen-two/screen-two.component";
import { ScreenThreeComponent } from "./pages/screen-three/screen-three.component";
import { ScreenFourComponent } from "./pages/screen-four/screen-four.component";

  let routes: Routes = [];
  routes.push({ path: "", redirectTo: "screen-one", pathMatch: "full" }),
  routes.push({ path: 'screen-one', component: ScreenOneComponent}),
  routes.push({ path: 'screen-two', component: ScreenTwoComponent}),
  routes.push({ path: 'screen-three', component: ScreenThreeComponent}),
  routes.push({ path: 'screen-four', component: ScreenFourComponent});
  
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
   })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
