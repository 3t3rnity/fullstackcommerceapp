import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modaltest from '../../Modal/Modal'
import Header from '../../Header/Header'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        height: '100%',
    },
    mainContent: {
        width: '100%',
        boxShadow: '0px 0px 10px -1px #97AD95'
    }
 })
)

const MainLayout = props => {
    const classes = useStyles()

    return (
    <>
        <Header />
        <div className = { classes.root } >
            <div className = { classes.mainContent }>
                {props.children}
            </div>
        <Modaltest />
        </div>
    </>
)}

export default MainLayout
