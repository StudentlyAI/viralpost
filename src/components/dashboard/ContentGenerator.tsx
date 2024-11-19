import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { analyzeImage, generateSocialPost } from '@/lib/openai';
import { useToast } from '@/components/ui/use-toast';

interface ContentGeneratorProps {
  platform: string;
  imageUrl: string;
  onGenerated: (content: string) => void;
}

export function ContentGenerator({ platform, imageUrl, onGenerated }: ContentGeneratorProps) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const { toast } = useToast();

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const analysis = await analyzeImage(imageUrl);
      const post = await generateSocialPost(platform, analysis);
      setContent(post);
      onGenerated(post);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate content. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Generated content will appear here..."
        className="h-32"
      />
      <div className="flex justify-end gap-2">
        <Button
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Generate Content
        </Button>
      </div>
    </div>
  );
}