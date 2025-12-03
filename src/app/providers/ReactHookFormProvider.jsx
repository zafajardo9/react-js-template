import { createContext, useContext } from 'react';

const FormContext = createContext(null);

export const ReactHookFormProvider = ({ children, value }) => {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  return useContext(FormContext);
};
