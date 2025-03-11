import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addToWatchlist, getUserWatchlist, removeFromWatchlist } from '../services/api/users.ts';
import { WatchlistItem } from '../types/entities.ts';
import { selectUserData } from '../store/user/userSlice.ts';

const useWatchlist = () => {
  const user = useSelector(selectUserData);
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const response = await getUserWatchlist(user.id!);
      if (!response.error) {
        setWatchlist(response.watchlist);
      }
    };

    fetchWatchlist();
  }, [user?.id]);

  const toggleWatchlist = async (mediaId: number, type: string) => {
    if (!user?.id) return;

    const isInWatchlist = watchlist.some((item) => item.mediaId === mediaId && item.type === type);

    if (isInWatchlist) {
      const response = await removeFromWatchlist(user.id, mediaId, type);
      if (!response.error) {
        setWatchlist(watchlist.filter((item) => item.mediaId !== mediaId || item.type !== type));
      }
    } else {
      const response = await addToWatchlist(user.id, mediaId, type);
      if (!response.error) {
        setWatchlist([...watchlist, { mediaId, type }]);
      }
    }
  };

  return { watchlist, toggleWatchlist };
};

export default useWatchlist;
