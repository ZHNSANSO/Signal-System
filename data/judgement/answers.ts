
import { judgementAnswersBatch1 } from './answers_batch1';
import { judgementAnswersBatch2 } from './answers_batch2';

interface QuestionAnswer {
  correctOptionId: string;
  explanation: string;
}

export const judgementAnswers: Record<number, QuestionAnswer> = {
  ...judgementAnswersBatch1,
  ...judgementAnswersBatch2
};
