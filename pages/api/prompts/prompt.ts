import type { NextApiRequest, NextApiResponse } from 'next';
import queryOpenAIAPI from '@/lib/queryAPI';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'Please provide a prompt!' });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: 'Please provide a valid chat ID!' });
    return;
  }

  const response = await queryOpenAIAPI(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT couldn't find an answer.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: 'https://links.papareact.com/89k',
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  res.status(200).json({ answer: message.text });
}
