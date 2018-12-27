import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  public projects: Array<any> = [
    {
      name: "企业写作平台",
      desc: "这是一个企业内部平台",
      coverImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg",
    }, {
      name: "企业写作平台",
      desc: "这是一个企业内部平台",
      coverImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg",
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: 'this is a dialog component!'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openInviteDialog() {
    console.log('邀请');
    this.dialog.open(InviteComponent);
  }

}
