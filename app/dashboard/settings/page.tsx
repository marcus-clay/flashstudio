"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { NotificationsCard, NotificationSettings } from './components/notifications-card';
import { AppearanceCard, AppearanceSettings } from './components/appearance-card';

interface Settings {
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
}

export default function SettingsPage() {
  const { toast } = useToast();
  const [hasChanges, setHasChanges] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    notifications: {
      email: true,
      marketing: false,
      updates: true,
    },
    appearance: {
      theme: 'light',
    },
  });

  const handleNotificationsChange = (notificationSettings: NotificationSettings) => {
    setSettings(prev => ({
      ...prev,
      notifications: notificationSettings,
    }));
    setHasChanges(true);
  };

  const handleAppearanceChange = (appearanceSettings: AppearanceSettings) => {
    setSettings(prev => ({
      ...prev,
      appearance: appearanceSettings,
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Here you would typically make an API call to save the settings
    toast({
      title: "Paramètres sauvegardés",
      description: "Vos préférences ont été mises à jour avec succès.",
    });
    setHasChanges(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Paramètres du compte</h2>
          <p className="text-muted-foreground">
            Gérez les paramètres de votre compte et vos préférences
          </p>
        </div>
        {hasChanges && (
          <Button 
            onClick={handleSave}
            className="bg-[#0162C1] hover:bg-[#0152A1]"
          >
            Sauvegarder les modifications
          </Button>
        )}
      </div>

      <div className="grid gap-6">
        <NotificationsCard onSettingsChange={handleNotificationsChange} />
        <AppearanceCard onSettingsChange={handleAppearanceChange} />
      </div>
    </div>
  );
}