import { Person } from '@/types';
import { Table, flexRender } from '@tanstack/react-table';

const UsersTable = ({ table }: { table: Table<Person> }) => {
  return (
    <table className="w-full border border-grey [&>tbody>*:nth-child(odd)]:bg-grey">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                {...{
                  className: header.column.getCanSort()
                    ? 'cursor-pointer select-none text-left py-2'
                    : ' text-left py-2',
                  onClick: header.column.getToggleSortingHandler(),
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="py-8 pl-10 text-lg text-dark">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
