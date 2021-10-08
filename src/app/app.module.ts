import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { IgxIconModule, IgxAvatarModule, IgxListModule, IgxButtonModule, IgxCardModule, IgxNavbarModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    KanbanViewComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
