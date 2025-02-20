// Auth
import enChooseConnectionMode from './en/auth/chooseConnectionMode.json';
import frChooseConnectionMode from './fr/auth/chooseConnectionMode.json';
import enLogin from './en/auth/login.json';
import frLogin from './fr/auth/login.json';
import enSignup from './en/auth/signup.json';
import frSignup from './fr/auth/signup.json';
import enEmailVerification from './en/auth/emailVerification.json';
import frEmailVerification from './fr/auth/emailVerification.json';
// Onboarding
import enOnboarding from './en/onboarding/onboarding.json';
import frOnboarding from './fr/onboarding/onboarding.json';
// Main

const translations = {
  en: {
    chooseConnectionMode: enChooseConnectionMode,
    login: enLogin,
    signup: enSignup,
    emailVerification: enEmailVerification,
    onboarding: enOnboarding,
  },
  fr: {
    chooseConnectionMode: frChooseConnectionMode,
    login: frLogin,
    signup: frSignup,
    emailVerification: frEmailVerification,
    onboarding: frOnboarding,
  },
};

export default translations;
