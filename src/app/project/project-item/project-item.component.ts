import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener
} from "@angular/core";
import { cardAnim } from "../../anims/card.anim";

@Component({
  selector: "app-project-item",
  templateUrl: "./project-item.component.html",
  styleUrls: ["./project-item.component.scss"],
  animations: [cardAnim]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() launchInviteDailog: EventEmitter<any> = new EventEmitter();
  @Output() launchEditDailog: EventEmitter<any> = new EventEmitter();
  @Output() onDel: EventEmitter<any> = new EventEmitter();
  @HostBinding("@card") cardState = "out";

  constructor() {}

  ngOnInit() {}

  @HostListener("mouseenter")
  onmouseenter() {
    this.cardState = "hover";
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.cardState = "out";
  }

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
