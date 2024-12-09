"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Bell } from 'lucide-react';

interface NotificationsSettingsProps {
  onSettingsChange: (settings: NotificationSettings) => void;
}

export interface NotificationSettings {
  email: boolean;
  marketing: boolean;
  updates: boolean;
}

export function NotificationsCard({ onSettingsChange }: NotificationsSettingsProps) {
  const [settings, setSettings] = useState<NotificationSettings>({
    email: true,
    marketing: false,
    updates: true,
  });

  const handleChange = (key: keyof NotificationSettings) => {
    const newSettings = {
      ...settings,
      [key]: !settings[key],
    };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Bell className="w-8 h-8 text-[#0162C1]" />
        <div>
          <CardTitle>Notifications</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications-email">Notifications par email</Label>
          <Switch
            id="notifications-email"
            checked={settings.email}
            onCheckedChange={() => handleChange('email')}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications-marketing">Communications marketing</Label>
          <Switch
            id="notifications-marketing"
            checked={settings.marketing}
            onCheckedChange={() => handleChange('marketing')}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications-updates">Mises à jour produit</Label>
          <Switch
            id="notifications-updates"
            checked={settings.updates}
            onCheckedChange={() => handleChange('updates')}
          />
        </div>
      </CardContent>
    </Card>
  );
}