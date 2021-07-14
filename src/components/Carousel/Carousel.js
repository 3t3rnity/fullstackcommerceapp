import React from 'react';
import { makeStyles } from '@material-ui/core'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles(() => ({
  carousel: {
      height: '100%'
  },
  Slide: {
      width: '100%',
      color: 'white',
      height: '600px',
      background: 'url("https://images.wallpaperscraft.ru/image/alleia_derevia_doroga_189054_3840x2160.jpg") no-repeat center',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }
})
)

const Carousel = () => {
  const classes = useStyles()

  return (
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        className={classes.carousel}
    >
      <Slider className={classes.carousel}>
          <Slide index={0} >
            <div className={classes.Slide}><h2>I am alone...</h2></div>
            <div className={classes.Slide}><h2>I am alone...</h2></div>
            <div className={classes.Slide}><h2>I am alone...</h2></div>
          </Slide>
          <Slide index={1} ><div className={classes.Slide}><h2>I am alone...</h2></div></Slide>
          <Slide index={2} ><div className={classes.Slide}><h2>I am alone...</h2></div></Slide>
      </Slider>

    </CarouselProvider>
  )
}

export default Carousel
