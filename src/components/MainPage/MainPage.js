import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import SideMenu from './SideMenu'
import MainPageContent from './MainPageContent'




const useStyles = makeStyles(() => ({
    carousel: {
        height: '600px',
        boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.75)'
    },
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '32px'
    },
    Content: {
        width: '60%',
        minHeight: '',
        height: '100%',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    },
    Menu: {
        border: '1px solid red',
        width: '20%',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        display: 'flex',
        flexDirection: 'column'
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px'
    },
    helperMenu: {
        border: '1px solid violet',
        width: '15%',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
    }

})
)


const MainPage = props => {
    const classes = useStyles()

    return (
            <>
            <div className = {classes.root}>
                    <SideMenu />
                <div className = {classes.Content}>
                    <MainPageContent />
                </div>
                <div className = {classes.helperMenu}>
                    <Link to = '/creategood' >Создать товар</Link>
                </div>
            </div>
            </>
    )
}

export default MainPage
