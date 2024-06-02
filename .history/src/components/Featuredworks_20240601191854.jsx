import React from "react";
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';

type BlogPost = {
    title: string;
    date: string;
    author: string;
    shortDescription: string;
    thumbnailImage: string;
  };
  

const FeaturedWorks = () => {
    return(
        <>
        <div className="workcards">

        </div>
        </>
    )
}
export default FeaturedWorks;