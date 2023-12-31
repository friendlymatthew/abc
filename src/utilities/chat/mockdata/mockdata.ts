import type { Room } from "../types/chat.types";
import { RoomType, MatchStatus } from "../types/chat.types";

const now = new Date().toISOString();
const lastWeek = new Date(Date.now() - 604800000).toISOString();
const lastMonth = new Date(Date.now() - 2592000000).toISOString();

// This ensures mockRoomsData is of type Room[]
export const mockRoomsData: Room[] = [
  {
    id: "0",
    creatorId: "id-0",
    crushId: "id-1",
    creatorDisplayName: "John Doe",
    crushDisplayName: "Jane Doe",
    roomType: RoomType.LIVE,
    matchStatus: MatchStatus.GUESS,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "1",
    creatorId: "id-34",
    crushId: "id-0",
    creatorDisplayName: "cat",
    crushDisplayName: "mouse Doe",
    roomType: RoomType.LIVE,
    matchStatus: MatchStatus.GUESS,
    createdAt: lastWeek,
    updatedAt: now,
  },
  {
    id: "2",
    creatorId: "id-2",
    crushId: "id-0",
    creatorDisplayName: "cat",
    crushDisplayName: "mouse Doe",
    roomType: RoomType.LIVE,
    matchStatus: MatchStatus.MATCH,
    createdAt: lastWeek,
    updatedAt: now,
  },
  {
    id: "3",
    creatorId: "id-20900",
    crushId: "id-0",
    creatorDisplayName: "test",
    crushDisplayName: "mouse",
    roomType: RoomType.DORMANT,
    matchStatus: MatchStatus.GUESS,
    createdAt: lastWeek,
    updatedAt: now,
  },
  {
    id: "4",
    creatorId: "id-0",
    crushId: "id-190",
    creatorDisplayName: "mali mali",
    crushDisplayName: "frances astorian",
    roomType: RoomType.LIVE,
    matchStatus: MatchStatus.MATCH,
    createdAt: lastMonth,
    updatedAt: now,
  },
  {
    id: "5",
    creatorId: "id-0",
    crushId: "id-13847",
    creatorDisplayName: "yawn-182",
    crushDisplayName: "rare pokemon",
    roomType: RoomType.LIVE,
    matchStatus: MatchStatus.GUESS,
    createdAt: lastMonth,
    updatedAt: lastWeek,
  },
  {
    id: "6",
    creatorId: "id-283920",
    crushId: "id-0",
    creatorDisplayName: "desperado",
    crushDisplayName: "lyineyes",
    roomType: RoomType.LIVE,
    matchStatus: MatchStatus.GUESS,
    createdAt: lastMonth,
    updatedAt: lastMonth,
  },
];
