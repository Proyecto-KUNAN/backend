import { useEffect, useState } from 'react';

const useValidation = (str, expression, defaultValue = false) => {
  const [isValid, setIsValid] = useState(defaultValue);

  useEffect(() => {
    setIsValid(expression && str ? expression.test(str) : false);
  }, [str, expression]);

  return isValid;
};

export default useValidation;
