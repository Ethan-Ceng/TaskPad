import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  members: Array<any> = [
    {
      id: 1,
      name: 'one'
    },
    {
      id: 2,
      name: 'two'
    },
    {
      id: 3,
      name: 'three'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  displayUser(user: { id: string; name: string }) {
    return user ? user.name : '';
  }

}
