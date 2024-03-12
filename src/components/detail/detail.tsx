'use client'

import Image from "next/image";

import React, { useState, useEffect } from 'react';

import { useAppContext } from '@/app/AppContext';

import * as esquadreta from '@/database/esquadreta/import';

import { database } from "@/database/database"

type DetailProps = {
  curChecklist: string;
};

const Detail: React.FC<DetailProps> = ( { curChecklist } ) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { mainContent } = useAppContext();

  useEffect(() => {
    setCurrentSlide(mainContent);
  }, [mainContent]);

  const curPart = database.find(item => item.name === curChecklist)
  
  if (!curPart) {
    return(
      <h1>peça não encontrada</h1>
    )
  }

  const curPartChecklistLength = curPart.checklist.length

  if (currentSlide > curPartChecklistLength) {
    return(
      <div className="flex items-center justify-center">
        Parabéns, você finalizou o checklist!!
      </div>
    )
  }

  return (
    <main>
      <Image 
        src={esquadreta[`slide${currentSlide}` as keyof typeof esquadreta]} 
        alt="" 
        style={{objectFit: "contain"}} 
        className="max-h-screen bg-teal-950" 
      />
    </main>
  )
}

export default Detail