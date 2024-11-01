import { Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogType, DialogModel } from "../../models/dialog.model";

export class DialogComponent {
    public title: string = '';
    public message: string[];
    public filteredMessages: string[];
    public type: DialogType;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: DialogModel
    ) {
        this.dialogRef.addPanelClass("shared-confirmation-dialog");
        this.type = data.type;
        if (data.title) {
            this.title = data.title;
        }
        this.message = data.message;
        this.filteredMessages = data.message.slice(0, 5);
    }

    public onConfirm(): void {
        this.dialogRef.close(true);
    }

    public onDismiss(): void {
        this.dialogRef.close(false);
    }

    public showAllErrorMessages(): void {
        this.filteredMessages = this.message;
    }
}
