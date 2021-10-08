import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { IgxIconModule, IgxAvatarModule, IgxListModule, IgxButtonModule, IgxCardModule, IgxNavbarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    ListViewComponent,
    KanbanViewComponent,
    ChildViewComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxListModule,
    IgxButtonModule,
    FormsModule,
    IgxCardModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxButtonGroupModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}
