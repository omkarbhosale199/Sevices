import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversestringComponent } from './reversestring/reversestring.component';
import { Demo1depenancyinjectionusedComponent } from './demo1depenancyinjectionused/demo1depenancyinjectionused.component';
import { AgecalculatortaskComponent } from './agecalculatortask/agecalculatortask.component';



@NgModule({
  declarations: [
    AppComponent,
    ReversestringComponent,
    Demo1depenancyinjectionusedComponent,
    AgecalculatortaskComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
