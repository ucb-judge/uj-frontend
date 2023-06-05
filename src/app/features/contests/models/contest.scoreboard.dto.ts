import {UserDetailsDto} from "../../../core/models/user.details.dto";

export interface ContestScoreboardDto {
  rank: number | null;
  student: UserDetailsDto;
  problemsSolved: number;
}