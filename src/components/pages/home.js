import CardBuddy from "../card";
import banner_bg from "../../assets/images/banner_bg.png";
import event from "../../assets/images/event_bg1.png";
import SubNav from "../subnav/index";
import Visit from "../top-places/index";
import { Box, Button, Rating, Typography } from "@mui/material";
import Hotel from "../top-hotel/index";
import Footer from "../footer/index";
import WhatTheySaid from "../whytheysaid";
import image1 from "../../assets/images/img-card-hotel-01.png";
import image2 from "../../assets/images/img-card-hotel-02.png";
import image3 from "../../assets/images/img-card-hotel-03.png";
import image4 from "../../assets/images/img-card-tsp-01.png";
import image5 from "../../assets/images/img-card-tsp-02.png";
import image6 from "../../assets/images/img-card-tsp-03.png";
import BestService from "../best-services";

function Home() {
  return (
    <>
      <div className="App">
        <CardBuddy image={banner_bg}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                color: "white",
                color: "white",
                fontWeight: "700",
                fontSize: "96px",
                lineHeight: "116px",
              }}
            >
              Travel Buddy
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: "white" }}
            >
              Let’s start your journey with us, your dream will come true
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff5733",
                padding: "15px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              Discover Now
            </Button>
          </Box>
        </CardBuddy>
        <SubNav />
        <Visit />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff5733",
              padding: "15px 30px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            Discover More
          </Button>
        </div>
        <CardBuddy image={event}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              alignContent: "center",
              backgroundColor: "white",
              padding: "30px",
            }}
          >
            <Box
              sx={{
                color: "black",
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "#FF5403" }}
              >
                Upcoming Event
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#041562",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "32px",
                  lineHeight: "39px",
                }}
              >
                India - Himachal
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  color: "#626262",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Waters make fish every without firmament saw had. Morning <br />
                air subdue. Our, air very one. Whales grass is fish whales
                <br />
                winged.
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#606060",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  marginTop: "30px",
                }}
              >
                date : 12 Aug 2020
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#606060",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  marginTop: "15px",
                }}
              >
                {" "}
                cost : Start from Rp3000.000,00
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#606060",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  marginTop: "15px",
                }}
              >
                organizer : TravelBuddy
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Typography component="legend">Rating:</Typography>
                <Rating name="rating" value={5} readOnly />
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff5733",
                marginTop: "30px",
              }}
            >
              Plan Details
            </Button>
          </Box>
        </CardBuddy>
        <Hotel
          a1={image1}
          a2={image2}
          a3={image3}
          text="Top Hotel & Restaurants"
          text2="The Best Hotel & Restaurants in India"
          gCol="4"
        />
        <WhatTheySaid />
        <BestService
          a1={image4}
          a2={image5}
          a3={image6}
          text="We offered best services"
          text2="The best service"
          gCol="4"
        />
        <Footer gCol="6" />
      </div>
    </>
  );
}

export default Home;
