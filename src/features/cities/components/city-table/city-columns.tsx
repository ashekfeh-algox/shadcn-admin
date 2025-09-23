import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table'
import { City } from '../data'


export const cityColumns: ColumnDef<City>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
       />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => <div className=''>{row.getValue('name')}</div>,
    enableSorting: true,
    enableHiding: false,
  },
    {
    accessorKey: 'slug',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Slug' />
    ),
    cell: ({ row }) => <div className=''>{row.getValue('slug')}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Created At' />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt')).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      })

      return <div className=''>{date}</div>
    },
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Updated At' />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue('updatedAt')).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      })

      return <div className=''>{date}</div>
    },
  },
]
