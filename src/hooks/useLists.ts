import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLists,
  selectSeenList,
  selectWatchlist,
  addToWatchlist,
  removeFromWatchlist,
  addToSeenList,
  removeFromSeenList,
  rateMedia,
} from '../store/lists/listsSlice.ts';
import { MediaItem, SeenMedia } from '../types/entities.ts';
import {
  addToWatchlist as apiAddToWatchlist,
  removeFromWatchlist as apiRemoveFromWatchlist,
  markAsSeen,
  markAsUnseen,
} from '../services/api/users.ts';

const useLists = (userId: string) => {
  const dispatch = useDispatch();
  const watchlist = useSelector(selectWatchlist);
  const seenlist = useSelector(selectSeenList);

  useEffect(() => {
    const loadLists = async () => {
      const lists = await fetchLists(userId);
      dispatch(addToWatchlist(lists.watchlist));
      dispatch(addToSeenList(lists.seenList));
    };

    loadLists();
  }, [dispatch, userId]);

  const addToWatchlistHandler = async (mediaItem: MediaItem) => {
    await apiAddToWatchlist(userId, mediaItem.mediaId, mediaItem.mediaType);
    dispatch(addToWatchlist(mediaItem));
  };

  const removeFromWatchlistHandler = async (mediaId: number, mediaType: string) => {
    await apiRemoveFromWatchlist(userId, mediaId, mediaType);
    dispatch(removeFromWatchlist({ mediaId }));
  };

  const addToSeenListHandler = async (seenMedia: SeenMedia) => {
    await markAsSeen(userId, seenMedia.mediaId, seenMedia.mediaType);
    dispatch(addToSeenList(seenMedia));
    dispatch(removeFromWatchlist({ mediaId: seenMedia.mediaId }));
  };

  const removeFromSeenListHandler = async (seenMedia: SeenMedia) => {
    await markAsUnseen(userId, seenMedia.mediaId, seenMedia.mediaType);
    dispatch(removeFromSeenList(seenMedia));
  };

  const rateMediaHandler = (mediaId: number, rating: number) => {
    dispatch(rateMedia({ mediaId, rating }));
  };

  return {
    watchlist,
    seenlist,
    addToWatchlist: addToWatchlistHandler,
    removeFromWatchlist: removeFromWatchlistHandler,
    addToSeenList: addToSeenListHandler,
    removeFromSeenList: removeFromSeenListHandler,
    rateMedia: rateMediaHandler,
  };
};

export default useLists;
