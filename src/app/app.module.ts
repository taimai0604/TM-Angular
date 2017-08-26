import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // import animatin

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { PropertyEventBindingComponent } from './property-event-binding/property-event-binding.component';
import { ClassStyleCssComponent } from './class-style-css/class-style-css.component';

import { DataService } from './data.service';
import { DemoServicesComponent } from './demo-services/demo-services.component'; // import service

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    PropertyEventBindingComponent,
    ClassStyleCssComponent,
    DemoServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
