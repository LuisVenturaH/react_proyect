import { Box, Button, Container, Grid, Typography } from '@mui/material'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import Products from './components/products';
import CardRobe from './components/CardRobe';
import MyButton from './components/MyButton'
import Albumes from './components/Albumes'


export default function App(){  

  const user = {
    name: 'El Robe',
    url : 'https://estaticosgn-cdn.deia.eus/clip/447aed7c-775d-48b6-8e24-c23b0cf2e400_16-9-aspect-ratio_default_0.jpg',
    imageSize: 180
  }

  return(
    <>
      <Container>
        <h2
        style={{
          textAlign: 'center',
          fontSize: '3rem',
          fontWeight: 900
        }}
        >{user.name}</h2>
        <img src={user.url}
        style={{
          width: user.imageSize,
          marginLeft: 600
        }}
        />
      </Container>
      <Albumes/>

      <Container sx={{ border: 2, borderColor: 'brown', borderRadius: 2, p: 2, m: 4}}>
        <h1>Prueba</h1>
        <Button 
          variant='contained'
          endIcon={<SwipeLeftIcon/>}>Uno</Button>
          
          <MyButton />
     

        <Button 
          variant='outlined'
          startIcon={<TheaterComedyIcon/>}
        >Dos</Button>
      </Container>

      <Container>
        <CardRobe/>
      </Container>

      <Container>
        <Products/>
      </Container>

      <Container sx={{
        border: 3,
        borderColor: 'purple',
        borderRadius: 2,
        padding: 2,
        margin: 4
      }}>
        <Typography>Si no agrego variante por defecto es párrafo</Typography>
        <Typography variant='h1' component={'h2'}>Puedo usar la variante h1 y darle estilo de h2</Typography>
        <Typography 
        variant='body1'
        textAlign='center'
        mt={2}>Agrego estilos al texto</Typography>
        <Box sx={{
          border: 1,
          borderRadius: 2,
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          p: 2,
          fontFamily: 'cursive'
        }}
        component={'h2'}>Esto es una caja, y funciona parecido a un div</Box>
      </Container>
      <Container>
        <Grid 
          container
          spacing={2}
          >

          <Grid 
            item 
              xs={12}
              sm={6}
              md={12}
          >
            
            <p>Párrafo UNO. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Culpa aliquid pariatur cumque perspiciatis excepturi aspernatur beatae eos architecto facilis a. 
               ad, pariatur magni sapiente laborum impedit ullam dignissimos distinctio.</p>
          </Grid>

          <Grid 
            item 
              xs={12}
              sm={6}   
              md={12} 
          >
            <p>Párrafo DOS. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Culpa aliquid pariatur cumque perspiciatis excepturi aspernatur beatae eos architecto facilis a. 
               ad, pariatur magni sapiente laborum impedit ullam dignissimos distinctio.</p>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}