import CafeAPI from '../api/cafe.js'

export const cafes = {
  state: {
    cafes: [],//咖啡店数组
    cafesLoadStatus: 0,//加载状态
    cafe: {},//单个咖啡店的对象
    cafeLoadStatus: 0,//加载状态
    cafeAddStatus: 0,//新增加载状态
    cafeLikeActionStatus: 0,//监听喜欢动作的加载状态
    cafeUnlikeActionStatus: 0,//监听取消喜欢动作的加载状态
    cafeLiked: false//用户是否已经喜欢过这个咖啡店
  },
  actions: {
    loadCafes({ commit }) {
      commit('setCafesLoadStatus', 1);

      CafeAPI.getCafes()
        .then(function (response) {
          commit('setCafes', response.data);
          commit('setCafesLoadStatus', 2);
        })
        .catch(function () {
          commit('setCafes', []);
          commit('setCafesLoadStatus', 3);
        });
    },
    loadCafe({ commit }, data) {
      commit('setCafeLikedStatus', false);
      commit('setCafeLoadStatus', 1);

      CafeAPI.getCafe(data.id)
        .then(function (response) {
          commit('setCafe', response.data);
          if (response.data.user_like.length > 0) {
            commit('setCafeLikedStatus', true);
          }
          commit('setCafeLoadStatus', 2);
        })
        .catch(function () {
          commit('setCafe', {});
          commit('setCafeLoadStatus', 3);
        });
    },
    addCafe({ commit, state, dispatch }, data) {
      // 状态1表示开始添加
      commit('setCafeAddStatus', 1);

      CafeAPI.postAddNewCafe(data.name, data.locations, data.website, data.description, data.roaster)
        .then(function (response) {
          // 状态2表示添加成功
          commit('setCafeAddStatus', 2);
          dispatch('loadCafes');
        })
        .catch(function () {
          // 状态3表示添加失败
          commit('setCafeAddStatus', 3);
        });
    },
    likeCafe({ commit, state }, data) {
      commit('setCafeLikeActionStatus', 1);
      CafeAPI.postLikeCafe(data.id)
        .then(function (response) {
          commit('setCafeLikedStatus', true);
          commit('setCafeLikeActionStatus', 2);
        })
        .catch(function () {
          commit('setCafeLikeActionStatus', 3);
        });
    },
    unlikeCafe({ commit, state }, data) {
      commit('setCafeUnlikeActionStatus', 1);
      CafeAPI.deleteLikeCafe(data.id)
        .then(function (response) {
          commit('setCafeLikedStatus', false);
          commit('setCafeUnlikeActionStatus', 2);
        })
        .catch(function () {
          commit('setCafeUnlikeActionStatus', 3);
        });
    }
  },
  mutations: {
    setCafesLoadStatus(state, status) {
      state.cafesLoadStatus = status;
    },

    setCafes(state, cafes) {
      state.cafes = cafes;
    },

    setCafeLoadStatus(state, status) {
      state.cafeLoadStatus = status;
    },

    setCafe(state, cafe) {
      state.cafe = cafe;
    },

    setCafeAddStatus(state, status) {
      state.cafeAddStatus = status;
    },
    setCafeLikedStatus(state, status) {
      state.cafeLiked = status;
    },

    setCafeLikeActionStatus(state, status) {
      state.cafeLikeActionStatus = status;
    },

    setCafeUnlikeActionStatus(state, status) {
      state.cafeUnlikeActionStatus = status;
    }
  },
  getters: {
    getCafesLoadStatus(state) {
      return state.cafesLoadStatus;
    },

    getCafes(state) {
      return state.cafes;
    },

    getCafeLoadStatus(state) {
      return state.cafeLoadStatus;
    },

    getCafe(state) {
      return state.cafe;
    },

    getCafeAddStatus(state) {
      return state.cafeAddStatus;
    },
    getCafeLikedStatus(state) {
      return state.cafeLiked;
    },

    getCafeLikeActionStatus(state) {
      return state.cafeLikeActionStatus;
    },

    getCafeUnlikeActionStatus(state) {
      return state.cafeUnlikeActionStatus;
    }
  }
}