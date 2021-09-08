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