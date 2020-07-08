import axios from 'axios'
export const searchValue = (data)=>{
    return {
        type:"SEARCH_VALUE",
        payload:data
    }
}
export const product = (data)=>{
   let request = axios.get(`https://reqres.in/api/users?page=${data}`)
        //console.log(list);
        
         return (dispatch)=>{
            request.then((response)=>{
                console.log(response);
                return dispatch({
                    type : "FETCH_PRODUCT_LIST",
                    payload:response.data.data,
                    totalPage:response.data.total_pages
                })
            })
            
        }

    
    
    
}