export const returnErrorResponse = (errorMessage = '') => {
  return {
    success: false,
    message: errorMessage,
    data: null
  }
}

export const returnSuccessResponse = (data) => {
  return {
    success: true,
    message: '',
    data: data
  }
}
