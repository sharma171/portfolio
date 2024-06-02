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
  
  
type Props = {
    blogPosts: BlogPost[];
  };

const FeaturedWorks: React.FC<Props> = ({ blogPosts }) => {
    return(
        <>
        <div className="workcards">

        </div>
        </>
    )
}
export default FeaturedWorks;