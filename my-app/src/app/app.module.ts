import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { MouseCoordinationComponent } from './mouse-coordination/mouse-coordination.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    ButtonComponent,
    LinkComponent,
    MouseCoordinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
