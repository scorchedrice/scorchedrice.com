import "./src/global.css";
import "prismjs/themes/prism-solarizedlight.css"

// gatsby-ssr.js 또는 gatsby-browser.js
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ className: 'dark' }) // 기본 다크모드
}
