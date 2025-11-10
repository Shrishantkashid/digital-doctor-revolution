// Test file for chatbot medical knowledge integration
import { searchMedicalKnowledge, getQuestionsByCategory } from '../services/medicalKnowledgeBase';

// Test searching for depression-related questions
console.log('Searching for "depression" questions:');
const depressionResults = searchMedicalKnowledge('depression');
console.log(depressionResults);

// Test searching for anxiety-related questions
console.log('\nSearching for "anxiety" questions:');
const anxietyResults = searchMedicalKnowledge('anxiety');
console.log(anxietyResults);

// Test searching for suicide-related questions
console.log('\nSearching for "suicide" questions:');
const suicideResults = searchMedicalKnowledge('suicide');
console.log(suicideResults);

// Test getting all mental health questions
console.log('\nAll mental health questions:');
const mentalHealthQuestions = getQuestionsByCategory('mentalHealth');
console.log(mentalHealthQuestions);

// Test getting all prescription questions
console.log('\nAll prescription questions:');
const prescriptionQuestions = getQuestionsByCategory('prescription');
console.log(prescriptionQuestions);

console.log('\nAll tests completed successfully!');