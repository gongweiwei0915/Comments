/**
 * Created by Administrator on 2017/7/10.
 */
import React,{Component,PropTypes} from "react";

class CommentAdd extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                username:''
            }
            this.setUsername = this.setUsername.bind(this);
        }
    static propTypes = {
        addComment:PropTypes.func
    }
    add=()=>{
    //    收集数据
        let username = this.state.username.trim();
           let content = this.refs.content.value.trim();
        if (!username||!content){
            alert("请正常输入")
            return
        }
    //   封装成comment对象
        let comment = {username,content};
        this.props.addComment(comment);
        this.state.username=''
        this.refs.content.value=''
    }

    setUsername(event){
        var  username = event.target.value;
        this.setState({username})
    }
    render(){
        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                        value={this.state.username} onChange={this.setUsername}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentAdd;