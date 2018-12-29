import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-project-item",
  templateUrl: "./project-item.component.html",
  styleUrls: ["./project-item.component.scss"]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() launchInviteDailog: EventEmitter<any> = new EventEmitter();
  @Output() launchEditDailog: EventEmitter<any> = new EventEmitter();
  @Output() onDel: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onInviteClick() {
    this.launchInviteDailog.emit();
  }

  onEditClick() {
    this.launchEditDailog.emit();
  }

  onDelClick() {
    this.onDel.emit();
  }
}
