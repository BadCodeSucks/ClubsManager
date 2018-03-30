import {
  SET_SHOW_NAV


} from './mutation-types'

const mutations = {
  [SET_SHOW_NAV](state, data) {
    state.showNav = data
  },
}

export default mutations
