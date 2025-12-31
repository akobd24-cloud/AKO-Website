'use client';

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

interface JoinFormContextType {
  showJoinForm: boolean;
  setShowJoinForm: (show: boolean) => void;
}

const JoinFormContext = createContext<JoinFormContextType | undefined>(
  undefined
);

export function JoinFormProvider({ children }: { children: ReactNode }) {
  const [showJoinForm, setShowJoinForm] = useState(false);

  return (
    <JoinFormContext.Provider value={{ showJoinForm, setShowJoinForm }}>
      {children}
    </JoinFormContext.Provider>
  );
}

export function useJoinForm() {
  const context = useContext(JoinFormContext);
  if (context === undefined) {
    throw new Error('useJoinForm must be used within a JoinFormProvider');
  }
  return context;
}

