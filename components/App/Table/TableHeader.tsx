import { Th, Tr } from "@chakra-ui/react";
import { IColumnType } from "@/components/App/Table/TableLayout";

interface Props<T> {
    columns: IColumnType<T>[];
}


export function TableHeader<T>({ columns }: Props<T>): JSX.Element {
    return (
        <Tr>
            {columns.map((column, columnIndex) =>{ 
               var align:any = column.headerAlign
                return(
                <Th key={columnIndex}  padding="4" textAlign={align} textTransform="none" bgColor="#fafafa" borderTop="1px solid #f2f4f9">
                    {column.title}
                </Th>
            )})}
        </Tr>
    );
}