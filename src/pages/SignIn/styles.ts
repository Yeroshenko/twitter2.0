import { makeStyles } from '@material-ui/core'

export const useSignInStyles = makeStyles(theme => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100%',
    minHeight: '100vh'
  },
  blueSide: {
    backgroundColor: '#71C9F8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  blueSideBackIcon: {
    position: 'absolute',
    fontSize: '160vh',
    right: '-50vh',
    top: '-30vh',
    color: theme.palette.primary.main
  },
  blueSideList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    color: 'white',
    fontWeight: 700,
    fontSize: '20px',
    display: 'grid',
    rowGap: '32px',
    zIndex: 4
  },
  blueSideListItem: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: '28px',
      marginRight: '15px'
    }
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  loginSideInner: {
    maxWidth: '380px'
  },
  loginSideLogo: {
    fontSize: '40px',
    marginBottom: '20px',
    color: theme.palette.primary.main
  },
  loginSideTitle: {
    fontSize: '30px',
    fontWeight: 700,
    marginBottom: '60px'
  },
  loginSideSubtitle: {
    fontWeight: 700,
    marginBottom: '15px'
  },
  loginSideButtons: {
    display: 'grid',
    rowGap: '15px'
  },
  loginSideField: {
    marginBottom: 18
  },
  registerField: {
    marginBottom: theme.spacing(5)
  },
  loginFormControl: {
    marginBottom: theme.spacing(2)
  }
}))
