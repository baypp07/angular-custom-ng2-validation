import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule} from 'ng2-validation';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CustomValidationComponent } from "./custom-validation/custom-validation.component";

@NgModule({
  imports: [BrowserModule, FormsModule, CustomFormsModule],
  declarations: [AppComponent, HelloComponent, CustomValidationComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
