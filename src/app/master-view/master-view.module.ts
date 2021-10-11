import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { IgxCardModule, IgxButtonModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxNavbarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListViewComponent } from './list-view/list-view.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    ChildViewComponent,
    ListViewComponent,
    KanbanViewComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxIconModule,
    FormsModule,
    IgxAvatarModule,
    IgxListModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxButtonGroupModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}
