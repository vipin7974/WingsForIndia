import './App.css';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import Main from './pages/main';
import Card from './components/card';

function App() {
  return (
    <Box>
      <Main />
      <Grid container sx={{padding:'50px 20px'}}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }} className='div-center'>
          <Card />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }} className='div-center'>
          <Card />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }} className='div-center'>
          <Card />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }} className='div-center'>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
