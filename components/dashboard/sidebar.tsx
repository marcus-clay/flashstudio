"use client"

import { Button } from '@/components/ui/button';
import { 
  Camera,
  History,
  BookOpen,
  PlusCircle,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { UploadDialog } from './upload/upload-dialog';

export function Sidebar() {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  return (
    <div className="w-64 bg-white border-r min-h-[calc(100vh-4rem)] p-4">
      <div className="mb-6">
        <Button 
          className="w-full justify-start bg-[#0162C1] hover:bg-[#0152A1] text-white"
          onClick={() => setUploadDialogOpen(true)}
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Créer un nouveau portrait
        </Button>
      </div>
      <nav className="space-y-2">
        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start">
            <Camera className="mr-2 h-5 w-5" />
            Portraits
          </Button>
        </Link>
        <Link href="/dashboard/history">
          <Button variant="ghost" className="w-full justify-start">
            <History className="mr-2 h-5 w-5" />
            Historique
          </Button>
        </Link>
        <Link href="/dashboard/guide">
          <Button variant="ghost" className="w-full justify-start">
            <BookOpen className="mr-2 h-5 w-5" />
            Guide et conseils
          </Button>
        </Link>
      </nav>

      <UploadDialog 
        open={uploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
      />
    </div>
  );
}