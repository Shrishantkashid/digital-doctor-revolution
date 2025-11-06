// Test to verify language support is working correctly
import { Language } from '../types.js';
import { useTranslation } from '../services/translationService.js';

function testLanguageSupport() {
  console.log('Testing language support...');
  
  // Test all languages
  const languages: Language[] = ['en', 'hi', 'te', 'ta', 'kn', 'ml', 'mr', 'bn', 'gu', 'pa'];
  
  for (const lang of languages) {
    try {
      const t = useTranslation(lang);
      console.log(`\nTesting language: ${lang}`);
      console.log(`  Home: ${t.home}`);
      console.log(`  Welcome Title: ${t.welcomeTitle}`);
      console.log(`  Prescription Analysis: ${t.prescriptionAnalysis}`);
    } catch (error) {
      console.error(`Error testing language ${lang}:`, error);
    }
  }
  
  console.log('\n✅ Language support test completed!');
}

// Run the test
testLanguageSupport();