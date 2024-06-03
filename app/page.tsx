
import React from "react";
import data from '../public/data.json';
import Navbar from "./Navbar";
import { Social } from "./Social";
import Button from "./Button";
import Faq from "./Faq";

const App2 = () => {
  
  const response:any = data;
  const bgcolor = data.bgcolor;
  const textcolor = data.textcolor;
  const detailscolor = data.detailscolor;
  const buttoncolor = data.buttoncolor;

  const {
    font,
    images,
    header,
    about,
    service,
    review,
    faq,
    cta,
    footer,
    btn1,
    btn2,
    social,
  } = data;

  return (
    <section style={{ background: `${bgcolor}` }} className="">
      <div
        style={{
          background: `${bgcolor}`,
          color: `${textcolor}`,
        }}
        className={`mx-auto flex flex-col relative overflow-hidden`}
      >
        <Navbar
          buttoncolor={buttoncolor}
          image={images.navbar}
          btn={btn1}
          social={social}
          textcolor={textcolor}
          bgcolor={bgcolor}
        />
        <div className="h-20" />
        <Header
          editedText={response.header}
          detailscolor={detailscolor}
        />
       
       <div className="h-20" />
        
        <Service
          editedText={response.service}
        />
        
         <About
          editedText={response.about}
          detailscolor={detailscolor}
        />
        
        <Review
          editedText={response.review}
        />
        <div className="h-20" />
        
        <Faq
          editedText={response.faq}
          detailscolor={detailscolor}
        />
        <div className="h-20" />
        <Cta
          editedText={response.cta}
          btn={response.btn2}
          buttoncolor={buttoncolor}
        />
        <Footer
          editedText={response.footer}
          social={social}
          textcolor={textcolor}
        />
      </div>
    </section>
  );
};

const Header = ({
  editedText,
  detailscolor,
}: any) => {

  const headerText = editedText;

  return (
    <section
      id="header"
      className="min-h-screen flex flex-col gap-8 p-4 md:flex-row justify-center items-center text-center md:text-left max-w-screen-2xl mx-auto "
    >
      <div className="flex flex-col justify-start p-4">
        <p className="">{headerText.titolo}</p>
        <h1 className="text-4xl text-pretty">
         {headerText.slogan}
        </h1>
        <p className="">{headerText.descrizione}</p>
      </div>

      <div
        className=" -mr-48 sm:mr-0 xl:w-2/3"
      >
        <img src={"./photo/header.webp"} style={{ borderColor: detailscolor }} alt="main" className=" ml-12 md:ml-0  aspect-square object-cover rounded-full h-[50vh] w-[50vh] md:h-full md:w-full border-8 shadow-inner shadow-gray-600  " />
      </div>
    </section>
  );
};


const Service = ({ editedText }: any) => {
  const serviceText = editedText;

  return (
    <section
      id="servizi"
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-auto-fit mt-24 gap-4 max-w-screen-2xl mx-auto overflow-hidden"
    >
      {serviceText.map((service: any, index: number) => (
        <div key={index} className="flex flex-col items-center w-full gap-2 p-4">
          <Servimg index={index} />
          <div className="flex flex-col w-[80%] gap-2 p-3 text-center  z-10 justify-center">
            <h3 className="font-bold">
              {service.nome}
            </h3>
            <p>{service.testo}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const Servimg = ({ index }:any) => {
  const imageUrl = `./photo/service${index + 1}.webp`;

  return (
    <div className="rounded-full w-36 mx-auto overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={imageUrl}
          alt={`service-${index + 1}`}
          className="rounded-full aspect-square object-cover"
          key={imageUrl}
        />
      </div>
    </div>
  );
};

const About = ({
  editedText,
  detailscolor,
}: any) => {
  const about = editedText;

  return (
    <section
      id="aboutus"
      className="min-h-screen flex flex-col-reverse sm:flex-row justify-center gap-8 items-center w-full max-w-screen-2xl mx-auto mt-20 sm:mt-0"
    >
      <div className=" -ml-28 rounded-full border-8 shadow-inner shadow-gray-600 flex order-2 sm:order-1"
      style={{borderColor: detailscolor}}>
        <img
          className="rounded-full aspect-square object-cover w-full max-w-screen-sm sm:max-w-screen-md"
          alt="main"
          src={"./photo/about.webp"}
        />
      </div>

      <div className=" rounded-full flex flex-col justify-center text-center w-full order-1 sm:order-2 px-2">
        <h1 className="text-4xl ">
          <p className="p-1 ">{about.title}</p>
        </h1>
        <p className="text-lg ">
          {about.text}
        </p>
      </div>
    </section>
  );
};

const Review = ({ editedText }: any) => {
  const reviews = editedText;

  return (
    <section
      id="review"
      className="w-full my-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-screen-2xl mx-auto px-2 mt-40 sm:mt-0"
    >
      {reviews.map((review: any, index: any) => (
        <div
          className={`w-full flex flex-row justify-between border p-4 rounded-xl items-center gap-4 ${
            index === 2 ? "md:col-auto sm:col-span-full" : ""
          }`}
          key={index}
        >
          <img
              className="h-8 w-8 rounded-full"
              src={`./photo/review${index+1}.webp`}
              alt={`review ${index}`}
            />

          <div className="ml-auto justify-end flex items-start gap-4 flex-col ">
            <p>{review.text}</p>
            <p>{review.nome}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const Cta = ({ editedText, buttoncolor, btn }:any) => {
  return (
    <section
      id="cta"
      className="my-20  flex flex-col items-center justify-center max-w-screen-2xl mx-auto"
    >
      <div className="flex flex-col ">
        <h1 className="max-w-screen-md text-center p-4 text-xl">{editedText}</h1>

        <Button buttoncolor={buttoncolor} btn={btn} />
      </div>
    </section>
  );
};

const Footer = ({ editedText,social,textcolor }:any) => {
  return (
    <section className="p-8 flex flex-col justify-center border-t border-gray-200 w-full gap-4" id="footer">
      <Social social={social} textcolor={textcolor}/>
      <div className="flex flex-row justify-center gap-4">
      <a href="#header"><p>{editedText.home}</p></a>
      <a href="#aboutus"><p>{editedText.about}</p></a>
      <a href="#servizi"><p>{editedText.servizi}</p></a>
      </div>
      <div className="flex relative bottom-0 h-14 items-center justify-center gap-2">
        <svg
          className="w-4 h-4"
          
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M10 9C10 8.44754 10.4476 8 10.9997 8H13C13.5071 8 13.7898 8.16249 13.9378 8.28087C14.0486 8.36952 14.1077 8.45538 14.119 8.4731C14.3737 8.94812 14.962 9.13706 15.4472 8.89443C15.9309 8.65259 16.1361 8.03372 15.8934 7.55064C15.8387 7.44229 15.7712 7.34071 15.6984 7.24375C15.5859 7.09376 15.4194 6.90487 15.1872 6.71913C14.7102 6.33751 13.9929 6 13 6H10.9997C9.34271 6 8 7.34332 8 9V14.9999C8 16.6566 9.34275 17.9999 10.9998 17.9999L13 17.9999C13.9929 18 14.7101 17.6625 15.1872 17.2809C15.4194 17.0951 15.5859 16.9062 15.6984 16.7563C15.7714 16.659 15.8389 16.5568 15.8939 16.4483C16.138 15.9605 15.9354 15.3497 15.4472 15.1056C14.962 14.8629 14.3737 15.0519 14.119 15.5269C14.1077 15.5446 14.0486 15.6305 13.9378 15.7191C13.7899 15.8375 13.5071 16 13 15.9999L10.9998 15.9999C10.4476 15.9999 10 15.5524 10 14.9999V9Z"
              fill="#0F0F0F"
              style={{ fill: textcolor }}
            ></path>{" "}
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
              fill="#0F0F0F"
              style={{ fill: textcolor }}
            ></path>{" "}
          </g>
        </svg>
        <p>{editedText.azienda}</p>
      </div>
    </section>
  );
};

export default App2;
