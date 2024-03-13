"use client";


import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useAppContext } from "@/app/AppContext";
import { database } from "@/database/database";

type SideBarProps = {
  curChecklist: string;
};

export const VerticalLinearStepper: React.FC<SideBarProps> = ({ curChecklist }) => {
  const { updateMainContent } = useAppContext();
  const { mainContent } = useAppContext();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    updateMainContent(1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    updateMainContent(-1);
  };

  const handleReset = () => {
    setActiveStep(0);
    updateMainContent(-mainContent + 1);
  };

  const curPart = database.find((item) => item.name === curChecklist);

  if (!curPart) {
    return <h1>deu erro</h1>;
  }
  const curPartChecklistLength = curPart.checklist.length;

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" className='mt-3 ml-3'>
        {curPart.checklist.map((data, index) => (
          <Step
            key={data.title}
            sx={{
              /* '& .MuiStepLabel-root .Mui-completed': {
                color: '#d6d3d1', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#2dd4bf', // circle color (ACTIVE)                  
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: '#fff', // circle's number (ACTIVE)
              }, */

              //ERROR
              "& .Mui-error": {},

              //ACTIVE
              "& .Mui-active": {color: "#14b8a6"},  // COR DO TEXTO ATIVO
              "& .Mui-active .MuiStepIcon-root": {color: "#14b8a6"}, // COR DO FUNDO DO ICONE ATIVO
              "& .Mui-active .MuiStepIcon-text": {fill: "white"}, // COR DO TEXTO DO ICONE ATIVO

              //COMPLETED
              "& .Mui-completed": {color: "#5eead4"}, // COR DO TEXTO COMPLETO
              "& .Mui-completed .MuiStepIcon-root": {color: "#5eead4"}, // COR DO FUNDO DO ICONE COMPLETO
              "& .Mui-completed .MuiStepIcon-text": {fill: "white"}, // COR DO TEXTO DO ICONE COMPLETO

              // DISABLED
              "& .Mui-disabled": { color: "#a8a29e"}, // COR DO TEXTO DESABILITADO
              "& .Mui-disabled .MuiStepIcon-root": { color: "#a8a29e" }, // COR DO FUNDO DO ICONE DESABILITADO
              "& .Mui-disabled .MuiStepIcon-text": { fill: "#fff" }, // COR DO TEXTO DO ICONE DESABILITADO
            }}
            
          >
            <StepLabel
              optional={
                index === curPartChecklistLength - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {data.title}
            </StepLabel>
            <StepContent TransitionProps={{ unmountOnExit: false }}>
              {/* <Typography>{data.desc}</Typography> */}
              <Typography className='text-zinc-400'>
                teste teste teste
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    color="inherit"
                    className='bg-teal-400 text-white hover:bg-teal-500 transition-all duration-500'
                  >
                    <p>
                      {index === curPartChecklistLength - 1 ? "Finish" : "Next"}
                    </p>
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    color="inherit"
                    className='bg-white text-teal-400 hover:scale-1 hover:bg-white transition-all duration-500'
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === curPartChecklistLength && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Divider className="mb-4 -mt-3" />
          <Typography>All database completed!!</Typography>
          <Button 
            onClick={handleReset} 
            sx={{ mt: 1, mr: 1 }}
            className='bg-teal-600 text-white hover:bg-teal-800 transition-all duration-500'
          >
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

