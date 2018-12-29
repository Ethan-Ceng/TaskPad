import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-confirm-dialog",
  template: `
    <h3 mat-dialog-title>{{ title }}</h3>
    <div mat-dialog-content>{{ content }}</div>
    <div mat-dialog-action class="flex-row-between">
      <button
        type="button"
        mat-raised-button
        color="primary"
        (click)="onClick(true)"
      >
        保存
      </button>
      <button
        type="button"
        mat-raised-button
        mat-dialog-close
        (click)="onClick(false)"
      >
        取消
      </button>
    </div>
  `,
  styles: [
    `
      .flex-row-between {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .full-width {
        width: 100%;
      }
    `
  ]
})
export class ConfirmDialogComponent implements OnInit {
  title: string;
  content: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }
}
