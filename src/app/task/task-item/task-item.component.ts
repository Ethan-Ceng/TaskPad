import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from "@angular/core";
import { itemAnim } from "../../anims/item.anim";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.scss"],
  animations: [itemAnim]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = "in";

  constructor() {}

  ngOnInit() {}

  @HostListener("mouseenter")
  onmouseenter() {
    this.widerPriority = "out";
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.widerPriority = "in";
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onChangBoxClick(ev: Event) {
    ev.stopPropagation();
  }
}
