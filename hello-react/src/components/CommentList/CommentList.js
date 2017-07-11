/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * Created by Administrator on 2017/7/10.
 */
import React,{Component,PropTypes} from "react";
import "./commentlist.css"
import CommentItem from  "../CommentItem/CommentItem"

export default class CommentList extends React.Component{

    static propTypes = {
            comments:PropTypes.array.isRequired,
        removeComment:PropTypes.func.isRequired,


        }
    render(){
        let {comments,removeComment}=this.props;
        const display = comments.length ===0 ? 'block':'none'
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index)=>{
                            return <CommentItem comment={comment} key={index}
                                                removeComment={removeComment}
                                                 index={index}/>
                          }
                        )
                    }

                </ul>
            </div>
        )
    }

}

