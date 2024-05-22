
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';
import Chart from './Chart';



function Udise() {


  const [dataInPercentage, setDataInPercentage] = useState([]);

  const [textBookPercentage, settextBookPercentage] = useState([]);
  const [drinkingWaterPercentage, setDrinkingWaterPercentage] = useState([]);
  const [electricityPercentage, setElectricityPercentage] = useState([]);
  const [libraryPercentage, setLibraryPercentage] = useState([]);
  const [toiletPercentage, setToiletPercentage] = useState([]);
  const [rampPercentage, setRampPercentage] = useState([]);

  const cardsData = [
    { title: `${drinkingWaterPercentage} %`, content: "Drinking Water" },
    { title: `${electricityPercentage} %`, content: "Electricity" },
    { title: `${toiletPercentage} %`, content: "Toilets" },
    { title: `${rampPercentage} %`, content: "Ramp" },
    { title: `${textBookPercentage} %`, content: "Text Book" },
    { title: `${libraryPercentage} %`, content: "Library" },
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:30001/school_data");
      const result = response.data;
      console.log("result", result);
      console.log("result", result[0].category_name);

      var received_textbook = 0;
      var drinking_water = 0;
      var electricity = 0;
      var library = 0;
      var toilet = 0;
      var ramp = 0;
      const totalArrayData = result.length;

      result.forEach((item) => {
        received_textbook += item["%_govt_aided_schools_received_textbook"];
        drinking_water += item["%_schools_having_drinking_water"];
        electricity += item["%_schools_having_electricity"];
        library += item["%_schools_having_library"];
        toilet += item["%_schools_having_toilet"];
        ramp += item["%_schools_with_ramp"];
      });

      const totalTextBookPercentage = (
        received_textbook / totalArrayData
      ).toFixed(2);
      const totalDrinkingWaterPercentage = (
        drinking_water / totalArrayData
      ).toFixed(2);
      const totalElectricityPercentage = (electricity / totalArrayData).toFixed(
        2
      );
      const totalLibraryPercentage = (library / totalArrayData).toFixed(2);
      const totalToiletPercentage = (toilet / totalArrayData).toFixed(2);
      const totalRampPercentage = (ramp / totalArrayData).toFixed(2);

      settextBookPercentage(totalTextBookPercentage);
      setDrinkingWaterPercentage(totalDrinkingWaterPercentage);
      setElectricityPercentage(totalElectricityPercentage);
      setLibraryPercentage(totalLibraryPercentage);
      setToiletPercentage(totalToiletPercentage);
      setRampPercentage(totalRampPercentage);

      // setDistData(result)
      // let arryValue=[];
      // arryValue.push(
      //   totalTextBookPercentage,
      //   totalDrinkingWaterPercentage,
      //   totalElectricityPercentage,
      //   totalLibraryPercentage,
      //   totalToiletPercentage,
      //   totalRampPercentage
      // );
      // setDataInPercentage(arryValue)
    };
    fetchData();
  }, []);
  console.log("All array : ", dataInPercentage);
 

  return (
   <>
    <Navbar />
      <div className="bgColor">
        <Box height={55} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography sx={{ color: "darkblue" }}>
              <strong>UDISE+</strong>
              <p>
                The Unified District Information System for Education (UDISE) is
                an educational management information system collected by school
                adminstrators on yearly basis.
              </p>
              <hr />
            </Typography>
            <Box sx={{ border: "1px solid lightgray", padding: "20px" }}>
              <Container maxWidth="100%">
                <Grid container spacing={2}>
                  {cardsData.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
                      <Card
                        sx={{
                          background:
                            "linear-gradient(to right,#083270 , #4286f4)",
                          color: "white",
                        }}
                      >
                        <CardContent style={{ textAlign: "center" }}>
                          <Typography variant="h5" component="h2">
                            {card.title}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {card.content}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Chart/>
             
              </Container>
            </Box>
          </Box>
         

        </Box>
      </div>
   </>
  )
}

export default Udise




