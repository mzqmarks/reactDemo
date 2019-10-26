import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'个人博客-1'},
                {cid:456,title:'个人博客-2'},
                {cid:789,title:'个人博客-3'}
            ]
         }
         this.props.history.push('/home/')//编程式重定向
    }
    render() { 
        return (
            <div>
                {/* Redireact 标签式重定向 */}
                {/* <Redirect to="/home/" /> */}
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={'/list/'+item.cid}>{item.title}</Link>
                                    
                                </li>
                            )
                            
                        })
                    }
                </ul>
            </div>
            
            
            
        );
    }
}
 
export default Index;