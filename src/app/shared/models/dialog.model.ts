export type DialogType = "warning" | "info" | "error";
export class DialogModel {
  constructor(
    public type: DialogType,
    public message: string[],
    public title?: string
  ) {}
}
