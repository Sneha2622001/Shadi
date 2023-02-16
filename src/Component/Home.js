import React from "react";
import "../home.css";
import Homeimg1 from "../Images/Home1.jpg";
import Homeimg2 from "../Images/Home2.jpg";
import Homeimg3 from "../Images/Home3.jpg";
import Homeimg4 from "../Images/Home4.jpg";
import Homeimg5 from "../Images/heroine2.png";
import ring from "../Images/ring.png";
import user from "../Images/user.png";
import trust from "../Images/trust.png";

export default function Home() {
  return (
    <div className="background_img">


              {/*1st Banner */}
              <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Homeimg1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Homeimg2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Homeimg3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Homeimg4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* End of 1st Banner */}



        {/* Form */}
        <div className="registerform">
          <div className="mb-3 h3">
            <h3>
              Find Your perfect match <br />
              with Rishte
            </h3>
          </div>
          <form>
            <div className="row">
              <div className="col-md-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                {/* <div className="mb-3 div1"> */}
                <label for="name" class="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <div className="col-md-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>+91</option>
                    <option value="1">+1</option>
                    <option value="F">+710</option>
                    <option value="O">+94</option>
                  </select>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Text input with dropdown button"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-3 ">
              <div className="col-md-12">
                <label for="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-md-12">
                <select
                  className="form-select "
                  aria-label="Default select example"
                >
                  <option selected>Created By </option>
                  <option value="1">Relative</option>
                  <option value="2">Brother</option>
                  <option value="3">Friend</option>
                  <option value="4">Family</option>
                  <option value="5">Myself</option>
                  <option value="6">Other</option>
                </select>
              </div>
            </div>
          </form>
          <button type="submit" className="btn btn-primary register w-100">
              REGISTER FREE
            </button>
        </div>



      {/* 2nd banner start here  */}
      <div className="banner2">
      <div className="main">
        <div className="main1">
          <img src={Homeimg5} alt="" className="img1" />
          <h1>Exclusive Services</h1>
          <p className="para">
            Get individual service from an Exclusive Team Advisor Under the
            guidance of Kalyanamalai Mohan
          </p>
          <div className="main2nd">
            <div className="ring">
              <img src={ring} alt="" />
            </div>
            <div className="main2nd">
              <p className="banner_text">
                <big>
                  <b>23</b>
                </big>
                <br />
                Years of Service
              </p>
            </div>
            <div className="user">
              <img src={user} alt="" />
            </div>
            <div className="main2nd">
              <p className="banner_text">
                <big>
                  <b>7500+</b>
                </big>
                <br />
                Exclusive Members{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="main2">
          <div>
            <img src={trust} alt="" />
          </div>
          <div>
            <p className="trustdiv">
              <b>Highly protected & confidentail service under the guidance of
              Kalyanamalai Mohan</b>
            </p>
            <p className="para">
              Meeting by appointments only <br />
              To fix your appointment with Mr.T.V.Mohan <br />
              Contact: +91 99404 11125 | +91 98408 91400
            </p>
          </div>
         
        </div>
        
      </div>
      <button className="btn know_more">Know More</button>
      </div>
        {/* 2nd banner end here  */}


          {/* 3rd banner start here  */}

          <div className="banner3">
            <div className="part">
              <div className="part1">
              <h3 className="part1heading">Meet your life partner with Kalyanamalai App!</h3>
              <div className="btn_animation">
              <button className="btn_part1"><b>Stylish, Simple and Unique !</b></button> <br />
              <button className="btn_part1"><b>Be creative !</b></button>
              </div>
              <p className="part_para">Our App hosts profiles of millions of prospective and eligible brides and grooms from all communities. Profiles with relevant details and photos are available for the website users. The systematically arranged profiles with details, makes the search for brides and grooms easy.</p>
              <br />
              <p><b>Our App Packed with amazing features</b></p>
              <p> Reliable and Secure Platform</p>
              <p> Everything is perfectly orgainized for future</p>
              <p>Stylish ,Simple and Unique !</p>
              </div>


              {/* <div className="part2">
                bye
              </div> */}
            </div>
          </div>
            {/* 3rd banner start here  */}



  {/* 4th banner start here  */}
  <div className="banner4">
            <div className="turn">
              <div className="turn1">
               
              </div>


              <div className="turn2">
                bye
              </div>
            </div>
          </div>
    </div>
  );
}
