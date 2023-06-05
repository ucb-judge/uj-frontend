import {ProfessorDto} from "../../../core/models/professor.dto";
import {SubjectDto} from "../../../core/models/subject.dto";

export interface ContestDto {
  contestId: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  professor: ProfessorDto | null;
  subject: SubjectDto | null;
  isPublic: boolean;
}