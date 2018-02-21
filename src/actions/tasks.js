     var mockApiData = [
      {
        id: 1,
        name:'Test'
      },

          {
        id: 2,
        name:'Testing'
      },

          {
        id: 3,
        name:'Tested'
      },

          {
        id: 4,
        name:'Test2'
      },

          {
        id: 5,
        name:'Test Engine'
      },

     ];


     export const getTasks = () => dispatch => {
          setTimeout(() => {
            console.log('i got tasks');
            dispatch({type: 'FETCH_TASKS_SUCCESS', payload: mockApiData })
          }, 500)
        }

