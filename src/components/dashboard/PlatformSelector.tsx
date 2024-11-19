import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const PLATFORMS = [
  { id: 'twitter', name: 'Twitter/X' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'facebook', name: 'Facebook' },
  { id: 'linkedin', name: 'LinkedIn' },
  { id: 'tiktok', name: 'TikTok' },
];

interface PlatformSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function PlatformSelector({ value, onChange }: PlatformSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select platform" />
      </SelectTrigger>
      <SelectContent>
        {PLATFORMS.map((platform) => (
          <SelectItem key={platform.id} value={platform.id}>
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}