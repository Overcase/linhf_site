const myReact = (function() {
  let _val: any

  return {
    render(Component: any) {
      // console.log(Component(), 'Component')
      // const Comp = Component()
      return Component
    },
    useState(initValue: any) {
      _val = _val || initValue
      function setState(newVal: any) {
        _val = newVal
      }

      return [_val, setState]
    }
  }
})()

export default myReact
