import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import TableLogo from '@/public/svg/table.icon.svg';
import KanbanLogo from '@/public/svg/kanban.icon.svg';
import SearchLogo from '@/public/svg/search.icon.svg';
import { useEffect, useState } from 'react';
import ProtectedRoute from '@/HOC/ProtectedRoute';
import { useGetData } from '@/query';
import UsersTable from '@/components/Table';
import { Person } from '@/types';

const columnHelper = createColumnHelper<Person>();

const className = 'text-[#474D4F] text-lg font-normal pl-10';

const columns = [
  columnHelper.accessor('first_name', {
    header: () => <span className={className}>First Name</span>,
  }),
  columnHelper.accessor('last_name', {
    id: 'last_name',
    header: () => <span className={className}>Last Name</span>,
  }),
  columnHelper.accessor('gender', {
    header: () => <span className={className}>Gender</span>,
    enableSorting: false,
  }),
  columnHelper.accessor('email', {
    header: () => <span className={className}>@ Email</span>,
    enableSorting: false,
  }),
];

const Table = () => {
  const { data: mydata, isLoading } = useGetData();
  const [sorting, setSorting] = useState<SortingState>([]);

  const [data, setData] = useState(mydata || []);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setData(mydata || []);
  }, [mydata]);

  useEffect(() => {
    const updatedList = (mydata || []).filter(
      (item) =>
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.last_name.toLowerCase().includes(search.toLowerCase())
    );
    setData(updatedList);
  }, [search]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <ProtectedRoute>
      <div className="w-full">
        <div className="p-20  w-11/12">
          <p className="font-semibold text-dark heading underline">
            Graphic Designer
          </p>
          <div className="flex mt-16 items-center">
            <p className="flex items-center space-x-4 mr-12">
              <TableLogo />{' '}
              <span className="text-lg text-dark font-medium">Table View</span>
            </p>
            <p className="flex items-center space-x-4">
              <KanbanLogo />
              <span className="text-lg text-dark font-semibold"> Kanban</span>
            </p>
            <div className="ml-auto flex items-center space-x-2">
              <SearchLogo />
              <input
                className="text-lg w-full p-2 focus:outline-none"
                placeholder="Type to search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          {data.length && <UsersTable table={table} />}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Table;
