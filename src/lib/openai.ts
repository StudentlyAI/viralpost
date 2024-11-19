import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeImage(imageUrl: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Analyze this image and provide key details about its content, mood, and potential social media appeal." },
          { type: "image_url", image_url: imageUrl }
        ],
      },
    ],
    max_tokens: 500,
  });

  return response.choices[0].message.content;
}

export async function generateSocialPost(platform: string, imageAnalysis: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: `You are a social media expert. Generate engaging content for ${platform} based on the image analysis provided. Follow platform best practices and character limits.`
      },
      {
        role: "user",
        content: imageAnalysis
      }
    ],
    max_tokens: 500,
  });

  return response.choices[0].message.content;
}