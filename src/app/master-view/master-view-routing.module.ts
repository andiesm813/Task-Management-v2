import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { ChildViewComponent } from './child-view/child-view.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: 'list-view', component: ListViewComponent, data: { text: 'List View' } }, { path: 'kanban-view', component: KanbanViewComponent, data: { text: 'Kanban View' } }, { path: '', redirectTo: 'child-view', pathMatch: 'full' }, { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
