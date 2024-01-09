import { Td } from "@chakra-ui/react";
import { get } from "lodash";
import { IColumnType } from "@/components/App/Table/TableLayout";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

export function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
  const value = get(item, column.key);
  var rowAlign:any =column.rowAlign;
  return (
    <Td padding="4"  textAlign={rowAlign}  borderTop="1px solid #f2f4f9">{column.render ? column.render(column, item) : value}</Td>
  );
}