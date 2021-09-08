import {  LoaderBlogBig } from "../../../components/Blog/BlogBig";
import {  LoaderBlogChild } from "../../../components/Blog/BlogChild";

const TopLikeLoader = () => {
  return (
    <>
    <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Editor's Pick</h2>
          </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
          <LoaderBlogBig />
        </div>
        <div class="col-md-6">
          <LoaderBlogChild />
          <LoaderBlogChild />
          <LoaderBlogChild />
        </div>
      </div>   
    </>
  );
}
export default TopLikeLoader;