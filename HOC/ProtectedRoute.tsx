import { useMe } from '@/query';
import { ReactElement, ReactNode, useEffect } from 'react';
import ClipLoader from 'react-spinners/CircleLoader';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { data, isLoading, isError } = useMe();
  return (
    <>
      {!isLoading && children}
      {isLoading && (
        <div className="min-h-screen flex justify-center items-center text-center">
          <div className="w-full">
            <ClipLoader
              color={'#5D5FEF'}
              loading={isLoading}
              // cssOverride={override}
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
