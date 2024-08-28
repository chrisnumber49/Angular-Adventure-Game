import { NgModule, isDevMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { DISPLAY_CONFIG_FEATURE_KEY, displayConfigReducer } from './+state/displayConfig.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: !isDevMode()
    }),
    StoreModule.forFeature(DISPLAY_CONFIG_FEATURE_KEY, displayConfigReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
