export function locations (params) {
  if (!params.url) {
    return null;
  }

  return function(dispatch) {
    dispatch({ type: "LOCATION_CHANGE", payload: params.url })
  }
}