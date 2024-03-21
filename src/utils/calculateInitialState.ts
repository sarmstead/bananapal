const calculateInitialState = (name: string) => {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage.getItem(name) || '{}')
  }

  return []
}

export default calculateInitialState
