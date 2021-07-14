import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import GoodsItem from '../GoodsItem/GoodsItem'

const MainPageContent = () => {
    const data = useSelector(state => state.mainpage.post)

    return (
        <>
        { data && (
            <Grid
                container
            >
                {data.data.map((el, id) => (
                        <GoodsItem
                            key = {id}
                            title = {el.title}
                            price = {el.price}
                            image = {el.image}
                            id = {el.id}
                        >
                            {el.description}
                        </GoodsItem>
                ))}
            </Grid>
        )}
        </>
    )
}

export default MainPageContent
