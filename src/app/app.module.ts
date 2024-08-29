import { NgModule, isDevMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { QUESTION_MAP_FEATURE_KEY, questionMapReducer } from './+state/routeSelect.reducer';
import { TreeViewComponent } from './components/tree-view.component/tree-view.component';
import { SelectionViewComponent } from './components/selection-view/selection-view.component';
import { ResultViewComponent } from './components/result-view/result-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    SelectionViewComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: !isDevMode()
    }),
    StoreModule.forFeature(QUESTION_MAP_FEATURE_KEY, questionMapReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
