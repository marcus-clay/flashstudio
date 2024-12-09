"use client"

import { useState, useCallback, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { PortraitGenerationDialog } from './portrait-generation-dialog';
import { UploadTutorial } from './upload-tutorial';
import Image from 'next/image';
import { Upload, X } from 'lucide-react';

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [generatingPortraits, setGeneratingPortraits] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleFiles = useCallback((files: File[]) => {
    const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      toast({
        title: "Format non supporté",
        description: "Veuillez sélectionner uniquement des images (JPG, PNG)",
        variant: "destructive"
      });
      return;
    }

    if (imageFiles.length > 6) {
      toast({
        title: "Trop de fichiers",
        description: "Vous pouvez sélectionner jusqu'à 6 photos maximum",
        variant: "destructive"
      });
      return;
    }

    setSelectedFiles(prev => {
      const newFiles = [...prev, ...imageFiles];
      if (newFiles.length > 6) {
        toast({
          title: "Limite atteinte",
          description: "Vous ne pouvez pas ajouter plus de 6 photos",
          variant: "destructive"
        });
        return prev;
      }
      return newFiles;
    });
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(Array.from(e.dataTransfer.files));
  }, [handleFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  }, [handleFiles]);

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleGenerate = () => {
    setGeneratingPortraits(true);
    onOpenChange(false);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(files => files.filter((_, i) => i !== index));
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>Sélectionnez vos photos</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6 pt-2">
            <UploadTutorial />
            
            <div className="mt-6">
              <div 
                className={`h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center space-y-4 transition-colors
                  ${dragActive ? 'border-[#0162C1] bg-blue-50' : 'border-gray-200'}
                  ${selectedFiles.length > 0 ? 'hidden' : 'block'}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className={`h-12 w-12 ${dragActive ? 'text-[#0162C1]' : 'text-gray-400'}`} />
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Glissez-déposez vos photos ici ou cliquez pour sélectionner
                  </p>
                  <p className="text-xs text-gray-500">
                    JPG, PNG jusqu'à 10MB - Maximum 6 photos
                  </p>
                </div>
                <Button 
                  onClick={handleUploadClick}
                  className="bg-[#0162C1] hover:bg-[#0152A1]"
                >
                  Sélectionner des Photos
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>

              {selectedFiles.length > 0 && (
                <div className="space-y-6 mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square rounded-lg overflow-hidden border">
                          <div className="w-full h-full relative">
                            <Image
                              src={URL.createObjectURL(file)}
                              alt={`Photo ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-4 w-4 text-gray-500" />
                        </button>
                      </div>
                    ))}
                    {[...Array(6 - selectedFiles.length)].map((_, index) => (
                      <div
                        key={`empty-${index}`}
                        className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center"
                      >
                        <Upload className="h-8 w-8 text-gray-300" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedFiles([])}
                    >
                      Réinitialiser
                    </Button>
                    <Button
                      onClick={handleGenerate}
                      className="bg-[#0162C1] hover:bg-[#0152A1]"
                    >
                      Générer les Portraits
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PortraitGenerationDialog 
        open={generatingPortraits} 
        onOpenChange={setGeneratingPortraits}
      />
    </>
  );
}