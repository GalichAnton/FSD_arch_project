import React, { useEffect, useState } from 'react';

import { AppButton } from '@/shared/ui/depricated/AppButton';

// Для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error('Error');
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <AppButton onClick={onThrow}>Throw Err</AppButton>
  );
};
