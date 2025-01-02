import React, { createContext, useContext, useState, ReactNode } from 'react';


interface TitleContextProps {
  title: string;
  setTitle: (title: string) => void;
}


const TitleContext = createContext<TitleContextProps | undefined>(undefined);

