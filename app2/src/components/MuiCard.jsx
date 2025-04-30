import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MuiCard = () => {
  return (
    <div>
         <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://images.pexels.com/photos/735174/pexels-photo-735174.jpeg?cs=srgb&dl=pexels-sam-lg-735174.jpg&fm=jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      
    </div>
  )
}

export default MuiCard
