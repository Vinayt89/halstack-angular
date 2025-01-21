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
  
 /* const routes: Routes = [
    { path: '', redirectTo: '/screen-one', pathMatch: 'full' },
    { path: 'screen-one', loadChildren: () => import('./pages/screen-one/screen-one.module').then(m => m.ScreenOneModule) },
    { path: 'screen-two', loadChildren: () => import('./pages/screen-two/screen-two.module').then(m => m.ScreenTwoModule) },
    { path: 'screen-three', loadChildren: () => import('./pages/screen-three/screen-three.module').then(m => m.ScreenThreeModule) },
    { path: 'screen-four', loadChildren: () => import('./pages/screen-four/screen-four.module').then(m => m.ScreenFourModule) },
    { path: '**', redirectTo: '/screen-one' }, // Fallback route
  ];
  */

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
