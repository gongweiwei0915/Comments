/**
 * Created by Administrator on 2017/7/10.
 */
import React from "react";
import CommentAdd from  "../CommentAdd/CommentAdd"
import CommentList from  "../CommentList/CommentList"

class App extends React.Component{
    constructor (props) {
        super(props);
       this.state ={
            comments:[{
               username:'gww',
                content:'1'},
                {
                    username:'gww2',
                    content:'2'
            }]
        }
        this.addComment = this.addComment.bind(this);
    }
    addComment(comment){
    //    三步骤
         let {comments} = this.state;
        //改
            comments.unshift(comment);
        //更新
         this.setState(comments);
    }
    //删除
    removeComment=(index)=>{
        let {comments} = this.state;
        //改
        comments.splice(index,1);
        //更新
        this.setState(comments);
    }
    render(){
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={this.state.comments} removeComment={this.removeComment}/>
                </div>
            </div>
        )
    }
}
export default App;