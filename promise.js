function fetchDataFromBE(resolve, reject) 
{
     console.log('Starting to fetch data from BE');
      const data = { username: 'Faraz', email: 'abc@g.com' };
       setTimeout(function() { resolve(data); }, 5000);
     }
      function displayFetchedData(data) 
      { 
          console.log('Successfully Fetched', data);
         }
          function displayErrorMessage(error) { console.log(error); 
        } 
        function doOtherWork()
         {
              setInterval(() => console.log('Doing other work in background, fetching data'), 500);
             }
              const dataFetchPromise = new Promise (fetchDataFromBE); 
              dataFetchPromise.then(displayFetchedData).catch(displayErrorMessage)
               doOtherWork();