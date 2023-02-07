export default interface DefaultPlayer {
  id: number;
  name: string;
  score: number;
  date: string;
  inCup: boolean;
  qualified?: boolean;
  checkedIn?: boolean;
  seed: number;
  previousPlayer: boolean;
}
