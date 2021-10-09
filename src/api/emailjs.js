import emailjs from "emailjs-com";

emailjs.init(process.env.PREACT_APP_EMAILJS_USER_ID);

export default emailjs;