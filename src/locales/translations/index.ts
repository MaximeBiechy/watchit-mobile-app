// Auth
import enChooseConnectionMode from './en/auth/chooseConnectionMode.json';
import frChooseConnectionMode from './fr/auth/chooseConnectionMode.json';
import enSignin from './en/auth/signin.json';
import frSignin from './fr/auth/signin.json';
import enSignup from './en/auth/signup.json';
import frSignup from './fr/auth/signup.json';
import enEmailVerification from './en/auth/emailVerification.json';
import frEmailVerification from './fr/auth/emailVerification.json';
// Onboarding
import enOnboarding from './en/onboarding/onboarding.json';
import frOnboarding from './fr/onboarding/onboarding.json';
import enChooseCharacter from './en/onboarding/chooseCharacter.json';
import frChooseCharacter from './fr/onboarding/chooseCharacter.json';
// Errors
import enErrors from './en/errors/errors.json';
import frErrors from './fr/errors/errors.json';
// Main

const translations = {
  en: {
    chooseConnectionMode: enChooseConnectionMode,
    signin: enSignin,
    signup: enSignup,
    emailVerification: enEmailVerification,
    onboarding: enOnboarding,
    chooseCharacter: enChooseCharacter,
    errors: enErrors,
  },
  fr: {
    chooseConnectionMode: frChooseConnectionMode,
    signin: frSignin,
    signup: frSignup,
    emailVerification: frEmailVerification,
    onboarding: frOnboarding,
    chooseCharacter: frChooseCharacter,
    errors: frErrors,
  },
};

export default translations;
