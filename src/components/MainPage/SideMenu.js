import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../Redux/actionCreators/mainPageCreators'
import './SideMenu.scss'


const SideMenu = () => {
    const menuItems = useSelector( state => state.mainpage.sidemenuItems )
    const currentRoute = useSelector( state => state.mainpage.currentRoute )
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchProducts(currentRoute))
    }, [])

  return (
    <div className = 'Menu'>
                {menuItems.map((el, id) => {
                    return(

                            <div
                                className = 'Menu__Item'
                                onClick = {() => {
                                  dispatch(fetchProducts(el.url))
                                }}
                                key = {id}
                            >
                                <h5>{ el.title }</h5>
                            </div>

                    )
                })}
    </div>
  )
}

export default SideMenu
