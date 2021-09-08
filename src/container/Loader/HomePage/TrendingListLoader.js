import {  LoaderTrending } from "../../../components/Blog/Trending";

const TrendingListLoader = () => {
    return (
      <>
        <div class="section-title">
          <h2>Trending</h2>
        </div>
        <LoaderTrending />
        <LoaderTrending />
        <LoaderTrending />
        <LoaderTrending />
        <LoaderTrending />
      </>
    );
  };

export default TrendingListLoader;