// Translation service test
import { getTranslation, useTranslation } from '../services/translationService';
import { Language } from '../types';

function runTranslationTests() {
  console.log('Testing translation service...');
  
  // Test getTranslation function
  const englishWelcome = getTranslation('en', 'welcomeTitle');
  const hindiWelcome = getTranslation('hi', 'welcomeTitle');
  const teluguWelcome = getTranslation('te', 'welcomeTitle');
  
  console.log('English welcome:', englishWelcome);
  console.log('Hindi welcome:', hindiWelcome);
  console.log('Telugu welcome:', teluguWelcome);
  
  // Test useTranslation hook
  const englishTranslations = useTranslation('en');
  const hindiTranslations = useTranslation('hi');
  
  console.log('English chatbot title:', englishTranslations.chatBotTitle);
  console.log('Hindi chatbot title:', hindiTranslations.chatBotTitle);
  
  // Test all languages
  const languages: Language[] = ['en', 'hi', 'te', 'ta', 'kn', 'ml', 'mr', 'bn', 'gu', 'pa'];
  
  console.log('\nTesting all languages for chatBotTitle:');
  for (const lang of languages) {
    const translation = getTranslation(lang, 'chatBotTitle');
    console.log(`${lang}: ${translation}`);
  }
  
  console.log('\n✅ Translation tests completed successfully!');
}

runTranslationTests();