import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { StoreModule } from '@ngrx/store';
import { counterReduccer } from './counter/counter.reducer';
import { CustomIncrementCounterComponent } from './counter/custom-increment-counter/custom-increment-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomIncrementCounterComponent
  ],
  imports: [
    BrowserModule, FormsModule, StoreModule.forRoot({ count: counterReduccer }),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
