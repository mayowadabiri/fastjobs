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
import Drodown from '@/public/svg/dropdown.icon.svg';
import Image from 'next/image';
import Memo from '@/assets/Memo.png';

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
  }),
  columnHelper.accessor('email', {
    header: () => <span className={className}>@ Email</span>,
  }),
];

const Table = () => {
  const { data: mydata } = useGetData();
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
          <div className="flex">
            <p className="font-semibold text-dark heading underline">
              Graphic Designer
            </p>
            <Image src={Memo} alt="memo" />
          </div>
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
                placeholder="Type to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="bg-[#6776FF] rounded-[4px] flex space-x-3 items-center">
              <span className="text-base text-white border-r border-r-white py-2 px-3">
                New
              </span>
              <div className="pr-3">
                <Drodown />
              </div>
            </button>
          </div>
          <div className="mt-3">
            {data.length ? <UsersTable table={table} /> : null}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Table;
