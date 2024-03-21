const calculateInitialState = (name: string, defaultState: any) => {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage.getItem(name) || '{}')
  }

  return defaultState
}

export default calculateInitialState
