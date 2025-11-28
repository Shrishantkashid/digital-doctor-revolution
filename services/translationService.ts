// Translation service for UI components
import { Language } from '../types';

// Translation keys interface
export interface TranslationKeys {
  // Common
  home: string;
  logout: string;
  
  // Landing Page
  welcomeTitle: string;
  welcomeDescription: string;
  prescriptionValidator: string;
  mentalHealthMonitor: string;
  
  // Prescription Analyzer
  prescriptionAnalysis: string;
  prescriptionDescription: string;
  prescriptionNote: string;
  uploadPrescription: string;
  dragDrop: string;
  clickToUpload: string;
  imageTypes: string;
  allergies: string;
  allergiesPlaceholder: string;
  age: string;
  agePlaceholder: string;
  conditions: string;
  conditionsPlaceholder: string;
  analyzePrescription: string;
  analyzing: string;
  
  // Mental Health Monitor
  mentalHealthTitle: string;
  mentalHealthDescription: string;
  startRecording: string;
  stopRecording: string;
  analyzingMood: string;
  moodAnalysis: string;
  
  // Analysis Results
  analysisReport: string;
  analysisConfidence: string;
  allergyAlerts: string;
  safetyAlerts: string;
  drugInteractions: string;
  identifiedMedications: string;
  costOptimization: string;
  whatItTreats: string;
  take: string;
  matchFound: string;
  noMatch: string;
  yourCondition: string;
  recommendation: string;
  
  // Auth Page
  login: string;
  signup: string;
  username: string;
  password: string;
  email: string;
  loginButton: string;
  signupButton: string;
  needAccount: string;
  haveAccount: string;
  
  // Patient Info Form
  additionalInfo: string;
  additionalInfoNote: string;
  
  // Confidence Display
  confidenceTip: string;
  
  // Chat Bot
  chatBotTitle: string;
  chatBotWelcome: string;
  chatBotPlaceholder: string;
  chatBotSend: string;
  chatBotDisclaimer: string;
  chatBotError: string;
  chatBotPrescriptionInfo: string;
  chatBotSideEffects: string;
  chatBotInteractions: string;
  chatBotDosage: string;
  chatBotHelp: string;
  chatBotDefault: string;
}

// Translation dictionary
const translations: Record<Language, TranslationKeys> = {
  en: {
    // Common
    home: 'Home',
    logout: 'Logout',
    
    // Landing Page
    welcomeTitle: 'Welcome to Digital Doctor AI',
    welcomeDescription: 'Your AI-powered health assistant for prescription validation and mental health monitoring.',
    prescriptionValidator: 'Prescription Validator',
    mentalHealthMonitor: 'Mental Health Monitor',
    
    // Prescription Analyzer
    prescriptionAnalysis: 'Prescription Analysis',
    prescriptionDescription: 'Upload an image of your prescription and provide any relevant health information. Our AI will analyze it for potential issues and insights.',
    prescriptionNote: 'Note: Our AI is designed to read various handwriting styles, including cursive and潦草 (sloppy) handwriting. For best results, ensure the prescription image is clear and well-lit.',
    uploadPrescription: 'Upload Prescription',
    dragDrop: 'Drag and drop',
    clickToUpload: 'Click to upload',
    imageTypes: 'PNG, JPG, or WEBP',
    allergies: 'Allergies',
    allergiesPlaceholder: 'e.g., Penicillin, Aspirin',
    age: 'Age',
    agePlaceholder: 'e.g., 35',
    conditions: 'Pre-existing Conditions',
    conditionsPlaceholder: 'e.g., Diabetes, Hypertension',
    analyzePrescription: 'Analyze Prescription',
    analyzing: 'Analyzing...',
    
    // Mental Health Monitor
    mentalHealthTitle: 'Mental Health Monitor',
    mentalHealthDescription: 'Record a short audio message about how you\'re feeling. Our AI will analyze your mood and provide personalized wellness recommendations.',
    startRecording: 'Start Recording',
    stopRecording: 'Stop Recording',
    analyzingMood: 'Analyzing your mood...',
    moodAnalysis: 'Mood Analysis',
    
    // Analysis Results
    analysisReport: 'Analysis Report',
    analysisConfidence: 'Analysis Confidence',
    allergyAlerts: 'Allergy Alerts',
    safetyAlerts: 'Enhanced Safety Alerts',
    drugInteractions: 'Drug Interactions',
    identifiedMedications: 'Identified Medications',
    costOptimization: 'Cost Optimization',
    whatItTreats: 'What it treats:',
    take: 'Take:',
    matchFound: '✅ Match Found',
    noMatch: '⚠️ No Match',
    yourCondition: 'Your condition:',
    recommendation: 'Recommendation:',
    
    // Auth Page
    login: 'Login',
    signup: 'Sign Up',
    username: 'Username',
    password: 'Password',
    email: 'Email (optional)',
    loginButton: 'Login',
    signupButton: 'Sign Up',
    needAccount: 'Need an account?',
    haveAccount: 'Already have an account?',
    
    // Patient Info Form
    additionalInfo: 'Additional Information (Optional)',
    additionalInfoNote: 'Note: Please list all your current health conditions. This will help us match your medications to your specific needs and provide better timing recommendations.',
    
    // Confidence Display
    confidenceTip: 'Tip: If the confidence is low due to handwriting clarity, try retaking the photo with better lighting and focus.',
    
    // Chat Bot
    chatBotTitle: 'Digital Doctor Assistant',
    chatBotWelcome: 'Hello! I\'m your Digital Doctor assistant. How can I help you with your prescriptions or medications today?',
    chatBotPlaceholder: 'Type your question about prescriptions or medications...',
    chatBotSend: 'Send',
    chatBotDisclaimer: 'For detailed prescription analysis, please use the Prescription Analyzer tool.',
    chatBotError: 'Sorry, I encountered an error processing your request. Please try again.',
    chatBotPrescriptionInfo: 'I can help you analyze prescriptions. Please upload an image of your prescription using the Prescription Analyzer tool, and I\'ll provide detailed information about your medications, including dosages, interactions, and safety alerts.',
    chatBotSideEffects: 'If you\'re concerned about side effects of your medications, please upload your prescription for analysis. I can identify potential side effects based on your specific medications and dosages.',
    chatBotInteractions: 'Drug interactions can be serious. To check for potential interactions between your medications, please upload your prescription for analysis.',
    chatBotDosage: 'Proper dosage is important for medication effectiveness and safety. Please upload your prescription so I can analyze the dosages and provide recommendations based on your health profile.',
    chatBotHelp: 'I\'m here to help you understand your prescriptions and medications. You can ask me about: Prescription analysis, Medication side effects, Drug interactions, Dosage information. To get started, please upload your prescription using the Prescription Analyzer tool.',
    chatBotDefault: 'I\'m here to help you understand your prescriptions and medications. You can ask me about: Prescription analysis, Medication side effects, Drug interactions, Dosage information. To get started, please upload your prescription using the Prescription Analyzer tool.'
  },
  
  hi: {
    // Common
    home: 'होम',
    logout: 'लॉगआउट',
    
    // Landing Page
    welcomeTitle: 'डिजिटल डॉक्टर एआई में आपका स्वागत है',
    welcomeDescription: 'आपका एआई-संचालित स्वास्थ्य सहायक जो प्रिस्क्रिप्शन सत्यापन और मानसिक स्वास्थ्य निगरानी के लिए है।',
    prescriptionValidator: 'प्रिस्क्रिप्शन वैलिडेटर',
    mentalHealthMonitor: 'मानसिक स्वास्थ्य मॉनिटर',
    
    // Prescription Analyzer
    prescriptionAnalysis: 'प्रिस्क्रिप्शन विश्लेषण',
    prescriptionDescription: 'अपने प्रिस्क्रिप्शन की छवि अपलोड करें और कोई भी प्रासंगिक स्वास्थ्य जानकारी प्रदान करें। हमारा एआई इसका विश्लेषण करके संभावित समस्याओं और अंतर्दृष्टि प्रदान करेगा।',
    prescriptionNote: 'नोट: हमारा एआई विभिन्न हस्तलिखन शैलियों को पढ़ने के लिए डिज़ाइन किया गया है, जिसमें कर्सिव और लिखावट (गड़बड़) हस्तलिखन शामिल है। सर्वोत्तम परिणामों के लिए, सुनिश्चित करें कि प्रिस्क्रिप्शन छवि स्पष्ट और अच्छी रोशनी में हो।',
    uploadPrescription: 'प्रिस्क्रिप्शन अपलोड करें',
    dragDrop: 'खींचें और छोड़ें',
    clickToUpload: 'अपलोड करने के लिए क्लिक करें',
    imageTypes: 'पीएनजी, जेपीजी, या डब्ल्यूईपीजी',
    allergies: 'एलर्जी',
    allergiesPlaceholder: 'उदा., पेनिसिलिन, एस्पिरिन',
    age: 'आयु',
    agePlaceholder: 'उदा., 35',
    conditions: 'पूर्व-मौजूद स्थितियां',
    conditionsPlaceholder: 'उदा., मधुमेह, उच्च रक्तचाप',
    analyzePrescription: 'प्रिस्क्रिप्शन का विश्लेषण करें',
    analyzing: 'विश्लेषण कर रहे हैं...',
    
    // Mental Health Monitor
    mentalHealthTitle: 'मानसिक स्वास्थ्य मॉनिटर',
    mentalHealthDescription: 'अपनी राहत के बारे में एक छोटा ऑडियो संदेश रिकॉर्ड करें। हमारा एआई आपकी राहत का विश्लेषण करेगा और आपको व्यक्तिगत स्वास्थ्य सुझाव प्रदान करेगा।',
    startRecording: 'रिकॉर्डिंग शुरू करें',
    stopRecording: 'रिकॉर्डिंग रोकें',
    analyzingMood: 'आपकी राहत का विश्लेषण किया जा रहा है...',
    moodAnalysis: 'राहत विश्लेषण',
    
    // Analysis Results
    analysisReport: 'विश्लेषण रिपोर्ट',
    analysisConfidence: 'विश्लेषण विश्वास',
    allergyAlerts: 'एलर्जी अलर्ट',
    safetyAlerts: 'उन्नत सुरक्षा अलर्ट',
    drugInteractions: 'दवा संक्रियावाद',
    identifiedMedications: 'जाँचित दवाएँ',
    costOptimization: 'कीमत वैशिष्ट्यात्मकीकरण',
    whatItTreats: 'यह इसे लेता है:',
    take: 'लें:',
    matchFound: '✅ मैच मिला',
    noMatch: '⚠️ कोई मैच नहीं',
    yourCondition: 'आपकी स्थिति:',
    recommendation: 'सुझाव:',
    
    // Auth Page
    login: 'लॉगिन',
    signup: 'साइन अप',
    username: 'उपयोगकर्ता नाम',
    password: 'पासवर्ड',
    email: 'ईमेल (वैकल्पिक)',
    loginButton: 'लॉगिन',
    signupButton: 'साइन अप',
    needAccount: 'एक खाता चाहिए?',
    haveAccount: 'पहले से ही खाता है?',
    
    // Patient Info Form
    additionalInfo: 'अतिरिक्त जानकारी (वैकल्पिक)',
    additionalInfoNote: 'नोट: कृपया अपनी वर्तमान स्वास्थ्य स्थितियों को सूचीबद्ध करें। यह हमें आपकी दवाओं को आपकी विशेष आवश्यकताओं के साथ मैच करने मदद करेगा और बेहतर समय सुझाव प्रदान करेगा।',
    
    // Confidence Display
    confidenceTip: 'टिप: यदि हस्तलिखन की स्पष्टता के कारण विश्वास कम है, बेहतर रोशनी और ध्यान से फोटो लें।',
    
    // Chat Bot
    chatBotTitle: 'डिजिटल डॉक्टर सहायक',
    chatBotWelcome: 'नमस्ते! मैं आपका डिजिटल डॉक्टर सहायक हूँ। आज आपकी प्रिस्क्रिप्शन या दवाओं के साथ मैं कैसे मदद कर सकता हूँ?',
    chatBotPlaceholder: 'प्रिस्क्रिप्शन या दवाओं के बारे में अपना प्रश्न लिखें...',
    chatBotSend: 'भेजें',
    chatBotDisclaimer: 'विस्तृत प्रिस्क्रिप्शन विश्लेषण के लिए कृपया प्रिस्क्रिप्शन विश्लेषक टूल का उपयोग करें।',
    chatBotError: 'क्षमा करें, मेरे पास आपकी अनुरोध को प्रसंस्कृत करने में एक त्रुटि आई। कृपया पुनः प्रयास करें।',
    chatBotPrescriptionInfo: 'मैं प्रिस्क्रिप्शन विश्लेषण मदद कर सकता हूँ। कृपया प्रिस्क्रिप्शन विश्लेषक टूल का उपयोग करके अपनी प्रिस्क्रिप्शन की छवि अपलोड करें, और मैं आपकी दवाओं के बारे में विस्तृत जानकारी प्रदान करूंगा, जिसमें डोजेज, संक्रियावाद और सुरक्षा अलर्ट शामिल हैं।',
    chatBotSideEffects: 'अगर आप अपनी दवाओं के बारे में तर्कहेतु की चिंता कर रहे हैं, कृपया अपनी प्रिस्क्रिप्शन का विश्लेषण के लिए अपलोड करें। मैं आपकी विशिष्ट दवाओं और डोजेज के आधार पर संभावित तर्कहेतु अनुमान कर सकता हूँ।',
    chatBotInteractions: 'दवा संक्रियावाद गंभीर हो सकते हैं। अपनी दवाओं के बीच संभावित संक्रियावाद की जांच करने के लिए कृपया अपनी प्रिस्क्रिप्शन का विश्लेषण के लिए अपलोड करें।',
    chatBotDosage: 'दवा की प्रभावितता और सुरक्षा के लिए ठीक डोजेज अहम है। कृपया अपनी प्रिस्क्रिप्शन अपलोड करें ताकि मैं डोजेज का विश्लेषण कर सकूं और आपकी स्वास्थ्य प्रोफाइल के आधार पर सुझाव प्रदान कर सकूं।',
    chatBotHelp: 'मैं आपकी प्रिस्क्रिप्शन और दवाओं को समझने मदद करने के लिए यहाँ हूँ। आप मुझसे बारे में पूछ सकते हैं:\\n- प्रिस्क्रिप्शन विश्लेषण\\n- दवा तर्कहेतु\\n- दवा संक्रियावाद\\n- डोजेज जानकारी\\n\\nशुरू करने के लिए कृपया प्रिस्क्रिप्शन विश्लेषक टूल का उपयोग करके अपनी प्रिस्क्रिप्शन अपलोड करें।',
    chatBotDefault: 'मैं आपकी प्रिस्क्रिप्शन और दवाओं को समझने मदद करने के लिए यहाँ हूँ। आप मुझसे बारे में पूछ सकते हैं:\\n- प्रिस्क्रिप्शन विश्लेषण\\n- दवा तर्कहेतु\\n- दवा संक्रियावाद\\n- डोजेज जानकारी\\n\\nशुरू करने के लिए कृपया प्रिस्क्रिप्शन विश्लेषक टूल का उपयोग करके अपनी प्रिस्क्रिप्शन अपलोड करें।'
  },
  
  bn: {
    // Common
    home: 'হোম',
    logout: 'লগআউট',
    
    // Landing Page
    welcomeTitle: 'ডিজিটাল ডক্টর এআই-এ স্বাগতম',
    welcomeDescription: 'প্রিসক্রিপশন যাচাইকরণ এবং মানসিক স্বাস্থ্য পর্যবেক্ষণের জন্য আপনার এআই-চালিত স্বাস্থ্য সহকারী।',
    prescriptionValidator: 'প্রিসক্রিপশন যাচাইকারী',
    mentalHealthMonitor: 'মানসিক স্বাস্থ্য পর্যবেক্ষক',
    
    // Prescription Analyzer
    prescriptionAnalysis: 'প্রিসক্রিপশন বিশ্লেষণ',
    prescriptionDescription: 'আপনার প্রিসক্রিপশনের চিত্র আপলোড করুন এবং প্রাসঙ্গিক স্বাস্থ্য তথ্য সরবরাহ করুন। আমাদের এআই সম্ভাব্য সমস্যা এবং অন্তর্দৃষ্টির জন্য এটি বিশ্লেষণ করবে।',
    prescriptionNote: 'নোট: আমাদের এআই বিভিন্ন হাতের লেখার শৈলী পড়তে ডিজাইন করা হয়েছে, কার্সিভ এবং খসড়া (অস্পষ্ট) হাতের লেখা সহ। সেরা ফলাফলের জন্য, প্রিসক্রিপশন চিত্রটি স্পষ্ট এবং ভালোভাবে আলোকিত করা নিশ্চিত করুন।',
    uploadPrescription: 'প্রিসক্রিপশন আপলোড করুন',
    dragDrop: 'টেনে আনুন এবং ছাড়ুন',
    clickToUpload: 'আপলোড করতে ক্লিক করুন',
    imageTypes: 'পিএনজি, জেপিজি বা ডব্লিউইপিজি',
    allergies: 'অ্যালার্জি',
    allergiesPlaceholder: 'যেমন, পেনিসিলিন, অ্যাসপিরিন',
    age: 'বয়স',
    agePlaceholder: 'যেমন, 35',
    conditions: 'পূর্ববর্তী অবস্থা',
    conditionsPlaceholder: 'যেমন, ডায়াবেটিস, উচ্চ রক্তচাপ',
    analyzePrescription: 'প্রিসক্রিপশন বিশ্লেষণ করুন',
    analyzing: 'বিশ্লেষণ করা হচ্ছে...',
    
    // Mental Health Monitor
    mentalHealthTitle: 'মানসিক স্বাস্থ্য পর্যবেক্ষক',
    mentalHealthDescription: 'আপনি কেমন অনুভব করছেন সে সম্পর্কে একটি সংক্ষিপ্ত অডিও বার্তা রেকর্ড করুন। আমাদের এআই আপনার মেজাজ বিশ্লেষণ করবে এবং ব্যক্তিগত স্বাস্থ্য সুপারিশ সরবরাহ করবে।',
    startRecording: 'রেকর্ডিং শুরু করুন',
    stopRecording: 'রেকর্ডিং বন্ধ করুন',
    analyzingMood: 'আপনার মেজাজ বিশ্লেষণ করা হচ্ছে...',
    moodAnalysis: 'মেজাজ বিশ্লেষণ',
    
    // Analysis Results
    analysisReport: 'বিশ্লেষণ প্রতিবেদন',
    analysisConfidence: 'বিশ্লেষণ আত্মবিশ্বাস',
    allergyAlerts: 'অ্যালার্জি সতর্কতা',
    safetyAlerts: 'উন্নত নিরাপত্তা সতর্কতা',
    drugInteractions: 'ঔষধ মিথস্ক্রিয়া',
    identifiedMedications: 'সনাক্ত করা ঔষধ',
    costOptimization: 'খরচ অপ্টিমাইজেশন',
    whatItTreats: 'এটি কী চিকিৎসা করে:',
    take: 'গ্রহণ করুন:',
    matchFound: '✅ মিল পাওয়া গেছে',
    noMatch: '⚠️ কোনও মিল নেই',
    yourCondition: 'আপনার অবস্থা:',
    recommendation: 'সুপারিশ:',
    
    // Auth Page
    login: 'লগইন',
    signup: 'সাইন আপ',
    username: 'ব্যবহারকারীর নাম',
    password: 'পাসওয়ার্ড',
    email: 'ইমেইল (ঐচ্ছিক)',
    loginButton: 'লগইন',
    signupButton: 'সাইন আপ',
    needAccount: 'অ্যাকাউন্ট প্রয়োজন?',
    haveAccount: 'ইতিমধ্যে অ্যাকাউন্ট আছে?',
    
    // Patient Info Form
    additionalInfo: 'অতিরিক্ত তথ্য (ঐচ্ছিক)',
    additionalInfoNote: 'নোট: আপনার বর্তমান স্বাস্থ্য অবস্থা সব তালিকাভুক্ত করুন। এটি আমাদের আপনার নির্দিষ্ট প্রয়োজনের সাথে আপনার ঔষধগুলি মেলানোর এবং ভালো সময় সুপারিশ সরবরাহ করতে সাহায্য করবে।',
    
    // Confidence Display
    confidenceTip: 'টিপ: যদি হাতের লেখার স্পষ্টতার কারণে আত্মবিশ্বাস কম হয়, ভালো আলো এবং ফোকাস সহ ফটোটি আবার তুলতে চেষ্টা করুন।',
    
    // Chat Bot
    chatBotTitle: 'ডিজিটাল ডক্টর সহকারী',
    chatBotWelcome: 'হ্যালো! আমি আপনার ডিজিটাল ডক্টর সহকারী। আজ আপনার প্রিসক্রিপশন বা ঔষধ নিয়ে কীভাবে আমি সাহায্য করতে পারি?',
    chatBotPlaceholder: 'প্রিসক্রিপশন বা ঔষধ সম্পর্কে আপনার প্রশ্ন টাইপ করুন...',
    chatBotSend: 'পাঠান',
    chatBotDisclaimer: 'বিস্তারিত প্রিসক্রিপশন বিশ্লেষণের জন্য, দয়া করে প্রিসক্রিপশন বিশ্লেষক টুল ব্যবহার করুন।',
    chatBotError: 'দুঃখিত, আপনার অনুরোধ প্রক্রিয়াকরণের সময় আমি একটি ত্রুটির সম্মুখীন হয়েছি। দয়া করে আবার চেষ্টা করুন।',
    chatBotPrescriptionInfo: 'আমি আপনার প্রিসক্রিপশন বিশ্লেষণে সাহায্য করতে পারি। প্রিসক্রিপশন বিশ্লেষক টুল ব্যবহার করে আপনার প্রিসক্রিপশনের চিত্র আপলোড করুন, এবং আমি আপনার ঔষধ, ডোজ, মিথস্ক্রিয়া এবং নিরাপত্তা সতর্কতা সম্পর্কে বিস্তারিত তথ্য সরবরাহ করব।',
    chatBotSideEffects: 'আপনি যদি আপনার ঔষধের পার্শ্বপ্রতিক্রিয়া নিয়ে চিন্তিত হন, দয়া করে বিশ্লেষণের জন্য আপনার প্রিসক্রিপশন আপলোড করুন। আমি আপনার নির্দিষ্ট ঔষধ এবং ডোজের উপর ভিত্তি করে সম্ভাব্য পার্শ্বপ্রতিক্রিয়া সনাক্ত করতে পারি।',
    chatBotInteractions: 'ঔষধ মিথস্ক্রিয়া গুরুতর হতে পারে। আপনার ঔষধের মধ্যে সম্ভাব্য মিথস্ক্রিয়া পরীক্ষা করতে, দয়া করে বিশ্লেষণের জন্য আপনার প্রিসক্রিপশন আপলোড করুন।',
    chatBotDosage: 'সঠিক ডোজ ঔষধের কার্যকারিতা এবং নিরাপত্তার জন্য গুরুত্বপূর্ণ। দয়া করে আপনার প্রিসক্রিপশন আপলোড করুন যাতে আমি ডোজ বিশ্লেষণ করতে পারি এবং আপনার স্বাস্থ্য প্রোফাইলের উপর ভিত্তি করে সুপারিশ সরবরাহ করতে পারি।',
    chatBotHelp: 'আমি আপনার প্রিসক্রিপশন এবং ঔষধ বুঝতে সাহায্য করতে এখানে আছি:\n- প্রিসক্রিপশন বিশ্লেষণ\n- ঔষধ পার্শ্বপ্রতিক্রিয়া\n- ঔষধ মিথস্ক্রিয়া\n- ডোজ তথ্য\n\nশুরু করতে, প্রিসক্রিপশন বিশ্লেষক টুল ব্যবহার করে আপনার প্রিসক্রিপশন আপলোড করুন।',
    chatBotDefault: 'আমি আপনার প্রিসক্রিপশন এবং ঔষধ প্রশ্নে সাহায্য করতে এখানে আছি। বিস্তারিত বিশ্লেষণের জন্য, প্রিসক্রিপশন বিশ্লেষক টুল ব্যবহার করে আপনার প্রিসক্রিপশন আপলোড করুন। আপনার ঔষধ সম্পর্কে কোনও নির্দিষ্ট প্রশ্ন আছে কি?'
  },

  mr: {
    // Common
    home: 'होम',
    logout: 'लॉगआउट',
    
    // Landing Page
    welcomeTitle: 'डिजिटल डॉक्टर एआई मध्ये आपले स्वागत आहे',
    welcomeDescription: 'प्रिस्क्रिप्शन सत्यापन आणि मानसिक आरोग्य निरीक्षणासाठी आपला एआई-संचालित आरोग्य सहाय्यक.',
    prescriptionValidator: 'प्रिस्क्रिप्शन व्हॅलिडेटर',
    mentalHealthMonitor: 'मानसिक आरोग्य मॉनिटर',
    
    // Prescription Analyzer
    prescriptionAnalysis: 'प्रिस्क्रिप्शन विश्लेषण',
    prescriptionDescription: 'आपल्या प्रिस्क्रिप्शनची प्रतिमा अपलोड करा आणि कोणतीही संबंधित आरोग्य माहिती प्रदान करा. आमचा एआई संभाव्य समस्या आणि अंतर्दृष्टीसाठी त्याचे विश्लेषण करेल.',
    prescriptionNote: 'टीप: आमचा एआई विविध हस्तलिखन शैली वाचण्यासाठी डिझाइन केलेला आहे, कर्सिव्ह आणि लिखाण (अस्पष्ट) हस्तलिखन सह. सर्वोत्तम परिणामांसाठी, प्रिस्क्रिप्शन प्रतिमा स्पष्ट आणि चांगल्या प्रकाशात असल्याची खात्री करा.',
    uploadPrescription: 'प्रिस्क्रिप्शन अपलोड करा',
    dragDrop: 'ओढा आणि टाका',
    clickToUpload: 'अपलोड करण्यासाठी क्लिक करा',
    imageTypes: 'पीएनजी, जेपीजी किंवा डब्ल्यूईपीजी',
    allergies: 'ॲलर्जी',
    allergiesPlaceholder: 'उदा., पेनिसिलिन, अ‍ॅस्पिरिन',
    age: 'वय',
    agePlaceholder: 'उदा., 35',
    conditions: 'पूर्वीच्या अवस्था',
    conditionsPlaceholder: 'उदा., मधुमेह, उच्च रक्तदाब',
    analyzePrescription: 'प्रिस्क्रिप्शन विश्लेषण करा',
    analyzing: 'विश्लेषण करत आहे...',
    
    // Mental Health Monitor
    mentalHealthTitle: 'मानसिक आरोग्य मॉनिटर',
    mentalHealthDescription: 'तुम्ही कसे अनुभवत आहात याबद्दल एक छोटा ऑडिओ संदेश रेकॉर्ड करा. आमचा एआई तुमचा मूड विश्लेषित करेल आणि वैयक्तिकृत आरोग्य शिफारसी प्रदान करेल.',
    startRecording: 'रेकॉर्डिंग सुरू करा',
    stopRecording: 'रेकॉर्डिंग थांबवा',
    analyzingMood: 'तुमचा मूड विश्लेषित करत आहे...',
    moodAnalysis: 'मूड विश्लेषण',
    
    // Analysis Results
    analysisReport: 'विश्लेषण अहवाल',
    analysisConfidence: 'विश्लेषण विश्वास',
    allergyAlerts: 'ॲलर्जी इशारे',
    safetyAlerts: 'सुधारित सुरक्षितता इशारे',
    drugInteractions: 'औषध अंतर्क्रिया',
    identifiedMedications: 'ओळखलेल्या औषधे',
    costOptimization: 'खर्च ऑप्टिमाइझेशन',
    whatItTreats: 'हे काय उपचार करते:',
    take: 'घ्या:',
    matchFound: '✅ जुळवणी सापडली',
    noMatch: '⚠️ कोणतीही जुळवणी नाही',
    yourCondition: 'तुमची स्थिती:',
    recommendation: 'शिफारस:',
    
    // Auth Page
    login: 'लॉगिन',
    signup: 'साइन अप करा',
    username: 'वापरकर्तानाव',
    password: 'पासवर्ड',
    email: 'ईमेल (पर्यायी)',
    loginButton: 'लॉगिन',
    signupButton: 'साइन अप करा',
    needAccount: 'खाते आवश्यक आहे का?',
    haveAccount: 'आधीपासूनच खाते आहे का?',
    
    // Patient Info Form
    additionalInfo: 'अतिरिक्त माहिती (पर्यायी)',
    additionalInfoNote: 'टीप: कृपया आपल्या सर्व वर्तमान आरोग्य अवस्था नमूद करा. हे आम्हाला आपल्या औषधांची आपल्या निर्दिष्ट गरजांशी जुळवण्यात आणि चांगल्या वेळेच्या शिफारसी प्रदान करण्यात मदत करेल.',
    
    // Confidence Display
    confidenceTip: 'टिप: जर हस्तलिखनाच्या स्पष्टतेमुळे विश्वास कमी असेल, तर चांगल्या प्रकाश आणि फोकससह फोटो पुन्हा घेण्याचा प्रयत्न करा.',
    
    // Chat Bot
    chatBotTitle: 'डिजिटल डॉक्टर सहाय्यक',
    chatBotWelcome: 'हॅलो! मी तुमचा डिजिटल डॉक्टर सहाय्यक आहे. आज तुमच्या प्रिस्क्रिप्शन किंवा औषधांबाबत मी कशी मदत करू शकतो?',
    chatBotPlaceholder: 'प्रिस्क्रिप्शन किंवा औषधांबाबत तुमचा प्रश्न टाइप करा...',
    chatBotSend: 'पाठवा',
    chatBotDisclaimer: 'तपशीलवार प्रिस्क्रिप्शन विश्लेषणासाठी, कृपया प्रिस्क्रिप्शन विश्लेषक साधन वापरा.',
    chatBotError: 'क्षमस्व, तुमची विनंती प्रक्रिया करताना मला त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
    chatBotPrescriptionInfo: 'मी तुमच्या प्रिस्क्रिप्शन विश्लेषणात मदत करू शकतो. प्रिस्क्रिप्शन विश्लेषक साधन वापरून तुमच्या प्रिस्क्रिप्शनची प्रतिमा अपलोड करा, आणि मी तुमच्या औषधांबद्दल, डोस, अंतर्क्रिया आणि सुरक्षितता इशार्यांबद्दल तपशीलवार माहिती प्रदान करेन.',
    chatBotInteractions: 'औषध अंतर्क्रिया गंभीर असू शकतात. तुमच्या औषधांमधील संभाव्य अंतर्क्रियांची तपासणी करण्यासाठी, कृपया विश्लेषणासाठी तुमची प्रिस्क्रिप्शन अपलोड करा.',
    chatBotDosage: 'योग्य डोस औषधाच्या प्रभावशीलतेसाठी आणि सुरक्षिततेसाठी महत्त्वाचे आहे. कृपया तुमची प्रिस्क्रिप्शन अपलोड करा जेणेकरून मी डोसचे विश्लेषण करू शकेन आणि तुमच्या आरोग्य प्रोफाइलवर आधारित शिफारसी प्रदान करू शकेन.',
    chatBotHelp: 'मी तुमच्या प्रिस्क्रिप्शन आणि औषधांची समजूत घेण्यासाठी येथे आहे:\n- प्रिस्क्रिप्शन विश्लेषण\n- औषध पार्श्वप्रतिक्रिया\n- औषध अंतर्क्रिया\n- डोस माहिती\n\nप्रारंभ करण्यासाठी, प्रिस्क्रिप्शन विश्लेषक साधन वापरून तुमची प्रिस्क्रिप्शन अपलोड करा.',
    chatBotDefault: 'मी तुमच्या प्रिस्क्रिप्शन आणि औषध प्रश्नांमध्ये मदत करण्यासाठी येथे आहे. तपशीलवार विश्लेषणासाठी, प्रिस्क्रिप्शन विश्लेषक साधन वापरून तुमची प्रिस्क्रिप्शन अपलोड करा. तुमच्या औषधांबद्दल कोणताही निर्दिष्ट प्रश्न आहे का?'
  },
  
  // Add translations for other languages as needed
  te: {
    home: 'హోమ్',
    logout: 'లాగౌట్',
    welcomeTitle: 'డిజిటల్ డాక్టర్ AI కి స్వాగతం',
    welcomeDescription: 'మీ ప్రిస్క్రిప్షన్ ధృవీకరణ, మోతాదు ధృవీకరణ మరియు మానసిక ఆరోగ్య పర్యవేక్షణ కోసం మీ AI-పవర్డ్ హెల్త్ సహాయకుడు. ప్రిస్క్రిప్షన్ అప్లోడ్ చేయండి, డ్రగ్ పరస్పర చర్యలను తనిఖీ చేయండి మరియు వ్యక్తిగత ఆరోగ్య అంతర్దృష్టిని పొందండి.',
    prescriptionValidator: 'ప్రిస్క్రిప్షన్ వాలిడేటర్',
    mentalHealthMonitor: 'మానసిక ఆరోగ్య పర్యవేక్షకుడు',
    // chatBot: 'చాట్ బాట్',
    prescriptionAnalysis: 'ప్రిస్క్రిప్షన్ విశ్లేషణ',
    prescriptionDescription: 'మీ ప్రిస్క్రిప్షన్ యొక్క చిత్రాన్ని అప్లోడ్ చేయండి మరియు ఏవైనా సంబంధిత ఆరోగ్య సమాచారాన్ని అందించండి. మా AI దానిని సంభావ్య సమస్యలు మరియు అంతర్దృష్టుల కోసం విశ్లేషిస్తుంది.',
    prescriptionNote: 'గమనిక: మా AI వివిధ లిపి శైలులను చదవడానికి రూపొందించబడింది, ఇందులో కర్సివ్ మరియు చీకటి లిపి ఉన్నాయి. ఉత్తమ ఫలితాల కోసం, ప్రిస్క్రిప్షన్ చిత్రం స్పష్టంగా మరియు బాగా వెలుగులో ఉండేలా చూసుకోండి.',
    uploadPrescription: 'ప్రిస్క్రిప్షన్ అప్లోడ్ చేయండి',
    dragDrop: 'డ్రాగ్ అండ్ డ్రాప్',
    clickToUpload: 'అప్లోడ్ చేయడానికి క్లిక్ చేయండి',
    imageTypes: 'PNG, JPG, లేదా WEBP',
    allergies: 'అలర్జీలు',
    allergiesPlaceholder: 'ఉదా., పెనిసిలిన్, ఆస్పిరిన్',
    age: 'వయస్సు',
    agePlaceholder: 'ఉదా., 35',
    conditions: 'మునుపటి పరిస్థితులు',
    conditionsPlaceholder: 'ఉదా., మధుమేహం, ఉన్నత రక్తపోటు',
    analyzePrescription: 'ప్రిస్క్రిప్షన్ విశ్లేషించండి',
    analyzing: 'విశ్లేషిస్తోంది...',
    mentalHealthTitle: 'మానసిక ఆరోగ్య పర్యవేక్షకుడు',
    mentalHealthDescription: 'మీరు ఎలా అనుభవిస్తున్నారో గురించి ఒక చిన్న ఆడియో సందేశాన్ని రికార్డ్ చేయండి. మా AI మీ మూడ్ ని విశ్లేషిస్తుంది మరియు వ్యక్తిగత ఆరోగ్య సిఫార్సులను అందిస్తుంది.',
    startRecording: 'రికార్డింగ్ ప్రారంభించండి',
    stopRecording: 'రికార్డింగ్ ఆపండి',
    analyzingMood: 'మీ మూడ్ ని విశ్లేషిస్తోంది...',
    moodAnalysis: 'మూడ్ విశ్లేషణ',
    analysisReport: 'విశ్లేషణ నివేదిక',
    analysisConfidence: 'విశ్లేషణ నమ్మకం',
    allergyAlerts: 'అలర్జీ హెచ్చరికలు',
    safetyAlerts: 'ఉన్నత భద్రతా హెచ్చరికలు',
    drugInteractions: 'డ్రగ్ పరస్పర చర్యలు',
    identifiedMedications: 'గుర్తించబడిన మందులు',
    costOptimization: 'ధర ఆప్టిమైజేషన్',
    whatItTreats: 'ఇది ఏమి చికిత్స చేస్తుంది:',
    take: 'తీసుకోండి:',
    matchFound: '✅ పోలిక కనబడింది',
    noMatch: '⚠️ పోలిక లేదు',
    yourCondition: 'మీ పరిస్థితి:',
    recommendation: 'సిఫార్సు:',
    login: 'లాగిన్',
    signup: 'సైన్ అప్',
    username: 'వాడుకరి పేరు',
    password: 'పాస్ వర్డ్',
    email: 'ఈమెయిల్ (ఐచ్ఛికం)',
    loginButton: 'లాగిన్',
    signupButton: 'సైన్ అప్',
    needAccount: 'ఖాతా అవసరమా?',
    haveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
    additionalInfo: 'అదనపు సమాచారం (ఐచ్ఛికం)',
    additionalInfoNote: 'గమనిక: మీ ప్రస్తుత ఆరోగ్య పరిస్థితిగళన్నింటినీ జాబితా చేయండి. ఇది మీ మందులను మీ నిర్దిష్ట అవసరాలతో పోల్చడంలో మరియు ఉత్తమ సమయ సిఫార్సులను అందించడంలో మాకు సహాయపడుతుంది.',
    confidenceTip: 'చిట్కా: లిపి స్పష్టత కారణంగా నమ్మకం తక్కువగా ఉంటే, బెటర్ లైటింగ్ మరియు ఫోకస్ తో ఫోటోను మళ్ళీ తీయడాన్ని ప్రయత్నించండి.',
    
    // Chat Bot
    chatBotTitle: 'డిజిటల్ డాక్టర్ సహాయకుడు',
    chatBotWelcome: 'హలో! నేను మీ డిజిటల్ డాక్టర్ సహాయకుడిని. మీ ప్రిస్క్రిప్షన్ లేదా మందుల గురించి మీకు ఏదైనా సహాయం చేయగలనా?',
    chatBotPlaceholder: 'మీ ప్రిస్క్రిప్షన్ లేదా మందుల గురించి మీ ప్రశ్నను టైప్ చేయండి...',
    chatBotSend: 'పంపండి',
    chatBotDisclaimer: 'వివరణాత్మక ప్రిస్క్రిప్షన్ విశ్లేషణ కోసం, దయచేసి ప్రిస్క్రిప్షన్ విశ్లేషక సాధనాన్ని ఉపయోగించండి.',
    chatBotError: 'క్షమించండి, మీ అభ్యర్థనను ప్రాసెస్ చేయడంలో నాకు లోపం జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.',
    chatBotPrescriptionInfo: 'నేను మీ ప్రిస్క్రిప్షన్ విశ్లేషణలో మీకు సహాయం చేయగలను. ప్రిస్క్రిప్షన్ విశ్లేషక సాధనం ఉపయోగించి మీ ప్రిస్క్రిప్షన్ యొక్క చిత్రాన్ని అప్లోడ్ చేయండి, మరియు మీ మందులు, మోతాదులు, పరస్పర చర్యలు మరియు భద్రతా హెచ్చరికల గురించి వివరణాత్మక సమాచారం ఇస్తాను.',
    chatBotSideEffects: 'మీ మందుల యొక్క ప్రక్కదారు ప్రభావాల గురించి మీకు ఆందోళన ఉంటే, విశ్లేషణ కోసం మీ ప్రిస్క్రిప్షన్ అప్లోడ్ చేయండి. మీ నిర్దిష్ట మందులు మరియు మోతాదుల ఆధారంగా సాధ్యమైన ప్రక్కదారు ప్రభావాలను గుర్తించగలను.',
    chatBotInteractions: 'డ్రగ్ పరస్పర చర్యలు తీవ్రంగా ఉండవచ్చు. మీ మందుల మధ్య సాధ్యమైన పరస్పర చర్యలను తనిఖీ చేయడానికి, విశ్లేషణ కోసం మీ ప్రిస్క్రిప్షన్ అప్లోడ్ చేయండి.',
    chatBotDosage: 'సరైన మోతాదు మందు ప్రభావశీలత మరియు భద్రత కోసం ముఖ్యం. మీ ప్రిస్క్రిప్షన్ అప్లోడ్ చేయండి, అప్పుడు నేను మోతాదులను విశ్లేషించి మీ ఆరోగ్య ప్రొఫైల్ ఆధారంగా సిఫార్సులు అందిస్తాను.',
    chatBotHelp: 'నేను మీ ప్రిస్క్రిప్షన్ మరియు మందులను అర్థం చేసుకోవడంలో మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాను:\\n- ప్రిస్క్రిప్షన్ విశ్లేషణ\\n- మందు ప్రక్కదారు ప్రభావాలు\\n- డ్రగ్ పరస్పర చర్యలు\\n- మోతాదు సమాచారం\\n\\nప్రారంభించడానికి, ప్రిస్క్రిప్షన్ విశ్లేషక సాధనం ఉపయోగించి మీ ప్రిస్క్రిప్షన్ అప్లోడ్ చేయండి.',
    chatBotDefault: 'నేను మీ ప్రిస్క్రిప్షన్ మరియు మందు ప్రశ్నలలో మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాను. వివరణాత్మక విశ్లేషణ కోసం, ప్రిస్క్రిప్షన్ విశ్లేషక సాధనం ఉపయోగించి మీ ప్రిస్క్రిప్షన్ అప్లోడ్ చేయండి. మీ మందుల గురించి ఏదైనా నిర్దిష్ట ప్రశ్న ఉందా?'
  },
  
  ta: {
    home: 'முகப்பு',
    logout: 'வெளியேறு',
    welcomeTitle: 'டிஜிட்டல் டாக்டர் AI க்கு வரவேற்கிறோம்',
    welcomeDescription: 'உங்கள் பிரிஸ்கிரிப்ஷன் சரிபார்ப்பு மற்றும் மானச சுகாதார கண்காணிப்புக்கான உங்கள் AI-இயக்கப்பட்ட சுகாதார உதவியாளர்.',
    prescriptionValidator: 'பிரிஸ்கிரிப்ஷன் சரிபார்ப்பான்',
    mentalHealthMonitor: 'மானச சுகாதார கண்காணிப்பு',
    // chatBot: 'சாட் பாட்',
    prescriptionAnalysis: 'பிரிஸ்கிரிப்ஷன் பகுப்பாய்வு',
    prescriptionDescription: 'உங்கள் பிரிஸ்கிரிப்ஷனின் படத்தை பதிவேற்றவும் மற்றும் தொடர்புடைய சுகாதார தகவலை வழங்கவும். எங்கள் AI அதை சாத்தியமான சிக்கல்கள் மற்றும் நுண்ணறிவுகளுக்காக பகுப்பாய்வு செய்யும்.',
    prescriptionNote: 'குறிப்பு: எங்கள் AI பல்வேறு கையெழுத்து பாணிகளைப் படிக்க வடிவமைக்கப்பட்டுள்ளது, இதில் கர்சிவ் மற்றும் குழப்பமான கையெழுத்து உள்ளது. சிறந்த முடிவுகளுக்கு, பிரிஸ்கிரிப்ஷன் படம் தெளிவாகவும் நல்ல ஒளியிலும் இருக்குமாறு உறுதி செய்க.',
    uploadPrescription: 'பிரிஸ்கிரிப்ஷனை பதிவேற்றவும்',
    dragDrop: 'இழுத்து விடவும்',
    clickToUpload: 'பதிவேற்ற கிளிக் செய்யவும்',
    imageTypes: 'PNG, JPG, அல்லது WEBP',
    allergies: '�லர்ஜிகள்',
    allergiesPlaceholder: 'எ.கா., பெனிசிலின், ஆஸ்பிரின்',
    age: 'வயது',
    agePlaceholder: 'எ.கா., 35',
    conditions: 'முன்பே உள்ள நிலைமைகள்',
    conditionsPlaceholder: 'எ.கா., நீரிழிவு, உயர் இரத்த அழுத்தம்',
    analyzePrescription: 'பிரிஸ்கிரிப்ஷனை பகுப்பாய்வு செய்யவும்',
    analyzing: 'பகுப்பாய்வு செய்கிறது...',
    mentalHealthTitle: 'மானச சுகாதார கண்காணிப்பு',
    mentalHealthDescription: 'நீங்கள் எப்படி உணர்கிறீர்கள் என்பதைப் பற்றி ஒரு சிறிய ஆடியோ செய்தியைப் பதிவு செய்யுங்கள். எங்கள் AI உங்கள் மனநிலையை பகுப்பாய்வு செய்து, தனிப்பட்ட ஆரோக்கிய பரிந்துரைகளை வழங்கும்.',
    startRecording: 'பதிவு செய்யத் தொடங்கவும்',
    stopRecording: 'பதிவை நிறுத்தவும்',
    analyzingMood: 'உங்கள் மனநிலையை பகுப்பாய்வு செய்கிறது...',
    moodAnalysis: 'மனநிலை பகுப்பாய்வு',
    analysisReport: 'பகுப்பாய்வு அறிக்கை',
    analysisConfidence: 'பகுப்பாய்வு நம்பிக்கை',
    allergyAlerts: '�லர்ஜி எச்சரிக்கைகள்',
    safetyAlerts: 'மேம்பட்ட பாதுகாப்பு எச்சரிக்கைகள்',
    drugInteractions: 'மருந்து ஊடாடல்கள்',
    identifiedMedications: 'அடையாளம் காணப்பட்ட மருந்துகள்',
    costOptimization: 'செலவு மேம்பாடு',
    whatItTreats: 'இது எதை சிகிச்சை செய்கிறது:',
    take: 'எடுக்கவும்:',
    matchFound: '✅ பொருத்தம் கண்டுபிடிக்கப்பட்டது',
    noMatch: '⚠️ பொருத்தம் இல்லை',
    yourCondition: 'உங்கள் நிலைமை:',
    recommendation: 'பரிந்துரை:',
    login: 'உள்நுழைய',
    signup: 'பதிவு செய்யவும்',
    username: 'பயனர்பெயர்',
    password: 'கடவுச்சொல்',
    email: 'மின்னஞ்சல் (கட்டாயமற்றது)',
    loginButton: 'உள்நுழைய',
    signupButton: 'பதிவு செய்யவும்',
    needAccount: 'கணக்கு தேவையா?',
    haveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
    additionalInfo: 'கூடுதல் தகவல் (கட்டாயமற்றது)',
    additionalInfoNote: 'குறிப்பு: உங்கள் தற்போதைய சுகாதார நிலைமைகள் அனைத்தையும் பட்டியலிடவும். இது உங்கள் மருந்துகளை உங்கள் குறிப்பிட்ட தேவைகளுடன் பொருத்துவதற்கும், சிறந்த நேர பரிந்துரைகளை வழங்குவதற்கும் எங்களுக்கு உதவும்.',
    confidenceTip: 'உதவிக்குறிப்பு: கையெழுத்து தெளிவுத்தன்மை காரணமாக நம்பிக்கை குறைவாக இருந்தால், சிறந்த ஒளியுடன் மற்றும் கவனமாக புகைப்படத்தை மீண்டும் எடுக்க முயற்சிக்கவும்.',
    
    // Chat Bot
    chatBotTitle: 'டிஜிட்டல் டாக்டர் உதவியாளர்',
    chatBotWelcome: 'ஹலோ! நான் உங்கள் டிஜிட்டல் டாக்டர் உதவியாளர். உங்கள் பிரிஸ்கிரிப்ஷன் அல்லது மருந்துகள் குறித்து உங்களுக்கு ஏதேனும் உதவ முடியுமா?',
    chatBotPlaceholder: 'உங்கள் பிரிஸ்கிரிப்ஷன் அல்லது மருந்துகள் குறித்த உங்கள் கேள்வியை தட்டச்சு செய்யவும்...',
    chatBotSend: 'அனுப்பு',
    chatBotDisclaimer: 'விரிவான பிரிஸ்கிரிப்ஷன் பகுப்பாய்வுக்கு, பிரிஸ்கிரிப்ஷன் ஆனலைசர் கருவியைப் பயன்படுத்தவும்.',
    chatBotError: 'மன்னிக்கவும், உங்கள் கோரிக்கையை செயலாக்குவதில் எனக்கு பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.',
    chatBotPrescriptionInfo: 'நான் உங்கள் பிரிஸ்கிரிப்ஷனை பகுப்பாய்வு செய்வதில் உங்களுக்கு உதவ முடியும். பிரிஸ்கிரிப்ஷன் ஆனலைசர் கருவியைப் பயன்படுத்தி உங்கள் பிரிஸ்கிரிப்ஷனின் படத்தை பதிவேற்றவும், நான் உங்கள் மருந்துகள், டோசேஜ், ஊடாடல்கள் மற்றும் பாதுகாப்பு எச்சரிக்கைகள் பற்றி விரிவான தகவலை வழங்குவேன்.',
    chatBotSideEffects: 'உங்கள் மருந்துகளின் துணை விளைவுகள் குறித்து நீங்கள் கவலைப்படுகிறீர்கள் என்றால், பகுப்பாய்வுக்கு உங்கள் பிரிஸ்கிரிப்ஷனை பதிவேற்றவும். உங்கள் குறிப்பிட்ட மருந்துகள் மற்றும் டோசேஜின் அடிப்படையில் சாத்தியமான துணை விளைவுகளை நான் அடையாளம் காண முடியும்.',
    chatBotInteractions: 'மருந்து ஊடாடல்கள் தீவிரமாக இருக்கலாம். உங்கள் மருந்துகளுக்கு இடையே சாத்தியமான ஊடாடல்களைச் சரிபார்க்க, பகுப்பாய்வுக்கு உங்கள் பிரிஸ்கிரிப்ஷனை பதிவேற்றவும்.',
    chatBotDosage: 'சரியான டோசேஜ் மருந்து திறன்மிகுதி மற்றும் பாதுகாப்புக்கு முக்கியம். உங்கள் பிரிஸ்கிரிப்ஷனை பதிவேற்றவும், நான் டோசேஜை பகுப்பாய்வு செய்து உங்கள் சுகாதார சுயவிவரத்தின் அடிப்படையில் பரிந்துரைகளை வழங்குவேன்.',
    chatBotHelp: 'நான் உங்கள் பிரிஸ்கிரிப்ஷன் மற்றும் மருந்துகளைப் புரிந்துகொள்வதில் உங்களுக்கு உதவ இங்கே உள்ளேன்:\n- பிரிஸ்கிரிப்ஷன் பகுப்பாய்வு\n- மருந்து துணை விளைவுகள்\n- மருந்து ஊடாடல்கள்\n- டோசேஜ் தகவல்\n\nதொடங்க, பிரிஸ்கிரிப்ஷன் ஆனலைசர் கருவியைப் பயன்படுத்தி உங்கள் பிரிஸ்கிரிப்ஷனை பதிவேற்றவும்.',
    chatBotDefault: 'நான் உங்கள் பிரிஸ்கிரிப்ஷன் மற்றும் மருந்து கேள்விகளில் உங்களுக்கு உதவ இங்கே உள்ளேன். விரிவான பகுப்பாய்வுக்கு, பிரிஸ்கிரிப்ஷன் ஆனலைசர் கருவியைப் பயன்படுத்தி உங்கள் பிரிஸ்கிரிப்ஷனை பதிவேற்றவும். உங்கள் மருந்துகள் குறித்து உங்களுக்கு ஏதேனும் குறிப்பிட்ட கேள்வி உள்ளதா?'
  },
  
  kn: {
    home: 'ಮುಖಪುಟ',
    logout: 'ಲಾಗ್ ಔಟ್',
    welcomeTitle: 'ಡಿಜಿಟಲ್ ಡಾಕ್ಟರ್ AI ಗೆ ಸ್ವಾಗತ',
    welcomeDescription: 'ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಮಾನ್ಯತೆ ಮತ್ತು ಮಾನಸಿಕ ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಣೆಗಾಗಿ ನಿಮ್ಮ AI-ಆಧಾರಿತ ಆರೋಗ್ಯ ಸಹಾಯಕ.',
    prescriptionValidator: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಮಾನ್ಯತಾ ಪರೀಕ್ಷಕ',
    mentalHealthMonitor: 'ಮಾನಸಿಕ ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಕ',
    // chatBot: 'ಚಾಟ್ ಬಾಟ್',
    prescriptionAnalysis: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ವಿಶ್ಲೇಷಣೆ',
    prescriptionDescription: 'ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಚಿತ್ರವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಸಂಬಂಧಿತ ಆರೋಗ್ಯ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸಿ. ನಮ್ಮ AI ಸಾಧ್ಯವಿರುವ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಒಳನೋಟಗಳಿಗಾಗಿ ಅದನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ.',
    prescriptionNote: 'ಸೂಚನೆ: ನಮ್ಮ AI ಅನೇಕ ಬರಹ ಶೈಲಿಗಳನ್ನು ಓದಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ, ಇದರಲ್ಲಿ ಕರ್ಸಿವ್ ಮತ್ತು ಗೊಂದಲಕರ ಬರಹ ಸೇರಿದೆ. ಉತ್ತಮ ಫಲಿತಾಂಶಗಳಿಗಾಗಿ, ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಚಿತ್ರವು ಸ್ಪಷ್ಟವಾಗಿರಲಿ ಮತ್ತು ಉತ್ತಮ ಬೆಳಕಿನಲ್ಲಿರಲಿ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
    uploadPrescription: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ',
    dragDrop: 'ಎಳೆಯಿರಿ ಮತ್ತು ಬಿಡಿರಿ',
    clickToUpload: 'ಅಪ್ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
    imageTypes: 'PNG, JPG, ಅಥವಾ WEBP',
    allergies: 'ಅಲರ್ಜಿಗಳು',
    allergiesPlaceholder: 'ಉದಾ., ಪೆನಿಸಿಲಿನ್, ಆಸ್ಪಿರಿನ್',
    age: 'ವಯಸ್ಸು',
    agePlaceholder: 'ಉದಾ., 35',
    conditions: 'ಹಿಂದಿನ ಪರಿಸ್ಥಿತಿಗಳು',
    conditionsPlaceholder: 'ಉದಾ., ಮಧುಮೇಹ, ಉನ್ನತ ರಕ್ತದೊತ್ತಡ',
    analyzePrescription: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
    analyzing: 'ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
    mentalHealthTitle: 'ಮಾನಸಿಕ ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಕ',
    mentalHealthDescription: 'ನೀವು ಹೇಗಿರುವಿರೋ ಎಂಬುದರ ಕುರಿತು ಒಂದು ಸಣ್ಣ ಆಡಿಯೋ ಸಂದೇಶವನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ. ನಮ್ಮ AI ನಿಮ್ಮ ಮೂಡ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಿ ವೈಯಕ್ತಿಕೃತ ಆರೋಗ್ಯ ಸಲಹೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.',
    startRecording: 'ರೆಕಾರ್ಡಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ',
    stopRecording: 'ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ',
    analyzingMood: 'ನಿಮ್ಮ ಮೂಡ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
    moodAnalysis: 'ಮೂಡ್ ವಿಶ್ಲೇಷಣೆ',
    analysisReport: 'ವಿಶ್ಲೇಷಣಾ ವರದಿ',
    analysisConfidence: 'ವಿಶ್ಲೇಷಣಾ ವಿಶ್ವಾಸ',
    allergyAlerts: 'ಅಲರ್ಜಿ ಎಚ್ಚರಿಕೆಗಳು',
    safetyAlerts: 'ಸುಧಾರಿತ ಸುರಕ್ಷತಾ ಎಚ್ಚರಿಕೆಗಳು',
    drugInteractions: 'ಮಾದಕದ್ರವ್ಯ ಸಂವಾದಗಳು',
    identifiedMedications: 'ಗುರುತಿಸಲಾದ ಮಾದಕಗಳು',
    costOptimization: 'ವೆಚ್ಚ ಮೇಮ್ಮುಖ್ಯತೆ',
    whatItTreats: 'ಇದು ಏನನ್ನು ಚಿಕಿತ್ಸೆ ಮಾಡುತ್ತದೆ:',
    take: 'ತೆಗೆದುಕೊಳ್ಳಿ:',
    matchFound: '✅ ಹೊಂದಾಣಿಕೆ ಕಂಡುಬಂತು',
    noMatch: '⚠️ ಹೊಂದಾಣಿಕೆ ಇಲ್ಲ',
    yourCondition: 'ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿ:',
    recommendation: 'ಶಿಫಾರಸು:',
    login: 'ಲಾಗಿನ್',
    signup: 'ಸೈನ್ ಅಪ್',
    username: 'ಬಳಕೆದಾರ ಹೆಸರು',
    password: 'ಪಾಸ್ವರ್ಡ್',
    email: 'ಇಮೇಲ್ (ಐಚ್ಛಿಕ)',
    loginButton: 'ಲಾಗಿನ್',
    signupButton: 'ಸೈನ್ ಅಪ್',
    needAccount: 'ಖಾತೆ ಬೇಕೇ?',
    haveAccount: 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?',
    additionalInfo: 'ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ (ಐಚ್ಛಿಕ)',
    additionalInfoNote: 'ಸೂಚನೆ: ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಆರೋಗ್ಯ ಪರಿಸ್ಥಿತಿಗಳನ್ನೆಲ್ಲ ಪಟ್ಟಿ ಮಾಡಿ. ಇದು ನಿಮ್ಮ ಮಾದಕಗಳನ್ನು ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಅಗತ್ಯಗಳೊಂದಿಗೆ ಹೊಂದಿಸಲು ಮತ್ತು ಉತ್ತಮ ಸಮಯದ ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
    confidenceTip: 'ಸಲಹೆ: ಬರಹದ ಸ್ಪಷ್ಟತೆಯಿಂದಾಗಿ ವಿಶ್ವಾಸ ಕಡಿಮೆಯಿದ್ದರೆ, ಉತ್ತಮ ಬೆಳಕು ಮತ್ತು ಗಮನದಿಂದ ಫೋಟೋವನ್ನು ಮತ್ತೆ ತೆಗೆದುಕೊಳ್ಳಲು ಪ್ರಯತ್ನಿಸಿ.',
    
    // Chat Bot
    chatBotTitle: 'ಡಿಜಿಟಲ್ ಡಾಕ್ಟರ್ ಸಹಾಯಕ',
    chatBotWelcome: 'ಹಲೋ! ನಾನು ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಡಾಕ್ಟರ್ ಸಹಾಯಕ. ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅಥವಾ ಮಾದಕಗಳ ಬಗ್ಗೆ ನನಗೆ ಏನಾದರೂ ಸಹಾಯ ಮಾಡಬಹುದೇ?',
    chatBotPlaceholder: 'ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅಥವಾ ಮಾದಕಗಳ ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ...',
    chatBotSend: 'ಕಳುಹಿಸಿ',
    chatBotDisclaimer: 'ವಿವರಣಾತ್ಮಕ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ವಿಶ್ಲೇಷಣೆಗಾಗಿ, ದಯವಿಟ್ಟು ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ವಿಶ್ಲೇಷಕ ಉಪಕರಣವನ್ನು ಬಳಸಿ.',
    chatBotError: 'ಕ್ಷಮಿಸಿ, ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಾಗ ನನಗೆ ದೋಷ ಉಂಟಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
    chatBotPrescriptionInfo: 'ನಾನು ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಹುದು. ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ವಿಶ್ಲೇಷಕ ಉಪಕರಣವನ್ನು ಬಳಸಿ ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಚಿತ್ರವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ, ಮತ್ತು ನಾನು ನಿಮ್ಮ ಮಾದಕಗಳು, ಮೋತಾದುಗಳು, ಸಂವಾದಗಳು ಮತ್ತು ಭದ್ರತಾ ಎಚ್ಚರಿಕೆಗಳ ಬಗ್ಗೆ ವಿವರಣಾತ್ಮಕ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತೇನೆ.',
    chatBotSideEffects: 'ನಿಮ್ಮ ಮಾದಕಗಳ ಪ್ರಕ್ಕದಾರು ಪರಿಣಾಮಗಳ ಬಗ್ಗೆ ನೀವು ಚಿಂತಿಸುತ್ತಿದ್ದರೆ, ವಿಶ್ಲೇಷಣೆಗಾಗಿ ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ. ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಮಾದಕಗಳು ಮತ್ತು ಮೋತಾದುಗಳ ಆಧಾರದ ಮೇಲೆ ಸಾಧ್ಯವಿರುವ ಪ್ರಕ್ಕದಾರು ಪರಿಣಾಮಗಳನ್ನು ನಾನು ಗುರುತಿಸಬಹುದು.',
    chatBotInteractions: 'ಮಾದಕದ್ರವ್ಯ ಸಂವಾದಗಳು ತೀವ್ರವಾಗಿರಬಹುದು. ನಿಮ್ಮ ಮಾದಕಗಳ ನಡುವೆ ಸಾಧ್ಯವಿರುವ ಸಂವಾದಗಳನ್ನು ಪರಿಶೀಲಿಸಲು, ವಿಶ್ಲೇಷಣೆಗಾಗಿ ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ.',
    chatBotDosage: 'ಸರಿಯಾದ ಮೋತಾದು ಮಾದಕದ ಪರಿಣಾಮಕಾರಿತ್ವ ಮತ್ತು ಭದ್ರತೆಗಾಗಿ ಮುಖ್ಯವಾಗಿದೆ. ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ, ನಾನು ಮೋತಾದುಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ಆಧಾರದ ಮೇಲೆ ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸುತ್ತೇನೆ.',
    chatBotHelp: 'ನಾನು ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಮತ್ತು ಮಾದಕಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇನೆ:\n- ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ವಿಶ್ಲೇಷಣೆ\n- ಮಾದಕದ್ರವ್ಯ ಪ್ರಕ್ಕದಾರು ಪರಿಣಾಮಗಳು\n- ಮಾದಕದ್ರವ್ಯ ಸಂವಾದಗಳು\n- ಮೋತಾದು ಮಾಹಿತಿ\n\nಪ್ರಾರಂಭಿಸಲು, ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ವಿಶ್ಲೇಷಕ ಉಪಕರಣವನ್ನು ಬಳಸಿ ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ.',
    chatBotDefault: 'ನಾನು ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಮತ್ತು ಮಾದಕದ್ರವ್ಯ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇನೆ. ವಿವರಣಾತ್ಮಕ ವಿಶ್ಲೇಷಣೆಗಾಗಿ, ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ವಿಶ್ಲೇಷಕ ಉಪಕರಣವನ್ನು ಬಳಸಿ ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಅನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ. ನಿಮ್ಮ ಮಾದಕಗಳ ಬಗ್ಗೆ ಏನಾದರೂ ನಿರ್ದಿಷ್ಟ ಪ್ರಶ್ನೆ ಇದೆಯೇ?'
  },
  
  // For languages without translations, fall back to English
  gu: {
    // Common
    home: 'Home',
    logout: 'Logout',
    
    // Landing Page
    welcomeTitle: 'Welcome to Digital Doctor AI',
    welcomeDescription: 'Your AI-powered health assistant for prescription validation and mental health monitoring.',
    prescriptionValidator: 'Prescription Validator',
    mentalHealthMonitor: 'Mental Health Monitor',
    
    // Prescription Analyzer
    prescriptionAnalysis: 'Prescription Analysis',
    prescriptionDescription: 'Upload an image of your prescription and provide any relevant health information. Our AI will analyze it for potential issues and insights.',
    prescriptionNote: 'Note: Our AI is designed to read various handwriting styles, including cursive and潦草 (sloppy) handwriting. For best results, ensure the prescription image is clear and well-lit.',
    uploadPrescription: 'Upload Prescription',
    dragDrop: 'Drag and drop',
    clickToUpload: 'Click to upload',
    imageTypes: 'PNG, JPG, or WEBP',
    allergies: 'Allergies',
    allergiesPlaceholder: 'e.g., Penicillin, Aspirin',
    age: 'Age',
    agePlaceholder: 'e.g., 35',
    conditions: 'Pre-existing Conditions',
    conditionsPlaceholder: 'e.g., Diabetes, Hypertension',
    analyzePrescription: 'Analyze Prescription',
    analyzing: 'Analyzing...',
    
    // Mental Health Monitor
    mentalHealthTitle: 'Mental Health Monitor',
    mentalHealthDescription: 'Record a short audio message about how you\'re feeling. Our AI will analyze your mood and provide personalized wellness recommendations.',
    startRecording: 'Start Recording',
    stopRecording: 'Stop Recording',
    analyzingMood: 'Analyzing your mood...',
    moodAnalysis: 'Mood Analysis',
    
    // Analysis Results
    analysisReport: 'Analysis Report',
    analysisConfidence: 'Analysis Confidence',
    allergyAlerts: 'Allergy Alerts',
    safetyAlerts: 'Enhanced Safety Alerts',
    drugInteractions: 'Drug Interactions',
    identifiedMedications: 'Identified Medications',
    costOptimization: 'Cost Optimization',
    whatItTreats: 'What it treats:',
    take: 'Take:',
    matchFound: '✅ Match Found',
    noMatch: '⚠️ No Match',
    yourCondition: 'Your condition:',
    recommendation: 'Recommendation:',
    
    // Auth Page
    login: 'Login',
    signup: 'Sign Up',
    username: 'Username',
    password: 'Password',
    email: 'Email (optional)',
    loginButton: 'Login',
    signupButton: 'Sign Up',
    needAccount: 'Need an account?',
    haveAccount: 'Already have an account?',
    
    // Patient Info Form
    additionalInfo: 'Additional Information (Optional)',
    additionalInfoNote: 'Note: Please list all your current health conditions. This will help us match your medications to your specific needs and provide better timing recommendations.',
    
    // Confidence Display
    confidenceTip: 'Tip: If the confidence is low due to handwriting clarity, try retaking the photo with better lighting and focus.',
    
    // Chat Bot
    chatBotTitle: 'Digital Doctor Assistant',
    chatBotWelcome: 'Hello! I\'m your Digital Doctor assistant. How can I help you with your prescriptions or medications today?',
    chatBotPlaceholder: 'Type your question about prescriptions or medications...',
    chatBotSend: 'Send',
    chatBotDisclaimer: 'For detailed prescription analysis, please use the Prescription Analyzer tool.',
    chatBotError: 'Sorry, I encountered an error processing your request. Please try again.',
    chatBotPrescriptionInfo: 'I can help you analyze prescriptions. Please upload an image of your prescription using the Prescription Analyzer tool, and I\'ll provide detailed information about your medications, including dosages, interactions, and safety alerts.',
    chatBotSideEffects: 'If you\'re concerned about side effects of your medications, please upload your prescription for analysis. I can identify potential side effects based on your specific medications and dosages.',
    chatBotInteractions: 'Drug interactions can be serious. To check for potential interactions between your medications, please upload your prescription for analysis.',
    chatBotDosage: 'Proper dosage is important for medication effectiveness and safety. Please upload your prescription so I can analyze the dosages and provide recommendations based on your health profile.',
    chatBotHelp: 'I\'m here to help you understand your prescriptions and medications. You can ask me about: Prescription analysis, Medication side effects, Drug interactions, Dosage information. To get started, please upload your prescription using the Prescription Analyzer tool.',
    chatBotDefault: 'I\'m here to help you understand your prescriptions and medications. You can ask me about: Prescription analysis, Medication side effects, Drug interactions, Dosage information. To get started, please upload your prescription using the Prescription Analyzer tool.'
  },
  
  ml: {
    home: 'Home',
    logout: 'Logout',
    welcomeTitle: 'Welcome to Digital Doctor AI',
    welcomeDescription: 'Your AI-powered health assistant for prescription validation and mental health monitoring.',
    prescriptionValidator: 'Prescription Validator',
    mentalHealthMonitor: 'Mental Health Monitor',
    prescriptionAnalysis: 'Prescription Analysis',
    prescriptionDescription: 'Upload an image of your prescription and provide any relevant health information. Our AI will analyze it for potential issues and insights.',
    prescriptionNote: 'Note: Our AI is designed to read various handwriting styles, including cursive and潦草 (sloppy) handwriting. For best results, ensure the prescription image is clear and well-lit.',
    uploadPrescription: 'Upload Prescription',
    dragDrop: 'Drag and drop',
    clickToUpload: 'Click to upload',
    imageTypes: 'PNG, JPG, or WEBP',
    allergies: 'Allergies',
    allergiesPlaceholder: 'e.g., Penicillin, Aspirin',
    age: 'Age',
    agePlaceholder: 'e.g., 35',
    conditions: 'Pre-existing Conditions',
    conditionsPlaceholder: 'e.g., Diabetes, Hypertension',
    analyzePrescription: 'Analyze Prescription',
    analyzing: 'Analyzing...',
    mentalHealthTitle: 'Mental Health Monitor',
    mentalHealthDescription: 'Record a short audio message about how you\'re feeling. Our AI will analyze your mood and provide personalized wellness recommendations.',
    startRecording: 'Start Recording',
    stopRecording: 'Stop Recording',
    analyzingMood: 'Analyzing your mood...',
    moodAnalysis: 'Mood Analysis',
    analysisReport: 'Analysis Report',
    analysisConfidence: 'Analysis Confidence',
    allergyAlerts: 'Allergy Alerts',
    safetyAlerts: 'Enhanced Safety Alerts',
    drugInteractions: 'Drug Interactions',
    identifiedMedications: 'Identified Medications',
    costOptimization: 'Cost Optimization',
    whatItTreats: 'What it treats:',
    take: 'Take:',
    matchFound: '✅ Match Found',
    noMatch: '⚠️ No Match',
    yourCondition: 'Your condition:',
    recommendation: 'Recommendation:',
    login: 'Login',
    signup: 'Sign Up',
    username: 'Username',
    password: 'Password',
    email: 'Email (optional)',
    loginButton: 'Login',
    signupButton: 'Sign Up',
    needAccount: 'Need an account?',
    haveAccount: 'Already have an account?',
    additionalInfo: 'Additional Information (Optional)',
    additionalInfoNote: 'Note: Please list all your current health conditions. This will help us match your medications to your specific needs and provide better timing recommendations.',
    confidenceTip: 'Tip: If the confidence is low due to handwriting clarity, try retaking the photo with better lighting and focus.',
    chatBotTitle: 'Digital Doctor Assistant',
    chatBotWelcome: 'Hello! I\'m your Digital Doctor assistant. How can I help you with your prescriptions or medications today?',
    chatBotPlaceholder: 'Type your question about prescriptions or medications...',
    chatBotSend: 'Send',
    chatBotDisclaimer: 'For detailed prescription analysis, please use the Prescription Analyzer tool.',
    chatBotError: 'Sorry, I encountered an error processing your request. Please try again.',
    chatBotPrescriptionInfo: 'I can help you analyze prescriptions. Please upload an image of your prescription using the Prescription Analyzer tool, and I\'ll provide detailed information about your medications, including dosages, interactions, and safety alerts.',
    chatBotSideEffects: 'If you\'re concerned about side effects of your medications, please upload your prescription for analysis. I can identify potential side effects based on your specific medications and dosages.',
    chatBotInteractions: 'Drug interactions can be serious. To check for potential interactions between your medications, please upload your prescription for analysis.',
    chatBotDosage: 'Proper dosage is important for medication effectiveness and safety. Please upload your prescription so I can analyze the dosages and provide recommendations based on your health profile.',
    chatBotHelp: 'I\'m here to help you understand your prescriptions and medications. You can ask me about: Prescription analysis, Medication side effects, Drug interactions, Dosage information. To get started, please upload your prescription using the Prescription Analyzer tool.',
    chatBotDefault: 'I\'m here to help you understand your prescriptions and medications. You can ask me about: Prescription analysis, Medication side effects, Drug interactions, Dosage information. To get started, please upload your prescription using the Prescription Analyzer tool.'
  },
  
  pa: {
    home: 'Home',
    logout: 'Logout',
    welcomeTitle: 'Welcome to Digital Doctor AI',
    welcomeDescription: 'Your AI-powered health assistant for prescription validation and mental health monitoring.',
    prescriptionValidator: 'Prescription Validator',
    mentalHealthMonitor: 'Mental Health Monitor',
    prescriptionAnalysis: 'Prescription Analysis',
    prescriptionDescription: 'Upload an image of your prescription and provide any relevant health information. Our AI will analyze it for potential issues and insights.',
    prescriptionNote: 'Note: Our AI is designed to read various handwriting styles, including cursive and潦草 (sloppy) handwriting. For best results, ensure the prescription image is clear and well-lit.',
    uploadPrescription: 'Upload Prescription',
    dragDrop: 'Drag and drop',
    clickToUpload: 'Click to upload',
    imageTypes: 'PNG, JPG, or WEBP',
    allergies: 'Allergies',
    allergiesPlaceholder: 'e.g., Penicillin, Aspirin',
    age: 'Age',
    agePlaceholder: 'e.g., 35',
    conditions: 'Pre-existing Conditions',
    conditionsPlaceholder: 'e.g., Diabetes, Hypertension',
    analyzePrescription: 'Analyze Prescription',
    analyzing: 'Analyzing...',
    mentalHealthTitle: 'Mental Health Monitor',
    mentalHealthDescription: 'Record a short audio message about how you\'re feeling. Our AI will analyze your mood and provide personalized wellness recommendations.',
    startRecording: 'Start Recording',
    stopRecording: 'Stop Recording',
    analyzingMood: 'Analyzing your mood...',
    moodAnalysis: 'Mood Analysis',
    analysisReport: 'Analysis Report',
    analysisConfidence: 'Analysis Confidence',
    allergyAlerts: 'Allergy Alerts',
    safetyAlerts: 'Enhanced Safety Alerts',
    drugInteractions: 'Drug Interactions',
    identifiedMedications: 'Identified Medications',
    costOptimization: 'Cost Optimization',
    whatItTreats: 'What it treats:',
    take: 'Take:',
    matchFound: '✅ Match Found',
    noMatch: '⚠️ No Match',
    yourCondition: 'Your condition:',
    recommendation: 'Recommendation:',
    login: 'Login',
    signup: 'Sign Up',
    username: 'Username',
    password: 'Password',
    email: 'Email (optional)',
    loginButton: 'Login',
    signupButton: 'Sign Up',
    needAccount: 'Need an account?',
    haveAccount: 'Already have an account?',
    additionalInfo: 'Additional Information (Optional)',
    additionalInfoNote: 'Note: Please list all your current health conditions. This will help us match your medications to your specific needs and provide better timing recommendations.',
    confidenceTip: 'Tip: If the confidence is low due to handwriting clarity, try retaking the photo with better lighting and focus.',
    chatBotTitle: 'Digital Doctor Assistant',
    chatBotWelcome: 'Hello! I\'m your Digital Doctor assistant. How can I help you with your prescriptions or medications today?',
    chatBotPlaceholder: 'Type your question about prescriptions or medications...',
    chatBotSend: 'Send',
    chatBotDisclaimer: 'For detailed prescription analysis, please use the Prescription Analyzer tool.',
    chatBotError: 'Sorry, I encountered an error processing your request. Please try again.',
    chatBotPrescriptionInfo: 'I can help you analyze prescriptions. Please upload an image of your prescription using the Prescription Analyzer tool, and I\'ll provide detailed information about your medications, including dosages, interactions, and safety alerts.',
    chatBotSideEffects: 'If you\'re concerned about side effects of your medications, please upload your prescription for analysis. I can identify potential side effects based on your specific medications and dosages.',
    chatBotInteractions: 'Drug interactions can be serious. To check for potential interactions between your medications, please upload your prescription for analysis.',
    chatBotDosage: 'Proper dosage is important for medication effectiveness and safety. Please upload your prescription so I can analyze the dosages and provide recommendations based on your health profile.',
    chatBotHelp: 'I\'m here to help you understand your prescriptions and medications. You can ask me about: Prescription analysis, Medication side effects, Drug interactions, Dosage information. To get started, please upload your prescription using the Prescription Analyzer tool.',
    chatBotDefault: 'I\'m here to help you understand your prescriptions and medications. You can ask me about: Prescription analysis, Medication side effects, Drug interactions, Dosage information. To get started, please upload your prescription using the Prescription Analyzer tool.'
  }
};

// Default to English for any missing translations
const defaultTranslations = translations.en;

export const getTranslation = (language: Language, key: keyof TranslationKeys): string => {
  const langTranslations = translations[language] || defaultTranslations;
  return langTranslations[key] || defaultTranslations[key] || key;
};

export const useTranslation = (language: Language): Record<keyof TranslationKeys, string> => {
  return new Proxy({} as Record<keyof TranslationKeys, string>, {
    get: (_, key: keyof TranslationKeys) => {
      return getTranslation(language, key);
    }
  });
};

