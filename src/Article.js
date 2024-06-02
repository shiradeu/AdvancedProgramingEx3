import  './Article.css';
import {ReactComponent as Icon} from './logo.svg'
function Article({prop1,prop2,prop3}){
  return (
    <a href="article.html?id=1">
      <h3>{prop1}</h3>
      <h3>{prop2}</h3>
      <category>{prop3}</category>
      <Icon/>
  </a>
    );
}
export default Article;