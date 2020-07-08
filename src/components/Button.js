import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {product} from './../Redux/action/action'
const mapStateToProps = (store)=>{
    console.log(store);
    return{
        
        page:store.page,
        total:store.totalPage
    }
}
const mapStateToDispatch = (dispatch)=>{
    return bindActionCreators({product},dispatch)
}

export default connect(mapStateToProps,mapStateToDispatch)( class Button extends Component {

    hanleLoadMore = ()=>{
        this.props.product(2)
    }
    render() {
        return (
            <Fragment>
               { this.props.page<=this.props.total && <div className="more">
                    <button onClick={()=>{this.hanleLoadMore()}}>Load More</button>
                </div>}
            </Fragment>
        )
    }
})
