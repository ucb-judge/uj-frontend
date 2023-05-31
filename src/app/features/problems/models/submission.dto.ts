export interface SubmissionDto {
  problemId: number;
  contestId: number | null;
  sourceCode: string;
  languageId: number;
}