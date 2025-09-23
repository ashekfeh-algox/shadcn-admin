import { useState } from "react";
import type { Table } from "@tanstack/react-table";
import { toast } from "sonner";
import { sleep } from "@/lib/utils";
import type { City } from "../data";
import { DataTableBulkActions as BulkActionsToolbar } from "@/components/data-table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Download, Trash2 } from "lucide-react";
import { CitiesMultiDeleteDialog } from "./city-multi-delete-dialog";

type DataTableBulkActionsProps<TData> = {
  table: Table<TData>;
};

export function DataTableBulkActions<TData>({ table }: DataTableBulkActionsProps<TData>) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const selectedRows = table.getFilteredSelectedRowModel().rows;

  const handleBulkExport = () => {
    const selectedTasks = selectedRows.map((row) => row.original as City);
    toast.promise(sleep(2000), {
      loading: "Exporting tasks...",
      success: () => {
        table.resetRowSelection();
        return `Exported ${selectedTasks.length} task${selectedTasks.length > 1 ? "s" : ""} to CSV.`;
      },
      error: "Error",
    });
    table.resetRowSelection();
  };
  return (
    <>
      <BulkActionsToolbar table={table} entityName="task">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleBulkExport()}
              className="size-8"
              aria-label="Export tasks"
              title="Export tasks"
            >
              <Download />
              <span className="sr-only">Export tasks</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Export tasks</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => setShowDeleteConfirm(true)}
              className="size-8"
              aria-label="Delete selected tasks"
              title="Delete selected tasks"
            >
              <Trash2 />
              <span className="sr-only">Delete selected tasks</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete selected tasks</p>
          </TooltipContent>
        </Tooltip>
      </BulkActionsToolbar>

      <CitiesMultiDeleteDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm} table={table} />
    </>
  );
}
