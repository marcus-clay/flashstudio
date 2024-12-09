"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/dashboard/data-table';
import { columns } from '@/components/dashboard/columns';
import { generateHistoryData } from '@/lib/data';

export default function HistoryPage() {
  const data = generateHistoryData();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Historique</h2>
        <p className="text-muted-foreground">
          Historique de vos portraits générés et photos uploadées
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Tous les Portraits</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}