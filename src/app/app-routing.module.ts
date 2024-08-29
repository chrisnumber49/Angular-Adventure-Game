import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionViewComponent } from './components/selection-view/selection-view.component';
import { ResultViewComponent } from './components/result-view/result-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'selection', pathMatch: 'full' },
  { path: 'selection', component: SelectionViewComponent },
  { path: 'result', component: ResultViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
