import { TableContainer, Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import { TableHeader } from "@/components/App/Table/TableHeader";
import TableNavigation from "@/components/App/Navigation/TableNavigation";
import { IPaginationType } from "@/lib/constants/pagination";
import { TableRow } from "@/components/App/Table/TableRow";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  headerAlign?: string,
  rowAlign?: string,
  render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
  data: T[];
  navigation?: string;
  meta?: IPaginationType,
  columns: IColumnType<T>[];
  changeAction?: (key: string, value: any) => void;
}

export function TableLayout<T>({ data, meta, columns, navigation, changeAction }: Props<T>): JSX.Element {
  return (
    <TableContainer>
      <Table size='lg'>
        <Thead>
          <TableHeader columns={columns} />
        </Thead>
        <Tbody>
          {data.length ? <TableRow data={data} columns={columns} /> : <Tr><Td textAlign="center" align="center" colSpan={8}>No Data Found</Td></Tr>}
        </Tbody>
      </Table>
      {meta && data && data.length > 0 && navigation == 'page' && <TableNavigation changeAction={changeAction} {...meta} />}
    </TableContainer>
  );
}