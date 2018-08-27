import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// node-graph
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NodeGraphComponent } from './node-graph/node-graph.component';
import { RaterComponent } from './rater/rater.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeGraphComponent,
    RaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // node-graph
    NgxGraphModule, // @swimlane/ngx-graph@4.1.1
    NgxChartsModule // @swimlane/ngx-charts@7.3.0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
