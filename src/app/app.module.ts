import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import the DropDownTreeModule for the DropDownTree component
import { DropDownTreeModule, MultiSelectModule  } from '@syncfusion/ej2-angular-dropdowns';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DropDownTreeModule ,
    MultiSelectModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
