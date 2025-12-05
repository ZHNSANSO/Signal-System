
import { blankAnswersBatch1 } from './answers_batch1';
import { blankAnswersBatch2 } from './answers_batch2';

interface QuestionAnswer {
  correctOptionId: string;
  explanation: string;
}

export const blankAnswers: Record<number, QuestionAnswer> = {
  ...blankAnswersBatch1,
  ...blankAnswersBatch2
};
