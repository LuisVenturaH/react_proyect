import { Box, Button, Paper, Typography, styled } from "@mui/material";

export default function Product(){

    const Img = styled('img')({
        width: 200,
        height:'100%',
        objectFit: 'cover',
        objectPosition: 'center'
    })

    return (
        <Paper
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                overflow: 'hidden',
                width: 600,
                m: 1,
                p: 2
            }}
        >
            <Img src="https://imagenes.elpais.com/resizer/nQCXli-32CX8hCo3T4FAEfq-9zA=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZV56NHEOWFAPHAOWQ2H7EKKPQ4.jpg" alt="Foto de Robe"/>
        <Box sx={{ flexGrow: 1, display: 'grid', gap: 2, m: 1, p: 1}}>
            <Typography
                sx={{
                    fontSize: 40,
                    fontWeight: 800
                }}
                >El Robe</Typography>
            <Typography>En Directo</Typography>
            <Button variant="contained">Comprar tickets</Button>
        </Box>
        <Box>Gira 2024</Box>
        
        </Paper>
    )
}