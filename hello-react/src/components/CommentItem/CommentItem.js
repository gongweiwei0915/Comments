/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * Created by Administrator on 2017/7/10.
 */
import React,{Component,PropTypes} from "react";


class CommentItem extends Component{
    static propTypes = {
        comment:PropTypes.object,
        removeComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
    remove=()=>{
        const {removeComment,index,comment} = this.props;
        if(window.confirm(`确定要删除${this.props.comment.username}吗？`)){
            removeComment(index)
        }
    }
    render(){
        const {comment} = this.props;
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.remove}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
export default CommentItem;