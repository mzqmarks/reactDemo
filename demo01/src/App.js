import React,{Component} from 'react'
class App extends Component {
    render() {
      return (
        //   JSX模版，遇到<当作html解析，遇到{} 当作javascript 解析
        <ul className="my-list"> 
            <li>{false ? 'Jspang.com' : '技术胖'}</li>
            <li>I Love React</li>
        </ul>
        // var child1 = React.createElement('li',null,'jspang.com');
        // var child2 = React.createElement('li',null,'I Love React');
        // var root = React.createElement('ul','my-list',child1,child2)

        
      ) 
    }
}
export default App;