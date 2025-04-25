import React from "react";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} className={`${props.htmlAttributes.className ? props.htmlAttributes.className : ""}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="풀스택 개발자 한지웅의 블로그, 포트폴리오 페이지입니다. scorchedrice라는 닉네임으로 활동하고 있습니다." />
        <meta name="keywords" content="프론트엔드, Gatsby, 블로그, 개발, 웹개발" />
        <meta name="author" content="scorchedrice" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className={props.bodyAttributes.className}>
      {props.preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
      </body>
    </html>
  );
}
