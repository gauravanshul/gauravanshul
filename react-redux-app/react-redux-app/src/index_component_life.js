/**
 * Component Life cycle
 * Life cycle is classified based on phase
 * 1.Mount Phase
 *   Initial Render
 *  1.constructor()
    2.componentWillMount()
    3.render()
    4.componentDidMount()
 * 2.Update Phase
 *   Once UI rendered ,triggered by events
 *  1.componentWillReceiveProps()
    2.shouldComponentUpdate()
    3.componentWillUpdate()
    4.render()
    5.componentDidUpdate()
 * 3.UnMount Phase
 *   When DOM Element is removed from the DOM Tree
 */
import React ,{Component } from 'react';
import { render } from 'react-dom';


class ComponentLife extends Component{
    constructor() {
        super();
        
        this.state = { txtValue: 'init' }
        this.updateMe = this.updateMe.bind(this);

        console.log('Constructor is called!');
    }

    
    updateMe(event) {
        this.setState({ txtValue: event.target.value });
    }

    //overriding life cycle methods
    componentWillMount() {
        console.log('Will Mount is called!');
    }
    render() {
        return (
            <div>
                <h1>LifeCycles</h1>
            <Welcome name={this.state.txtValue} />
            <input type="text" onChange={this.updateMe} />
  
            </div>
        )
    }
    componentDidMount() {
                console.log('Did Mount is called!');

    }

}

class Welcome extends Component {
    constructor() {
        super()
        console.log('Constructor is called!');
        this.increment = this.increment.bind(this);
        this.state = { counter: 0,posts:[] };
    }
    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }
    //Overriding life cycle methods
    //Mount Phase
    componentWillMount() {
        this.state = { counter: 1,posts:[] };
        console.log('componentWillMount');
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1>Life Cycle Demo</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.state.counter}</h1>  
                <button onClick={this.increment}>Start</button>
                <PostComponent posts={this.state.posts}/>
            </div>    
        );
    }
    componentDidMount() {
        console.log('componentDidMount');
      //Ajax
        
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                //console.log(res.json());
                return res.json();
            })
            .then((res) => {
                console.log(res);
                this.setState({ posts: res });
            });
        console.log(this.state.posts);

    }
    //Component Update phase
    componentWillReceiveProps(nextProps) {
         console.log('componentWillReceiveProps',nextProps);
    }
    shouldComponentUpdate() {
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }



}
const PostComponent = (props) => {
    const posts = props.posts;
    const postsListIem = posts.map((post)=><li key={post.id.toString()}>{post.title}</li>);
    return (<ul>{postsListIem}</ul>)
};

render(<ComponentLife />, root);