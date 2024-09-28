import './App.css';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import Main from './pages/main';
import Card from './components/card';
import Ngo from './assets/ngo.jpg'
import Testimonials from './pages/testimonials';
import Category from './components/category';
import Footer from './pages/footer';
import Mainfooter from './components/mainfooter';
import Header from './pages/Header';

const dummyData = [
  {
    id: 1,
    fund: 100,
    max_fund: 500,
    label: "Help Afreen Who Can't Talk Or Swallow A Morsel Of Food Because Of A Rare Condition",
    image: Ngo
  },

  {
    id: 2,
    fund: 200,
    max_fund: 1500,
    label: "Help Rahul Who Can't Talk Or Swallow A Morsel Of Food Because Of A Rare Condition",
    image: Ngo
  },
  {
    id: 3,
    fund: 150,
    max_fund: 5000,
    label: "Help Piyush Who Can't Talk Or Swallow A Morsel Of Food Because Of A Rare Condition",
    image: Ngo
  },
  {
    id: 4,
    fund: 350,
    max_fund: 2500,
    label: "Help Pinky Who Can't Talk Or Swallow A Morsel Of Food Because Of A Rare Condition",
    image: Ngo
  },
];

const testimonialData = [
  {
    id: 1,
    name: "Shanti Mohan",
    role: "Founder of LetsVenture",
    description: "What struck me most about this venture is the passion and commitment of the founders to make the process of giving easy.",
    image: Ngo
  },
  {
    id: 2,
    name: "Shanti ",
    role: "Founder of Venture",
    description: "What struck me most about this venture is the passion and commitment of the founders to make the process of giving easy.",
    image: Ngo
  },
  {
    id: 3,
    name: "Mohan",
    role: "Founder of Lets",
    description: "What struck me most about this venture is the passion and commitment of the founders to make the process of giving easy.",
    image: Ngo
  },
  {
    id: 4,
    name: "Shaohan",
    role: "Founder of Leture",
    description: "What struck me most about this venture is the passion and commitment of the founders to make the process of giving easy.",
    image: Ngo
  },
];

function App() {
  return (
    <Box>
      <Header />
      <Main />
      <Category name={'Categories'} />
      <Grid container className="padding-35">
        {
          dummyData.map((e, i) => {
            return (
              <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }} key={i} className='div-center'>
                <Card data={e} />
              </Grid>
            )
          })
        }
      </Grid>
      <Category name={'Testimonials'} />
      <Grid container className="padding-35">
        {
          testimonialData.map((e, i) => {
            return (
              <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }} key={i} className='div-center' width={"100%"}>
                <Testimonials data={e} />
              </Grid>
            )
          })
        }
      </Grid>
      <Footer />
      <Mainfooter />
    </Box>
  );
}

export default App;
