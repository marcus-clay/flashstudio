"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader2, Download, RefreshCcw, ArrowLeft, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { LinkedinPreview } from './linkedin-preview';

interface PortraitGenerationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PortraitGenerationDialog({ open, onOpenChange }: PortraitGenerationDialogProps) {
  const [stage, setStage] = useState<'processing' | 'selection' | 'preview'>('processing');
  const [progress, setProgress] = useState(0);
  const [selectedPortrait, setSelectedPortrait] = useState<string | null>(null);
  const [showLinkedinPreview, setShowLinkedinPreview] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  // Only show 3 portraits
  const mockPortraits = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
  ];

  useEffect(() => {
    if (open && stage === 'processing') {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setStage('selection');
            return 100;
          }
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(timer);
    }
  }, [open, stage]);

  const handlePortraitSelect = (portrait: string) => {
    setSelectedPortrait(portrait);
    setStage('preview');
  };

  const handleBackToSelection = () => {
    setStage('selection');
    setSelectedPortrait(null);
  };

  const handleDownload = (isWatermarked: boolean) => {
    toast({
      title: "Téléchargement réussi",
      description: isWatermarked ? 
        "Version avec filigrane téléchargée" : 
        "Version HD téléchargée",
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] h-[95vh] p-0">
          {stage === 'processing' && (
            <div className="h-full flex items-center justify-center">
              <DialogHeader className="text-center px-4">
                <DialogTitle className="text-2xl font-medium mb-4">
                  Création de vos portraits professionnels
                </DialogTitle>
                <div className="flex flex-col items-center">
                  <Loader2 className="h-12 w-12 animate-spin text-[#0162C1] mb-4" />
                  <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#0162C1] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {progress < 100 ? "Génération en cours..." : "Finalisation..."}
                  </p>
                </div>
              </DialogHeader>
            </div>
          )}

          {stage === 'selection' && (
            <div className="h-full flex flex-col">
              <DialogHeader className="flex justify-between items-center p-6 border-b">
                <DialogTitle className="text-2xl font-medium">
                  Choisissez votre portrait préféré
                </DialogTitle>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setProgress(0);
                    setStage('processing');
                  }}
                  className="flex items-center gap-2"
                >
                  <RefreshCcw className="h-4 w-4" />
                  Générer de nouvelles propositions
                </Button>
              </DialogHeader>
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockPortraits.map((portrait, index) => (
                    <div 
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer hover:border-[#0162C1] transition-colors"
                      onClick={() => handlePortraitSelect(portrait)}
                    >
                      <Image
                        src={portrait}
                        alt={`Portrait ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {stage === 'preview' && selectedPortrait && (
            <div className="h-full flex flex-col">
              <DialogHeader className="flex justify-between items-center p-6 border-b">
                <Button
                  variant="ghost"
                  onClick={handleBackToSelection}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Retour aux portraits
                </Button>
              </DialogHeader>
              <div className="flex-1 p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col items-center gap-4">
                  <div className="relative w-full max-w-xl aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={selectedPortrait}
                      alt="Portrait sélectionné"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      onClick={() => handleDownload(true)}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Version gratuite avec filigrane
                    </Button>
                    <Button
                      onClick={() => handleDownload(false)}
                      className="flex items-center gap-2 bg-[#0162C1]"
                    >
                      <Download className="h-4 w-4" />
                      Version HD Premium
                    </Button>
                    <Button
                      onClick={() => setShowLinkedinPreview(true)}
                      className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182]"
                    >
                      <Linkedin className="h-4 w-4" />
                      Aperçu LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <LinkedinPreview
        open={showLinkedinPreview}
        onOpenChange={setShowLinkedinPreview}
        portraitUrl={selectedPortrait || ''}
      />
    </>
  );
}