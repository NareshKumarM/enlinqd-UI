export interface TableColumn<T> {
    columnDef: string;
    header: string;
    image: boolean;
    cell: (element: T) => string | number;
  }