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
        {blogPosts.map((post, index) => (
            <div key={index} className={styles.blogItem}>
              <div className={styles.blogItemHead}>
                <h3 className={styles.head}>{post.title}</h3>
              </div>
              <div className={styles.blogInfo}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.author}>{post.author}</span>
              </div>
              <div className={styles.blogPara}>
                <p className={styles.para}>{post.shortDescription}</p>
              </div>
              {post.thumbnailImage && (
                <div className={styles.blogImage}>
                  <Image 
                    src={post.thumbnailImage} 
                    alt={post.title} 
                    width={200} 
                    height={200} 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        </>
    )
}
export default FeaturedWorks;