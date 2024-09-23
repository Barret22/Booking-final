export const FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';

export const fetchHotelsRequest = (formData, navigate) => {
  return {
    type: 'FETCH_HOTELS_REQUEST',
    payload: {
      formData,
      navigate,
    },
  };
};


export const fetchHotelsSuccess = (hotels) => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelsFailure = (error) => ({
  type: FETCH_HOTELS_FAILURE,
  payload: error,
});
