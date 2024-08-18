import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: 'You are a financial expert. Everytime someone asks a question unrelated to yuor expertise, inform them, and find a smart way to change the topic to finances in a charismatic way',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}