import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserSeenMedia, getUserWatchlist } from '../../services/api/users.ts';
import { MediaItem, SeenMedia } from '../../types/entities.ts';

interface ListState {
  watchlist: MediaItem[];
  seenList: SeenMedia[];
}

const initialState: ListState = {
  watchlist: [],
  seenList: [],
};

export const fetchLists = async (userId: string) => {
  const watchlistData = await getUserWatchlist(userId);
  const seenListData = await getUserSeenMedia(userId);

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
    removeFromSeenList: (state, action: PayloadAction<SeenMedia>) => {
      state.seenList = state.seenList.filter((item) => item.mediaId !== action.payload.mediaId);
    },
    rateMedia: (state, action: PayloadAction<{ mediaId: number; rating: number }>) => {
      const { mediaId, rating } = action.payload;
      const seenItem = state.seenList.find((item) => item.mediaId === mediaId);
      if (seenItem) {
        seenItem.rating = rating;
      }
    },
  },
});

export const selectWatchlist = (state: { lists: ListState }) => state.lists.watchlist;
export const selectSeenList = (state: { lists: ListState }) => state.lists.seenList;

export const { addToWatchlist, removeFromWatchlist, addToSeenList, removeFromSeenList, rateMedia } = listsSlice.actions;

export default listsSlice.reducer;
