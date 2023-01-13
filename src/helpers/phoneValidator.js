import {
  verifyPhoneNumber,
  sanitizePhoneNumber,
} from "nigerian-phone-number-validator";

export const phoneValidator = () => {
  verifyPhoneNumber("2348139922348"); // true
  verifyPhoneNumber("08139922348"); // true

  verifyPhoneNumber("081399223482"); // false
  verifyPhoneNumber("245475693092"); // false

  sanitizePhoneNumber("08139922348"); // 2348139922348 (Default Sanitize Mode is throwInvalid)
  sanitizePhoneNumber("08139922348", { mode: "passthrough" | "throwInvalid" }); // 2348139922348
};
