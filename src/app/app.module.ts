import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Army1Component } from './army1/army1.component';
import { ChildArmy1Component } from './child-army1/child-army1.component';
import { CustomDirDirective } from './Directives/custom-dir.directive';
import { Angular13Component } from './angular13/angular13.component';
import { CurrencyPipe } from './Pipes/currency.pipe';
import { BetterDirectiveDirective } from './Directives/better-directive.directive';
import { NgIfDirective } from './Directives/ng-if.directive';
import { MaxComponent } from './max/max.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { MaxHttpComponent } from './max-http/max-http.component';
import { HttpClientModule } from '@angular/common/http';
import { SignalsComponent } from './signals/signals.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MaxFormsTempComponent } from './max-forms-temp/max-forms-temp.component';
import { MaxFormsRactiveComponent } from './max-forms-ractive/max-forms-ractive.component';

@NgModule({
  declarations: [
    AppComponent,
    Army1Component,
    ChildArmy1Component,
    CustomDirDirective,
    Angular13Component,
    CurrencyPipe,
    BetterDirectiveDirective,
    NgIfDirective,
    MaxComponent,
    FilterPipe,
    MaxHttpComponent,
    SignalsComponent,
    MaxFormsTempComponent,
    MaxFormsRactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
