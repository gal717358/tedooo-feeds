import { useEffect, useRef, useState } from 'react';
import api from '../../../../utils/Api';
import FeedCard from '../../../../shared/FeedCard';
import { FeedsDataType } from '../../../../data/feedsData';
import useStyles from './useStyles';

const Feeds = () => {
  const [feedsData, setFeedsData] = useState<FeedsDataType>();
  const [itemsRendered, setItemsRendered] = useState(6);
  const bottomRef = useRef(null);

  useEffect(() => {
    api.getFeeds().then((res) => {
      setFeedsData(res);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (bottomRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
          setItemsRendered(itemsRendered + 6);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [bottomRef, itemsRendered]);

  const classes = useStyles();
  return (
    <div className={classes.root} ref={bottomRef}>
      {feedsData?.data.slice(0, itemsRendered).map((feed) => {
        return <FeedCard key={feed.id} feed={feed} />;
      })}
    </div>
  );
};

export default Feeds;
