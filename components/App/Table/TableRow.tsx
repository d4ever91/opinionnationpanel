import { Tr } from "@chakra-ui/react";
import { IColumnType } from "@/components/App/Table/TableLayout";
import { TableRowCell } from "@/components/App/Table/TableRowCell";

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export function TableRow<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <Tr key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </Tr>
      ))}
    </>
  );
}