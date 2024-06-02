import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import FeaturedWorks from '../components/FeaturedWorks';

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

const Home: React.FC<Props> = ({ blogPosts }) => {
  return (
    <div className={styles.container}>
      <FeaturedWorks blogPosts={blogPosts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'blogPosts.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const blogPosts = JSON.parse(fileContents);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
