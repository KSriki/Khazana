const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    }
    if (!values.category) {
      errors.category = 'Required'
    }

    if (!values.time) {
        errors.time = 'Required'
      }
      if (!values.description) {
        errors.description = 'Required'
      }


    // if (!values.email) {
    //   errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address'
    // }
    // if (!values.sex) {
    //   errors.sex = 'Required'
    // }
    // if (!values.favoriteColor) {
    //   errors.favoriteColor = 'Required'
    // }
    return errors
  }
  
  export default validate


//   "title": "Peanut Butter Jelly Sandwich",
// "category": "cold snack",
// "time": 5,
// "description": "A simple PB&J sandwich for those wanting a quick meal. Requires a toaster."