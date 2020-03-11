const myReact =(function () {
  let _val;

  return {
    render(Component) {

      // console.log(Component(), 'Component')
      // const Comp = Component()
      return Component
    }
    ,
    useState(initValue) {
      _val = _val || initValue
      function setState(newVal) {
        _val = newVal
      }
  
      return [_val, setState]
    }
  }
 
})();

export default myReact;