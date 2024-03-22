import axios from 'axios'

axios
  .get('/easter-eggs/hey.txt')
  .then((payload) => payload.data)
  .then((message) => {
    console.log(message)
  })
