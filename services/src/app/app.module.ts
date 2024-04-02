import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversestringComponent } from './reversestring/reversestring.component';
import { Demo1depenancyinjectionusedComponent } from './demo1depenancyinjectionused/demo1depenancyinjectionused.component';
// import { AgecalculatortaskComponent } from './agecalculatortask/AgecalculatortaskComponent';
import { Demo2Component } from './demo2/demo2.component';
import{HttpClientModule} from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { Demo3Component } from './demo3/demo3.component';
import { Customobserdatashowonbrower4Component } from './customobserdatashowonbrower4/customobserdatashowonbrower4.component'


@NgModule({
  declarations: [
    AppComponent,
    ReversestringComponent,
    Demo1depenancyinjectionusedComponent,
    // AgecalculatortaskComponent,
    Demo2Component,
    DemoComponent,
    Demo3Component,
    Customobserdatashowonbrower4Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // nt import auto its 3rd party go with manually import --->>> import{HttpClientModule} from '@angular/common/http'
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
