import { FC } from 'react';
import useStyles from './useStyles';
import { FeedType } from '../../data/feedsData';
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import { ReactComponent as LikeButtonIcon } from '../../assets/icons/likeButtonIcon.svg';
import { ReactComponent as CommentIcon } from '../../assets/icons/commentIcon.svg';

interface FeedCardProps {
  feed: FeedType;
}
const FeedCard: FC<FeedCardProps> = ({ feed }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} key={feed.id}>
      <div className={classes.feedHeaderWrapper}>
        <img src={feed.avatar} alt='avatar' className={classes.imageStyle} />
        <div>
          <p className={classes.textStyle}>{feed.username}</p>
          <p className={classes.textStyle}>{feed.shopName}</p>
        </div>
      </div>
      <p className={classes.descriptionStyle}> {feed.text}</p>
      <div className={classes.feedImagesWrapper}>
        {feed.images.slice(0, 2).map((image) => (
          <img
            key={image}
            src={image}
            alt='mainImage'
            className={classes.feedImageStyle}
          />
        ))}
      </div>
      <div className={classes.likeAndCommentsWrapper}>
        <p className={classes.likeAndCommentStyle}>
          <LikeIcon /> {` ${feed.likes} likes`}
        </p>
        <p className={classes.likeAndCommentStyle}>
          {`${feed.comments} comments`}
        </p>
      </div>
      <div className={classes.buttonsWrapper}>
        <button type='button' className={classes.textAndIconsStyle}>
          <LikeButtonIcon /> like
        </button>
        <button type='button' className={classes.textAndIconsStyle}>
          <CommentIcon /> comment
        </button>
      </div>
    </div>
  );
};

export default FeedCard;
