export const state = () => ({
  side_bar: {
    toggle: true,
    select: 'index'
  },
  dark_mode: false
})

export const mutations = {
  toggleSideBar (state) {
    state.side_bar.toggle = !state.side_bar.toggle
  }
}

export const getters = {
  sideBar (state) {
    return state.side_bar
  }
}
