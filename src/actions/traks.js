     var mockApiData = [
      {
        id: 1,
        name:'da'
      },

          {
        id: 2,
        name:'dada'
      },

          {
        id: 3,
        name:'dadada'
      },

          {
        id: 4,
        name:'waw'
      },

          {
        id: 5,
        name:'wawawa'
      },

     ];


     export const getTracks = () => dispatch => {
          setTimeout(() => {
            console.log('i got traks');
            dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
          }, 2000)
        }

