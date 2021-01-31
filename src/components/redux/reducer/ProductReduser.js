
const initialState = {
    data:[
        {
          "status": false,
          "id": 1,
          "title": "accusamus",
          "price" : 1200,
          "count" : 1,
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "status": false,
          "id": 2,
          "title": "reprehenderit",
          "price" : 700,
          "count" : 1,
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "status": false,
          "id": 3,
          "title": "officia porro",
          "price" : 1400,
          "count" : 1,
          "url": "https://via.placeholder.com/600/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
          "status": false,
          "id": 4,
          "title": "culpa odio esse",
          "price" : 900,
          "count" : 1,
          "url": "https://via.placeholder.com/600/d32776",
          "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
          "status": false,
          "id": 5,
          "title": "natus nisi",
          "price" : 1200,
          "count" : 1,
          "url": "https://via.placeholder.com/600/f66b97",
          "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
          "status": false,
          "id": 6,
          "title": "accusamus ea",
          "price" : 1000,
          "count" : 1,
          "url": "https://via.placeholder.com/600/56a8c2",
          "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
          "status": false,
          "id": 7,
          "title": "officia delectus",
          "price" : 800,
          "count" : 1,
          "url": "https://via.placeholder.com/600/b0f7cc",
          "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
          "status": false,
          "id": 8,
          "title": "aut porro officiis",
          "price" : 1400,
          "count" : 1,
          "url": "https://via.placeholder.com/600/54176f",
          "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        },
        {
          "status": false,
          "id": 9,
          "title": "qui eius qui",
          "price" : 1200,
          "count" : 1,
          "url": "https://via.placeholder.com/600/51aa97",
          "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
        }
    ]
}

const ArticleList = (state = initialState,action) => {
    switch(action.type){
        case 'LIST_PRODUCT':
            return{
                ...state                
            }
        case 'CHANGE_STATUS':
          
          state.data.map(itemToCart =>{
            if(itemToCart.id == action.cartProductId){
              itemToCart.status = !itemToCart.status
            }
            
            // return{
            //   ...state,
            //   itemToCart
            // }
          })
          case 'ADD_ITEM_COUNT':
            // console.log(state)
            return{
              ...state,
              data:action.payload
            }
           

        default:
            return state
    }
};

export default ArticleList;