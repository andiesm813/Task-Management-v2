import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { ChildViewComponent } from './child-view/child-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'child-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'list-view', component: ListViewComponent, data: { text: 'List View' } },
  { path: 'kanban-view', component: KanbanViewComponent, data: { text: 'Kanban View' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
