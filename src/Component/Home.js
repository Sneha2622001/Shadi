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
import playstore from "../Images/play-store.png";
import appstore from "../Images/app-store.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import B4img1 from "../Images/B4-1png.png";
import B4img2 from "../Images/B4-2.png";
import B4img3 from "../Images/B4-3.png";
import B4img4 from "../Images/B4-4.png";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import couple1a from "../Images/couple1a.jpg";
import couple1b from "../Images/couple1b.jpg";
import couple2a from "../Images/couple2a.jpg";
import couple2b from "../Images/couple2b.jpg";
import couple3a from "../Images/couple3a.jpg";
import couple3b from "../Images/couple3b.jpg";
import B7img1 from "../Images/B7img1.png";
import B7img2 from "../Images/B7img2.png";
import B7img3 from "../Images/B7img3.png";
import B7img4 from "../Images/B7img4.png";


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
          <p className="formheading">Find Your perfect match with Rishte</p>
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
                <b>
                  Highly protected & confidentail service under the guidance of
                  Kalyanamalai Mohan
                </b>
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
            <h3 className="part1heading">
              <b>Meet your life partner with Kalyanamalai App!</b>
            </h3>
            <div className="btn_animation">
              <button className="btn_part1">
                <b>Stylish, Simple and Unique !</b>
              </button>{" "}
              <br />
              <button className="btn_part1">
                <b>Be creative !</b>
              </button>
            </div>
            <p className="part_para">
              Our App hosts profiles of millions of prospective and eligible
              brides and grooms from <br />
              all communities. Profiles with relevant details and photos are
              available for the <br />
              website users. The systematically arranged profiles with details,
              makes the search for <br />
              brides and grooms easy.
            </p>
            <br />
            <p>
              <b>Our App Packed with amazing features</b>
            </p>
            <p>
              {" "}
              <CheckCircleOutlineIcon id="tick" /> Reliable and Secure Platform
            </p>
            <p>
              {" "}
              <CheckCircleOutlineIcon id="tick" /> Everything is perfectly
              orgainized for future
            </p>
            <p>
              {" "}
              <CheckCircleOutlineIcon id="tick" /> Stylish ,Simple and Unique !
            </p>
          </div>

          <div className="imgstore">
            <img src={playstore} alt="" />
            <img className="appstore" src={appstore} alt="" />
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
            <div>
              <div>
                <img className="B4img1" src={B4img1} alt="" />
              </div>

              <div>
                <img className="B4img2" src={B4img3} alt="" />
              </div>
            </div>

            <div className="B4row">
              <div>
                <img className="B4img3" src={B4img2} alt="" />
              </div>

              <div>
                <img className="B4img4" src={B4img4} alt="" />
              </div>
            </div>
          </div>

          <div className="turn2">
            <div>
              <div className="b4para">
                <h2>
                  <b>Kalyanamalai Private Limited</b>
                </h2>
                <p>
                  Kalyanamalai Private Limited , was started in 2000 and shot to
                  fame with its unique TV program, Kalyanamalai. The company
                  offers matrimonial services to Indians and Non Resident
                  Indian's. <br /> Matrimonial alliances are arranged through
                  the television programme, magazines and website We also
                  arrange events and exclusive community meetings for
                  prospective brides and grooms.
                </p>
              </div>

              <hr />
              <div className="b4para">
                <h4>
                  <b>Types of Matrimonial Services Offered</b>
                </h4>
                <p>
                  <DoneAllIcon id="icon" /> Kalyanamalai SUN TV Program
                </p>
                <p>
                  <DoneAllIcon id="icon" /> Kalyanamalai e-Magazine
                </p>
                <p>
                  <DoneAllIcon id="icon" /> Kalyanamalai Website
                </p>
                <p>
                  <DoneAllIcon id="icon" /> Specially Arranged Matrimonial
                  Ground Events
                </p>
                <p>
                  <DoneAllIcon id="icon" /> Exclusive Service
                </p>
                <p>
                  <DoneAllIcon id="icon" /> Community Meets
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      {/* 4th banner end here  */}

      {/* 5th banner start here  */}
      {/* 5th banner end here  */}

      {/* 6th banner start here  */}
     
      <div className="banner6">
      <h2 className="B6heading"><b>Testimonials</b></h2>
       <div className="couple">
       <div className="couple1" >
        <div className="couple1img">
          <div className="pic">
          <img className="pic1" src={couple1a} alt="" />
          <img className="pic2" src={couple1b} alt="" />
          </div>
          <h4><b>B Ashok Babu & S Aarthi</b></h4>
          <p className="B6para">Our soulmate search was made easy <br /> by Kalyanamalai as we got to know <br /> each other very quickly <br />
          with the splendid service rendered</p>
          <a className="readmore" href="#">Read More</a>
        </div>
        
       </div>
        <div className="couple2">
        <div className="couple" >
        <div className="couple1img">
          <div className="pic">
          <img className="pic1" src={couple2a} alt="" />
          <img className="pic2" src={couple2b} alt="" />
          </div>
          <h4><b>Rajesh & K Kanimozhi</b></h4>
          <p className="B6para2">We were very keenly searching for a <br />
          life partner for our daughter. We <br /> were preferably looking for a <br />
           Chennai settled family. Initially we</p>
          <a className="readmore" href="#">Read More</a>
        </div>
        
       </div>
        </div>
        <div className="couple3">
        <div className="couple" >
        <div className="couple1img">
          <div className="pic">
          <img className="pic1" src={couple3a} alt="" />
          <img className="pic2" src={couple3b} alt="" />
          </div>
          <h4><b>Lenin Su S & Bharathi K</b></h4>
          <p className="B6para2">I registered the profile of my first <br /> daughter Selvi. K Bharathi (717895) in <br />
           Kalyanamalai to find a suitable <br /> 
           groom for her. I met Thiru Ramesh,</p>
          <a className="readmore" href="#">Read More</a>
        </div>
        
       </div>
        </div>
       </div>
        </div>
           {/* 6th banner end here  */}




                 {/* 7th banner start here  */}
                 <div className="banner7">
                  <h2 className="b7head"><b>Proud Partner</b></h2>
                  <div className=" d-flex justify-content-around">
                    <img className="b7img" src={B7img1} alt="" />
                    <img className="b7img" src={B7img2} alt="" />
                    <img className="b7img"  src={B7img3} alt="" />
                    <img className="b7img"  src={B7img4} alt="" />
                  </div>
                 </div>
      </div>
    
  );
}
