export const state = () => ({
  themeColor: null
})

export const mutations = {
  SET_VAR_1 (state, value) {
    console.log('SET_VAR_1', value)
    state.var1 = value
  },
  SET_VAR_2 (state, value) {
    console.log('SET_VAR_2', value)
    state.var2 = value
  }
}