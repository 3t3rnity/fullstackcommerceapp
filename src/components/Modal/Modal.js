import React from 'react'
import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { changeModalState } from '../../Redux/actionCreators/appActions'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Modaltest = () => {
    const dispatch = useDispatch()
    const modalFlag = useSelector( state => state.app.modal )

    const classes = useStyles();
    const body = (
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <button onClick = {() => { dispatch( changeModalState() ) }}>Click</button>
        </div>
      );
      return (
        <div>
          <Modal
            open={modalFlag}
            onClose = {() => { dispatch( changeModalState() ) }}
            className={classes.modal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      );
}

export default Modaltest
