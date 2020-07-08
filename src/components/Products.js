import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import Card from './Card';
import {product} from './../Redux/action/action';
import {bindActionCreators} from 'redux';

const mapStateToProps = (store)=>{
    console.log(store);
    return{
        dashBoard:store.dashBoard,
        search:store.searchValue,
        filter:store.filterSearch,
        page:store.page,
        total:store.totalPage
    }
}
const mapStateToDispatch = (dispatch)=>{
    return bindActionCreators({product},dispatch)
}

export default connect(mapStateToProps,mapStateToDispatch)(class Products extends Component {

    componentDidMount = ()=>{
        console.log(this.props);
        this.props.product(1)
    }
    render() {
        return (
            <Fragment>
                
                {this.props.dashBoard.length>0 && !this.props.search && this.props.dashBoard.map((item)=>{
                    return(
                        <Card picture={item.avatar} firstName={item.first_name} lastName={item.last_name} email={item.email}/>
                    )
                })}
                {this.props.filter.length>0 && this.props.search && this.props.filter.map((item)=>{
                    return(
                        <Card picture={item.avatar} firstName={item.first_name} lastName={item.last_name} email={item.email}/>
                    )
                })}
                {this.props.filter.length===0 && this.props.search && <h4>No Result Found</h4>}

                
                
            </Fragment>
        )
    }
})
