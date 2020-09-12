import { Skill } from "./skill";
export class Candidate {
  id: number;

  email: string = "";
  username: string;
  password: string;
  experiseLevel: number;
  noOfChallengesSolved: number;
  skills: Skill[];
  constructor() {}
}
