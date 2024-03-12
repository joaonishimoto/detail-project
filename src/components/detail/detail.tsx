'use client'

import Image from "next/image";

import React, { useState } from 'react';

import * as esquadreta from '@/database/esquadreta/import';

import { database } from "@/database/database"

type SideBarProps = {
  checklistId: string;
};

const Detail: React.FC<SideBarProps> = ( { checklistId } ) => {
  const [currentSlide, setCurrentSlide] = useState(19);
  const nextSlide = () => {
    // Verifica se chegou ao último slide
    
    if (currentSlide < curPartChecklistLength) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(1);
    }
  };

  const curPart = database.find(item => item.name === checklistId)
  
  if (!curPart) {
    return(
      <h1>peça não encontrada</h1>
    )
  }

  const curPartChecklistLength = curPart.checklist.length

  if (currentSlide > curPartChecklistLength) {
    return(
      <h1>acabou o checklist</h1>
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