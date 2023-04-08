import { useMe } from '@/query';
import { ReactElement, ReactNode, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { data, isLoading } = useMe();
  return (
    <>
      {!isLoading && children}
      {isLoading && (
        <div className="min-h-screen">
          <div className="min-h-screen flex items-center justify-center">
            <ClipLoader
              color={'#5D5FEF'}
              loading={isLoading}
              cssOverride={{}}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
