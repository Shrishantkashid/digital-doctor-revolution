// Test script to verify drug database API key

async function testDrugAPI() {
  console.log('Testing drug database API key...');
  
  // Test if the API key is loaded
  console.log('API Key loaded:', !!import.meta.env.VITE_DRUG_DATABASE_API_KEY);
  if (import.meta.env.VITE_DRUG_DATABASE_API_KEY) {
    console.log('API Key exists (first 5 characters):', import.meta.env.VITE_DRUG_DATABASE_API_KEY.substring(0, 5) + '...');
  }
  
  // Test with RxNorm API (free, no auth required)
  try {
    console.log('\n--- Testing with RxNorm API (Free) ---');
    const drugName = 'Aspirin';
    const response = await fetch(`https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${encodeURIComponent(drugName)}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('RxNorm API Response:', JSON.stringify(data, null, 2));
      console.log('RxNorm API Connection: SUCCESS');
    } else {
      console.log('RxNorm API Connection: FAILED - Status', response.status);
    }
  } catch (error) {
    console.error('Error in RxNorm API test:', error);
  }
  
  // Test with a placeholder for an authenticated API
  // This is where you would test with your actual drug database API
  console.log('\n--- Testing with Authenticated API ---');
  console.log('Your API Key:', import.meta.env.VITE_DRUG_DATABASE_API_KEY);
  console.log('To test with a real authenticated API, you would implement API calls here using your key.');
  
  // Example of how you might use your API key:
  /*
  try {
    const response = await fetch('https://your-drug-database-api.com/api/drugs', {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_DRUG_DATABASE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('Authenticated API Response:', data);
      console.log('Authenticated API Connection: SUCCESS');
    } else {
      console.log('Authenticated API Connection: FAILED - Status', response.status);
    }
  } catch (error) {
    console.error('Error in authenticated API test:', error);
  }
  */
}

// Run the test
testDrugAPI();