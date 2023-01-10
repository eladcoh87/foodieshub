

export const getRecipesApi = async (searchTerm) => {

      console.log(searchTerm);
      
        const queryParams = new URLSearchParams({q:searchTerm,type:'public'})



        try {


        const response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=af3e752e&app_key=63f200a55485807bd91f316cbccc48dd&${queryParams}`)
        
                console.log(response);


        if (!response.ok) {
            throw new Error('somtinhg went wrong!!')
          }



        const {hits} = await response.json()
    
            
        return hits
        }catch(error) {
            console.log(error.message)


        }
      }



