import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserSeenMedia, markAsSeen, markAsUnseen } from '../services/api/users.ts';
import { SeenListItem } from '../types/entities.ts';
import { selectUserData } from '../store/user/userSlice.ts';

const useSeenList = () => {
  const user = useSelector(selectUserData);
  const [seenList, setSeenList] = useState<SeenListItem[]>([]);

  useEffect(() => {
    const fetchSeenList = async () => {
      const response = await getUserSeenMedia(user.id!);
      if (!response.error) {
        setSeenList(response.seenMedia);
      }
    };

    fetchSeenList();
  }, [user?.id]);

  const toggleSeenStatus = async (mediaId: number, type: string) => {
    const isSeen = seenList.some((item) => item.mediaId === mediaId);
    if (isSeen) {
      await markAsUnseen(user.id!, mediaId, type);
      setSeenList(seenList.filter((item) => item.mediaId !== mediaId));
    } else {
      await markAsSeen(user.id!, mediaId, type);
      setSeenList([...seenList, { mediaId, type, watchedAt: new Date().toISOString() }]);
    }
  };

  return { seenList, toggleSeenStatus };
};

export default useSeenList;
