// src/hooks/AnimationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextProps {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const toggleAnimations = () => setAnimationsEnabled((prev) => !prev);

  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within AnimationProvider");
  }
  return context;
};