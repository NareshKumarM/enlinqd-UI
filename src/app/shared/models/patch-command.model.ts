export interface PatchCommand {
    command: string;
    value?: string | Date | boolean | number;
    patchCommandFilters?: PatchCommandFilter[];
}

export interface PatchCommandFilter {
    filter: string;
    value: string;
}