import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-new-project",
  templateUrl: "./new-project.component.html",
  styleUrls: ["./new-project.component.scss"]
})
export class NewProjectComponent implements OnInit {
  title: string;
  desc: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NewProjectComponent>
  ) {}

  ngOnInit() {
    this.title = this.data.title;
    this.desc = this.data.desc;
  }

  saveDialog() {
    this.dialogRef.close("dialog is close");
  }
}
