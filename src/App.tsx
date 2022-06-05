import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./About/About";
import ExternalLinks from "./ExternalLinks/ExternalLinks";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

export default function App() {
  return (
    <div
      className="bg-primary"
      style={{ height: "100%", fontFamily: "Monolisa" }}
    >
      <div
        style={{
          background:
            "linear-gradient(to right, #E39600, #EA4C89, #8F48EB, #1DA1F2)",
          height: "3px",
        }}
      ></div>
      <Navbar />
      <div className="content" style={{ marginBottom: "10px" }}>
        <div className="text-center ">
          <About />
          <ExternalLinks />
          <div
            className="divider before:bg-secondary after:bg-secondary text-secondary"
            style={{
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              fontFamily: "MonolisaB",
            }}
          >
            experiences
          </div>
        </div>
        <div>
          <Experience />
          <div
            className="divider before:bg-secondary after:bg-secondary text-secondary"
            style={{
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              fontFamily: "MonolisaB",
            }}
          >
            projects
          </div>
        </div>
        <div>
          <Projects />
          <div
            className="divider before:bg-secondary after:bg-secondary text-secondary"
            style={{
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              fontFamily: "MonolisaB",
            }}
          ></div>
        </div>
      </div>
      <div style={{ padding: "20px" }} className="flex justify-center">
        <img
          alt="byepepe"
          src="/pepefrgBye.gif"
          className="content-center"
          style={{ height: "100px", borderRadius: "80px" }}
        ></img>
      </div>
      <p className="text-2xl text-center text-white">FIN.</p>
      <div
        style={{
          background:
            "linear-gradient(to right, #E39600, #EA4C89, #8F48EB, #1DA1F2)",
          height: "6px",
        }}
      ></div>
    </div>
  );
}
