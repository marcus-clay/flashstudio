"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDownToLine } from "lucide-react"

export type History = {
  id: string
  date: string
  type: "portrait" | "upload"
  status: "completed" | "processing" | "failed"
  filename: string
}

export const columns: ColumnDef<History>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string
      return type === "portrait" ? "Portrait" : "Upload"
    },
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge variant={status === "completed" ? "default" : "destructive"}>
          {status === "completed" ? "Terminé" : status === "processing" ? "En cours" : "Échoué"}
        </Badge>
      )
    },
  },
  {
    accessorKey: "filename",
    header: "Fichier",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Button
          variant="ghost"
          size="sm"
          disabled={status !== "completed"}
        >
          <ArrowDownToLine className="h-4 w-4" />
        </Button>
      )
    },
  },
]