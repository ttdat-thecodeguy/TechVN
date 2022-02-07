import React, { useEffect, useState } from "react";
import { BlogBig } from "../../components/Blog/BlogBig";

import { useDispatch, useSelector } from "react-redux";
import { getCategoriesBlogRequest, getBlogBySearchNameRequest } from "../../store/action/blogAction";
import { loadAction } from "../../store/action/loadingAction";

import { Link, useParams } from "react-router-dom";
import {isArray} from "lodash"
const CateBlog = (props) => {
  const dispatch = useDispatch();

  //// init state

  let { id, searchName } = useParams();
  let [page, setPage] = useState(0);
  const [types] = useSelector((state) => [state.typeReducers]);
  const [cate] = useSelector((state) => [state.blogReducers.cate]);

  //sort

  const [isDateAscSort, setDateAscSort] = useState("");
  const [isTitleAscSort, setTitleAscSort] = useState("");

  /// search

  const [searchContent, setSearchContent] = useState("")
  const [search, setSearch] = useState("")
  const [errorSearchContent, setErrorSearchContent] = useState(null)
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    let isSearchAll = false;
    let _search = "";
    if(searchName !== null && searchName !== undefined){
      isSearchAll = true;
    }

    _search = isSearchAll ? searchName : searchContent;

    if (id !== null && id !== undefined) {
      if(isSearch === true || isSearchAll === true){      
        dispatch(getBlogBySearchNameRequest(page, 8, isDateAscSort, isTitleAscSort, id, _search))
      }else{
        dispatch(getCategoriesBlogRequest(page, 8, isDateAscSort, isTitleAscSort, id));
      }

    } else{
      if(isSearch === true || isSearchAll === true){
        dispatch(getBlogBySearchNameRequest(page, 8, isDateAscSort, isTitleAscSort, 0, _search))
      }else{
        dispatch(getCategoriesBlogRequest(page, 8, isDateAscSort, isTitleAscSort, 0))
      }
    }
  }, [dispatch, id, isDateAscSort, isSearch, isTitleAscSort, page, searchContent, searchName]);

  /// type

  const typeMap = item => {
    return (<div class="col-6 card">
    <div class="card-body">
      <a href={`/danh-muc/${item.id}/${item.path}`}>
        {item.name}
      </a>
    </div>
  </div>)
  }

  const mapSameType = () => {
    let isEmpty = true
    let showType = types.map((item, idx) => {
      if(id === undefined) {
        isEmpty = false
        return typeMap(item)
      }else{
        if (item.level === cate.type.level && item.id !== cate.type.id && id !== undefined){
          isEmpty = false
          return typeMap(item)
        }else{
          return "";
        }
      }
      
    })

    if(isEmpty === true) return ( <><img src={process.env.PUBLIC_URL + "/images/data-not-found.png"} width="80" alt="not-data" /><span className="mt-4">Không Có Thông Tin</span></> )
    else return showType
  }

  //// search

  
  const handleSearchByClickButton = e => {
    e.preventDefault()

  }

  const handleSearch = () => {
    if(search === "") {
      setErrorSearchContent("Nội Dung Tìm Kiếm Không Được Rỗng")
    }

    else if(search.length <= 2) {
      setErrorSearchContent("Nội Dung Tìm Kiếm Phải Lớn Hơn 2 Kí Tự")
    }
    else{
      dispatch(loadAction(true))
      
      setErrorSearchContent(null)
      setIsSearch(true)
      setSearchContent(search)
    }

    //check error

  }

  const handleSearchByKeyPress = e => {
    if(e.key === 'Enter'){
      e.preventDefault()
      handleSearch()
    } 
  }

  //// Sort
  const handleDateSort = (e) => {
    e.preventDefault();    
    dispatch(loadAction(true))
    if(isDateAscSort === "") {
      setDateAscSort(true);
    }
    else{
      setDateAscSort(!isDateAscSort);
    } 
  };

  const handleTitleSort = (e) => {
    e.preventDefault();

    dispatch(loadAction(true))
    if(isTitleAscSort === "") setTitleAscSort(true);
    else setTitleAscSort(!isTitleAscSort);
  };

  ///// Paging

  const mapPage = (totalPage) => {
    var indents = [];

    for (let i = 1; i <= totalPage; i++) {
      let active = "";
      if (i === (page+1)) active = "active";
      indents.push(
        <li className={`page-item ${active}`}>
          <Link onClick={e => setPage(i - 1)} className="page-link">{i}</Link>
        </li>
      );
    }
    return indents;
  };

  return (
    <>
      <div className="row mt-4">
        <div class="col-lg-3 ml-3 card">
          <div class="card-body">
            <div class="d-flex">
              <svg
                class="bd-placeholder-img rounded mr-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#007aff"></rect>
              </svg>
              <h5 style={{ textTransform: "uppercase" }}>Xử Lí Sắp Xếp</h5>
            </div>

            <div class="row ml-1">
              <div
                class="col-6 card"
                style={{
                  borderLeft: `5px solid ${isDateAscSort ? "blue" : "red"}`
                }}
                onClick={(e) => handleDateSort(e)}>
                <div class="card-body">
                  Ngày
                  <b>
                    {isDateAscSort ? (
                      <>Tăng Dần &#8593;</>
                    ) : (
                      <>Giảm Dần &#8595;</>
                    )}
                  </b>
                </div>
              </div>
              <div
                class="col-6 card"
                style={{
                  borderLeft: `5px solid ${isTitleAscSort ? "blue" : "red"}`
                }}
                onClick={(e) => handleTitleSort(e)}
              >
                <div class="card-body">
                  Sắp Xếp <b>{isTitleAscSort ? <>A - Z</> : <>Z - A</>}</b>
                </div>
              </div>
            </div>

            <div class="d-flex">
              <svg
                class="bd-placeholder-img rounded mr-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#007aff"></rect>
              </svg>
              <h5 style={{ textTransform: "uppercase" }}>Thể Loại Cùng Cấp</h5>
            </div>

            <div class="row ml-1">
              {mapSameType()}
            </div>

            <div class="d-flex mt-2">
              <svg
                class="bd-placeholder-img rounded mr-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#007aff"></rect>
              </svg>
              <h5 style={{ textTransform: "uppercase" }}>Tìm Kiếm</h5>
            </div>

            <form action="#" class=" mt-2">
              <div class="d-flex ">
                <input
                  type="text"
                  class="searchTerm"
                  placeholder="Tìm Kiếm Trong Danh Mục..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  onKeyPress={e => handleSearchByKeyPress(e)}
                  onKeyDown={e => handleSearchByKeyPress(e)}
                />
                <button type="submit" class="searchBtn" onClick={e => handleSearchByClickButton(e)}>
                  <span class="icon-search"></span>
                </button>
              </div>
            </form>

            { errorSearchContent !== null ? <span className="text-danger"><b>&#9888;{errorSearchContent}</b></span> : "" }

          </div>
        </div>
        <div class="col-lg-8">
          <div class="d-flex">
            <svg
              class="bd-placeholder-img rounded mr-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect width="100%" height="100%" fill="#007aff"></rect>
            </svg>

            { id === undefined && isSearch === false &&  <h5 style={{ textTransform: "uppercase" }}>Toàn Bộ Bài Viết</h5> }
            { id === undefined && isSearch === true &&  
            <div>
              <h5 style={{ textTransform: "uppercase" }}>Tìm Kiếm Bài Viết: {searchContent}</h5> 
              <span>Trong <a href="/danh-sach-blog"> Toàn Bộ Bài Viết </a></span>
            </div>}
            { id !== undefined && isSearch === false &&  <h5 style={{ textTransform: "uppercase" }}>{cate.type.name}</h5> }
            { id !== undefined && isSearch === true &&  <div>
              <h5 style={{ textTransform: "uppercase" }}>Tìm Kiếm Bài Viết: {searchContent}</h5>
              { isArray(cate.type) === false ? <></> : <span>Trong <a href={`/danh-muc/${cate.type[0].id}/${cate.type[0].path}`}> {cate.type[0].name} </a></span> }  
            </div> }

          </div>

          { id !== undefined && isSearch === false && <div class="card">
            <div class="card-body">{cate.type.description}</div>
          </div>}
          {cate !== undefined && cate.list !== undefined &&  cate.list.length > 0 ? (
            <>
              <div className="row">
                {cate.list.map((item, idx) => {
                  return (
                    <div className="col-3">
                      <BlogBig post={item} />
                    </div>
                  );
                })}
              </div>

              <nav
                aria-label="Page navigation"
                className="d-flex justify-content-center">
                <ul className="pagination">
                  {page === 0 ? (
                    ""
                  ) : (
                    <li className="page-item">
                      <Link className="page-link" onClick={e => setPage(page - 1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </Link>
                    </li>
                  )}
                  {mapPage(cate.size)}
                  
                  {(page + 1)  === cate.size || cate.size === 0 ? (
                    ""
                  ) : (
                    <li className="page-item">
                      <Link className="page-link" onClick={e => setPage(page + 1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </>
          ) : (
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/images/nodata.jpg"}
              alt="empty"></img>
          )}
        </div>
      </div>
    </>
  );
};

export default CateBlog;
