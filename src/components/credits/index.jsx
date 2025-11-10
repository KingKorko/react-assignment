import React from "react"
import {Box} from "@mui/material"
import {Typography} from "@mui/material"
import {Avatar} from "@mui/material"
import {Grid} from "@mui/material"
import {Paper} from "@mui/material"
import img from "../../images/film-poster-placeholder.png"


  {/* Assignment Additions - This gets the first eight cast members
    of a movie by mapping credits.cast, it then displays their real name, characters
    name from the movie and then displays their picture*/}

export default function Credits({ credits }) {
  const movieCredits = credits?.cast?.slice(0, 8) || []

  return (
    <Box>
      <Paper 
      elevation={3} 
      sx={{ p:2, mb:3, mt:3, borderRadius: 100, background:"rgba(248,248,248,.7)",  textAlign:"center" }}>
        <Typography variant="h4" fontWeight={700}>Credits</Typography>
      </Paper>

      <Grid container spacing={2} justifyContent="center">
        {movieCredits.map(person => (
            <Paper elevation={3} sx={{ borderRadius: 100, px:2, py:1.5, display:"flex", 
            alignItems:"center", gap:2,background:"rgba(255,255,255,.9)"}}>

              <Avatar alt={person.name} src={person.profile_path ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : img} 
              sx={{ width:60, height:60, borderRadius:"50%" }} />

              <Box minWidth={0} >
                <Typography variant="subtitle1" noWrap fontWeight={700}>{person.name}</Typography>

                <Typography variant="subtitle2" noWrap color="text.secondary">{person.character}</Typography>
              </Box>
            </Paper>
        ))}
      </Grid>
    </Box>
  )
}
