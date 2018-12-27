import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { MaterialModule } from '../common/material.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [ProjectListComponent, ProjectItemComponent, NewProjectComponent, InviteComponent],
  entryComponents: [NewProjectComponent, InviteComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
  ]
})
export class ProjectModule { }
