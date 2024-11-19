import { useState } from 'react';
import { ImageUpload } from '@/components/dashboard/ImageUpload';
import { PlatformSelector } from '@/components/dashboard/PlatformSelector';
import { ContentGenerator } from '@/components/dashboard/ContentGenerator';
import { Analytics } from '@/components/dashboard/Analytics';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2 } from 'lucide-react';

export function Dashboard() {
  const [selectedPlatform, setSelectedPlatform] = useState('twitter');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerateContent = () => {
    if (!selectedImage) return;
    const imageUrl = URL.createObjectURL(selectedImage);
    // The ContentGenerator component will handle the actual generation
  };

  return (
    <div className="container py-8">
      <Tabs defaultValue="create" className="space-y-6">
        <TabsList>
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="create">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload Image</CardTitle>
                <CardDescription>
                  Upload an image to generate optimized social media content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ImageUpload onImageSelect={setSelectedImage} />
                <PlatformSelector
                  value={selectedPlatform}
                  onChange={setSelectedPlatform}
                />
                {selectedImage && (
                  <ContentGenerator
                    platform={selectedPlatform}
                    imageUrl={URL.createObjectURL(selectedImage)}
                    onGenerated={setGeneratedContent}
                  />
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>
                  Preview your generated content before posting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedImage ? (
                  <>
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Preview"
                      className="rounded-lg"
                    />
                    {generatedContent && (
                      <div className="mt-4 p-4 rounded-lg bg-muted">
                        <p className="whitespace-pre-wrap">{generatedContent}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                    No image selected
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Content History</CardTitle>
              <CardDescription>
                View and manage your generated content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No content generated yet</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Analytics />
        </TabsContent>
      </Tabs>
    </div>
  );
}