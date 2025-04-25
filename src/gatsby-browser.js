import "./src/global.css";
import "prismjs/themes/prism-solarizedlight.css"

export const onRenderBody = ({ setHtmlAttributes }) => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    setHtmlAttributes({ className: theme });
  } else {
    setHtmlAttributes({ className: 'dark' }) // 기본 다크모드
  }
}
