import Head from "next/head";
import React from "react";
import A from "./A";

const MainContainer = ({ children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={`Aidar, nextjs ${keywords}`}></meta>
        <title>Home page</title>
      </Head>

      <div className="navbar">
        <A href={"/"} text={"Home"} />
        <A href={"/users"} text={"Users"} />
      </div>

      {children}

      <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
            }
          `}
        </style>
    </>
  );
};

export default MainContainer;
