import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      task: [{
        id: 1,
        desc: '任务一：星巴克喝咖啡',
        owner: {
          id: 2,
          name: 'zhangsan',
          avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg'
        },
        dueDate: new Date(),
      }]
    },
    {
      id: 1,
      name: '待办',
      task: [{
        id: 1,
        desc: '任务一：星巴克喝咖啡',
        owner: {
          id: 2,
          name: 'zhangsan',
          avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg'
        },
        dueDate: new Date(),
      }]
    }, {
      id: 1,
      name: '待办',
      task: [{
        id: 1,
        desc: '任务一：星巴克喝咖啡',
        owner: {
          id: 2,
          name: 'zhangsan',
          avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg'
        },
        dueDate: new Date(),
      }]
    },
    {
      id: 1,
      name: '待办',
      task: [{
        id: 1,
        desc: '任务一：星巴克喝咖啡',
        owner: {
          id: 2,
          name: 'zhangsan',
          avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460746921,595173163&fm=26&gp=0.jpg'
        },
        dueDate: new Date(),
      }]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
