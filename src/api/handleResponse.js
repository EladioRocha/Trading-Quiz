export async function handleResponse(promise) {
  const response = {
    data: null
  }

  try {
    response.data = (await promise).data
  } catch(error) {
    response.data = error.response.data
  }

  return response.data
}