import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserSeenMedia, getUserWatchlist } from '../../services/api/users.ts';
import { MediaItem, SeenMedia } from '../../types/entities.ts';

interface ListState {
  watchlist: MediaItem[];
  seenList: SeenMedia[];
  listsFetched: boolean;
}

const initialState: ListState = {
  watchlist: [],
  seenList: [],
  listsFetched: false,
};

export const fetchLists = async (userId: string) => {
  const watchlistData = await getUserWatchlist(userId);
  const seenListData = await getUserSeenMedia(userId);
  console.log(seenListData);

  return {
    watchlist: watchlistData,
    seenList: seenListData,
  };
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<MediaItem>) => {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<{ mediaId: number }>) => {
      state.watchlist = state.watchlist.filter((item) => item.mediaId !== action.payload.mediaId);
    },
    addToSeenList: (state, action: PayloadAction<SeenMedia>) => {
      state.seenList.push(action.payload);
    },
    removeFromSeenList: (state, action: PayloadAction<{ mediaId: number }>) => {
      state.seenList = state.seenList.filter((item) => item.mediaId !== action.payload.mediaId);
    },
    rateMedia: (state, action: PayloadAction<{ mediaId: number; rating: number }>) => {
      const { mediaId, rating } = action.payload;
      const seenItem = state.seenList.find((item) => item.mediaId === mediaId);
      if (seenItem) {
        seenItem.rating = rating;
      }
    },
    setListsFetched: (state, action: PayloadAction<boolean>) => {
      state.listsFetched = action.payload;
    },
  },
});

export const selectWatchlist = (state: { lists: ListState }) => state.lists.watchlist;
export const selectSeenList = (state: { lists: ListState }) => state.lists.seenList;
export const selectListsFetched = (state: { lists: ListState }) => state.lists.listsFetched;

export const { addToWatchlist, removeFromWatchlist, addToSeenList, removeFromSeenList, rateMedia, setListsFetched } = listsSlice.actions;

export default listsSlice.reducer;
