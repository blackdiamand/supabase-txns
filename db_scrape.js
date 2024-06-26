var fs = require('fs');

async function getUsers() {
  const select = '*';
  const order = 'created_time.asc';
  const limit = 50000;
  let lastCreatedTime = '1970-01-01T00:00:00Z+00:00';
  const txns = [];
  do {
    const result = await fetch(
      `https://pxidrgkatumlvfqaxcll.supabase.co/rest/v1/contract_bets?${new URLSearchParams(
        {
          select,
          order,
          limit,
          created_time: `gt.${lastCreatedTime}`,
          user_id: `eq.4juQfJkFnwX9nws3dFOpz4gc1mi2`,
        }
      )}`,
      {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4aWRyZ2thdHVtbHZmcWF4Y2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5OTUzOTgsImV4cCI6MTk4NDU3MTM5OH0.d_yYtASLzAoIIGdXUBIgRAGLBnNow7JG2SoaNMQ8ySg',
        },
        body: null,
        method: 'GET',
      }
    );
    //console.log()
    const newTxns = await result.json();
    //console.log(newTxns)
    if (newTxns.length === 0) {
      break;
    }
    try {
      lastCreatedTime = newTxns[newTxns.length - 1].created_time;
      txns.push(...newTxns);
      console.log(lastCreatedTime);
    }
    catch (e){
      console.log(e);
    }
  } while (true);
  return txns;
}

getUsers().then(data => fs.writeFileSync('dump.json', JSON.stringify(data)));