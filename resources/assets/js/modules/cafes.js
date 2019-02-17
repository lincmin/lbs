import CafeAPI from '../api/cafe.js'

export const cafes = {
    state:{
        cafes:[],//咖啡店数组
        cafesLoadStatus: 0,//加载状态
        cafe:{},//单个咖啡店的对象
        cafeLoadStatus: 0//加载状态
    },
    action:{
        loadCafes({commit}){
            commit('setCafesLoadStatus',1);

            CafeAPI.getCafes()
                .then(function(response){
                    commit('setCafes',response.data);
                    commit('setCafesLoadStatus',2);
                })
                .catch( function(){
                    commit( 'setCafes', [] );
                    commit( 'setCafesLoadStatus', 3 );
                });
        },
        loadCafe({commit},data){
            commit( 'setCafeLoadStatus', 1 );

            CafeAPI.getCafe( data.id )
                .then( function( response ){
                    commit( 'setCafe', response.data );
                    commit( 'setCafeLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'setCafe', {} );
                    commit( 'setCafeLoadStatus', 3 );
                });

        }
    },
    mutations: {
        setCafesLoadStatus( state, status ){
            state.cafesLoadStatus = status;
          },
      
          setCafes( state, cafes ){
            state.cafes = cafes;
          },
      
          setCafeLoadStatus( state, status ){
            state.cafeLoadStatus = status;
          },
      
          setCafe( state, cafe ){
            state.cafe = cafe;
          }
    },
    getters: {
        getCafesLoadStatus( state ){
          return state.cafesLoadStatus;
        },
    
        getCafes( state ){
          return state.cafes;
        },
    
        getCafeLoadStatus( state ){
          return state.cafeLoadStatus;
        },
    
        getCafe( state ){
          return state.cafe;
        }
    }
}