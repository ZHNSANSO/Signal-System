
import { shortAnswerAnswersBatch1 } from './answers_batch1';
import { shortAnswerAnswersBatch2 } from './answers_batch2';

interface QuestionAnswer {
  correctOptionId: string;
  explanation: string;
}

export const shortAnswerAnswers: Record<number, QuestionAnswer> = {
  ...shortAnswerAnswersBatch1,
  ...shortAnswerAnswersBatch2
};
