import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

type TooltipCustomProp = {
  children: ReactNode;
  msg: string;
};

export default function TooltipCustom({ children, msg }: TooltipCustomProp) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>{children}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{msg}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
