import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NbLayoutModule,
  NbThemeModule,
  NbSidebarModule,
  NbButtonModule, NbMenuModule, NbCardModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import {NbEvaIconsModule} from "@nebular/eva-icons";

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // this will enable the default theme, you can change this by passing `{ name: 'dark' }` to enable the dark theme
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
