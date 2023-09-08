export enum RoomType {
  LIVE = "LIVE",
  DORMANT = "DORMANT",
}

export enum MatchStatus {
  GUESS = "GUESS",
  MATCH = "MATCH",
}

export type Room = {
  id: string;
  creatorId: string;
  crushId: string;
  creatorDisplayName: string;
  crushDisplayName: string;
  roomType: RoomType;
  matchStatus: MatchStatus;
  createdAt: string;
  updatedAt: string;
};
