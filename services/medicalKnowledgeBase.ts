// Medical Knowledge Base for Chatbot
// Contains medical-related questions and answers for the chatbot to reference

export interface MedicalQA {
  question: string;
  answer: string;
  category: 'mentalHealth' | 'prescription' | 'general';
}

export const medicalKnowledgeBase: MedicalQA[] = [
  // Mental Health Related Questions
  {
    question: "What are signs of depression?",
    answer: "Common signs of depression include persistent sadness, loss of interest in activities, changes in appetite or weight, sleep disturbances, fatigue, feelings of worthlessness or guilt, difficulty concentrating, and thoughts of death or suicide. If you're experiencing several of these symptoms for more than two weeks, it's important to seek professional help.",
    category: "mentalHealth"
  },
  {
    question: "How can I help someone who is suicidal?",
    answer: "If someone is expressing suicidal thoughts, take it seriously. Listen without judgment, ask directly if they're thinking about suicide, and encourage them to seek professional help immediately. If there's an immediate risk, don't leave them alone and contact emergency services or a crisis helpline. You can also help by removing access to means of harm and staying with them until help arrives.",
    category: "mentalHealth"
  },
  {
    question: "What are symptoms of anxiety?",
    answer: "Anxiety symptoms include excessive worry, restlessness, fatigue, difficulty concentrating, irritability, muscle tension, and sleep problems. Physical symptoms may include rapid heartbeat, sweating, trembling, shortness of breath, and gastrointestinal issues. If anxiety is interfering with daily activities, professional treatment may be helpful.",
    category: "mentalHealth"
  },
  {
    question: "How is depression treated?",
    answer: "Depression is typically treated with a combination of psychotherapy (talk therapy) and antidepressant medications. Cognitive Behavioral Therapy (CBT) and interpersonal therapy are effective forms of psychotherapy. Antidepressants may take several weeks to show effects. Treatment plans should always be developed with a qualified healthcare provider.",
    category: "mentalHealth"
  },
  {
    question: "What should I do during a panic attack?",
    answer: "During a panic attack, try to focus on your breathing. Breathe slowly and deeply, counting to four as you inhale, hold for four, then exhale for four. Remind yourself that the attack will pass and you're not in physical danger. Ground yourself by focusing on your surroundings - name five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste.",
    category: "mentalHealth"
  },
  {
    question: "How can I support a friend with mental health issues?",
    answer: "Support a friend by listening without judgment, offering encouragement to seek professional help, and checking in regularly. Avoid giving unsolicited advice or minimizing their feelings. Be patient and understanding, and educate yourself about their condition. Encourage healthy habits like regular sleep, exercise, and social connection.",
    category: "mentalHealth"
  },
  {
    question: "What is the difference between sadness and depression?",
    answer: "Sadness is a normal human emotion that everyone experiences in response to life's challenges. It's usually temporary and situational. Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and emptiness that last for at least two weeks and significantly impact daily functioning. Depression often includes physical symptoms and can occur without an obvious trigger.",
    category: "mentalHealth"
  },
  {
    question: "When should I seek help for mental health concerns?",
    answer: "Seek help if you're experiencing persistent feelings of sadness, anxiety, or hopelessness that interfere with daily activities, work, or relationships. Other signs include changes in sleep or appetite, withdrawal from social activities, substance abuse, or thoughts of self-harm. Early intervention often leads to better outcomes, so don't hesitate to reach out to a healthcare provider.",
    category: "mentalHealth"
  },
  {
    question: "What are coping strategies for anxiety?",
    answer: "Effective coping strategies for anxiety include deep breathing exercises, progressive muscle relaxation, mindfulness meditation, regular physical exercise, maintaining a consistent sleep schedule, limiting caffeine, and challenging negative thought patterns. Cognitive Behavioral Therapy techniques can be particularly helpful for identifying and changing anxiety-provoking thoughts.",
    category: "mentalHealth"
  },
  {
    question: "What is seasonal affective disorder?",
    answer: "Seasonal Affective Disorder (SAD) is a type of depression that occurs at the same time each year, typically during fall and winter months when there's less natural sunlight. Symptoms include low energy, oversleeping, carbohydrate cravings, and social withdrawal. Treatment may include light therapy, psychotherapy, and in some cases, medication.",
    category: "mentalHealth"
  },

  // Prescription Related Questions
  {
    question: "What should I do if I miss a dose of my medication?",
    answer: "If you miss a dose, take it as soon as you remember. However, if it's almost time for your next dose, skip the missed dose and continue with your regular schedule. Never double up on doses unless specifically instructed by your healthcare provider. For certain medications, it may be better to skip the missed dose entirely. When in doubt, consult with your pharmacist or doctor.",
    category: "prescription"
  },
  {
    question: "Can I stop taking my medication if I feel better?",
    answer: "Never stop taking prescribed medication without consulting your healthcare provider first, even if you feel better. Stopping suddenly can lead to withdrawal symptoms, a return of the original condition, or other complications. Your doctor can guide you on safely tapering off medication if appropriate.",
    category: "prescription"
  },
  {
    question: "What are drug interactions?",
    answer: "Drug interactions occur when two or more medications react with each other, potentially altering their effectiveness or causing harmful side effects. This can happen with prescription drugs, over-the-counter medications, supplements, or herbal remedies. Always inform your healthcare providers about all medications you're taking to avoid dangerous interactions.",
    category: "prescription"
  },
  {
    question: "How should I store my medications?",
    answer: "Store medications in a cool, dry place away from direct sunlight and moisture, unless otherwise specified. Keep them in their original containers with labels intact. Don't store in bathroom medicine cabinets due to humidity. Keep all medications out of reach of children and pets. Check expiration dates regularly and dispose of expired medications properly.",
    category: "prescription"
  },
  {
    question: "What should I tell my doctor before starting a new medication?",
    answer: "Inform your doctor about all current medications (prescription and over-the-counter), supplements, herbal remedies, vitamins, and any allergies you have. Also mention any existing medical conditions, if you're pregnant or breastfeeding, and if you consume alcohol regularly. This information helps your doctor prescribe the safest and most effective treatment.",
    category: "prescription"
  },

  // General Medical Questions
  {
    question: "How often should I see my doctor for a checkup?",
    answer: "Healthy adults should generally have a routine checkup every 1-3 years in their 20s-30s, annually starting in their 40s, and more frequently if they have chronic conditions. However, this varies based on individual health status, family history, and risk factors. Always follow your doctor's specific recommendations for your situation.",
    category: "general"
  },
  {
    question: "What are the warning signs of a heart attack?",
    answer: "Common heart attack warning signs include chest pain or discomfort (pressure, squeezing, fullness, or pain), pain or discomfort in one or both arms, the back, neck, jaw, or stomach, shortness of breath, cold sweat, nausea, or lightheadedness. Women may experience additional symptoms like unusual fatigue, sleep disturbances, and anxiety. Call emergency services immediately if you suspect a heart attack.",
    category: "general"
  },
  {
    question: "How can I maintain good mental health?",
    answer: "Maintain good mental health by staying connected with others, being physically active, learning new skills, giving to others, and practicing mindfulness. Get adequate sleep, eat a balanced diet, limit alcohol, and avoid drugs. Manage stress through relaxation techniques and seek professional help when needed. Establishing routines and setting realistic goals can also support mental wellbeing.",
    category: "general"
  },
  {
    question: "What should I do in a medical emergency?",
    answer: "In a medical emergency, call emergency services (911 in the US) immediately. If someone is unconscious and not breathing, begin CPR if you're trained. For severe bleeding, apply direct pressure. Don't move someone with a suspected spinal injury. Stay calm, provide basic first aid as appropriate, and wait for professional help to arrive.",
    category: "general"
  }
];

// Function to search the knowledge base
export const searchMedicalKnowledge = (query: string): MedicalQA[] => {
  const lowerQuery = query.toLowerCase();
  return medicalKnowledgeBase.filter(item => 
    item.question.toLowerCase().includes(lowerQuery) || 
    item.answer.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery)
  );
};

// Function to get questions by category
export const getQuestionsByCategory = (category: 'mentalHealth' | 'prescription' | 'general'): MedicalQA[] => {
  return medicalKnowledgeBase.filter(item => item.category === category);
};