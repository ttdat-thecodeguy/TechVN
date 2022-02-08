const IMG_URL = "http://res.cloudinary.com/hcmusvnu/image/upload/v1629446289/cloudinary/"
export const IMG_URL_ACCOUNT = `${IMG_URL}/account/`
export const IMG_URL_BLOG = `${IMG_URL}/blog/`

export const editorConfig = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "|",
        "imageUpload",
        "blockQuote",
        "insertTable",
        "mediaEmbed",
        "undo",
        "redo",
        "sourceEditing",
        "code",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "fontSize",
        "subscript",
        "superscript",
        "specialCharacters",
        
      ],
    },
    language: "en",
    image: {
      toolbar: [
        "imageTextAlternative",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
    },
    licenseKey: "",
  };

  ///// CHART 


  export const ColumnDefaultOptions = {
    maintainAspectRatio: false,
    responsive: false,
  };

  export const SUCCESS = { id: 1, name : "Thành Công" };
  export const DANGER = { id: 2, name : "Cảnh Báo" };
  export const PENDING = { id: 3, name : "Đang Chờ" };

 export const MAIN_URL = `https://techblog-vn.herokuapp.com`

  export const WS_MESSAGE = `${MAIN_URL}/ws-message`;
