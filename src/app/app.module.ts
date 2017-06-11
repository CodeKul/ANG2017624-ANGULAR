import { WalletService } from './services/wallet.service';
import { RemoteService } from './services/remote.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CodekulComponent } from './codekul/codekul.component';
import { AndroidComponent } from './android/android.component';
import { AngComponent } from './codekul/ang/ang.component';
import { ThingsComponent } from './android/things.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IpComponent } from './databinding/ip.component';
import { OpComponent } from './databinding/op.component';
import { FormerComponent } from './databinding/former.component';
import { GrasperComponent } from './databinding/grasper.component';
import { ViewContentChildComponent } from './view-content-child/view-content-child.component';
import { ViewChildComponent } from './view-content-child/view-child.component';
import { ContentChildComponent } from './view-content-child/content-child.component';
import { DirectivesComponent } from './directives/directives.component';
import { ResizerDirective } from './directives/resizer.directive';
import { NoIfDirective } from './directives/no-if.directive';
import { ServicesComponent } from './services/services.component';
import { RemOneComponent } from './services/rem-one.component';
import { RemTwoComponent } from './services/rem-two.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    CodekulComponent,
    AndroidComponent,
    AngComponent,
    ThingsComponent,
    DatabindingComponent,
    IpComponent,
    OpComponent,
    FormerComponent,
    GrasperComponent,
    ViewContentChildComponent,
    ViewChildComponent,
    ContentChildComponent,
    DirectivesComponent,
    ResizerDirective,
    NoIfDirective,
    ServicesComponent,
    RemOneComponent,
    RemTwoComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RemoteService, WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
