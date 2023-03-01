import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ffff',
    // height: '753px',
    boxShadow: '0px 1px 7px rgba(40, 47, 45, 0.07)',
    borderRadius: '4px',
    width: '100%',
  },
  feedHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '24px',
    paddingLeft: '24px',
    gap: '12px',
  },

  imageStyle: {
    borderRadius: '50%',
    width: '40px',
    height: '40px,',
    alignSelf: 'center',
  },

  descriptionStyle: {
    margin: '16px 24px',
    fontSize: '14px',
    textOverflow: 'ellipsis',
    alignSelf: 'flex-start',
  },

  feedImagesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  feedImageStyle: {
    width: '100%',
    height: '400px',
    alignSelf: 'center',
  },

  textStyle: {
    margin: '0',
  },

  likeAndCommentsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 25px',
    borderBottom: '1px solid #E9EAEA',
  },

  likeAndCommentStyle: {
    fontSize: '14px',
    color: '#737877',
    alignItems: 'center',
    display: 'flex',
    gap: '8px',
  },

  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '9px',
  },

  textAndIconsStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    color: '#737877',
    border: 'none',
    background: 'transparent',
  },
});

export default useStyles;
