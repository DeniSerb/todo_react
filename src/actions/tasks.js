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


     export const getTasks = () => dispatch => {
          setTimeout(() => {
            console.log('i got tasks');
            dispatch({type: 'FETCH_TASKS_SUCCESS', payload: mockApiData })
          }, 500)
        }

