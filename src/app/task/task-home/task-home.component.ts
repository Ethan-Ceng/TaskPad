import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { NewTaskComponent } from "../new-task/new-task.component";
import { CopyTaskComponent } from "../copy-task/copy-task.component";
import { ConfirmDialogComponent } from "src/app/common/confirm-dialog/confirm-dialog.component";
import { NewTaskListComponent } from "../new-task-list/new-task-list.component";

@Component({
  selector: "app-task-home",
  templateUrl: "./task-home.component.html",
  styleUrls: ["./task-home.component.scss"]
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          desc: "任务一：星巴克喝咖啡",
          completed: true,
          priority: 3,
          owner: {
            id: 2,
            name: "zhangsan",
            avatar:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg"
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: "任务二：星巴克喝咖啡",
          completed: true,
          priority: 3,
          owner: {
            id: 2,
            name: "zhangsan",
            avatar:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg"
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ]
    },
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          desc: "任务一：星巴克喝咖啡",
          completed: true,
          priority: 2,
          owner: {
            id: 2,
            name: "zhangsan",
            avatar:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg"
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 1,
      name: "待办",
      completed: false,
      priority: 3,
      tasks: [
        {
          id: 1,
          desc: "任务一：星巴克喝咖啡",
          owner: {
            id: 2,
            name: "zhangsan",
            avatar:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg"
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          desc: "任务一：星巴克喝咖啡",
          completed: false,
          priority: 1,
          owner: {
            id: 2,
            name: "zhangsan",
            avatar:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg"
          },
          dueDate: new Date()
        }
      ]
    }
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      data: { title: "新建任务" }
    });
  }

  launchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }

  launchUpdateTaskDialog(task) {
    this.dialog.open(NewTaskComponent, {
      data: { title: "修改任务", task: task }
    });
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "删除列表",
        content: "列表删除后不可恢复，确认删除该列表吗？"
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: { title: "修改列表名称" }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  openNewTaskListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: { title: "新建列表" }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}
