import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type dataProps = {
  value: string;
  label: string;
};

type DropdownProps = {
  data: dataProps[];
  action: React.Dispatch<React.SetStateAction<string>>;
  def: string;
};

export function Dropdown({ data, action, def }: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(def);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="dropdown"
          aria-label={`currently in ${value} tab`}
          aria-expanded={open}
          className="w-[140px] dark:bg-white/10 dark:border-none justify-between"
        >
          {value
            ? data.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[140px]">
        <DropdownMenuGroup>
          {data.map((framework) => (
            <DropdownMenuItem
              key={framework.value}
              onSelect={() => {
                setValue(framework.value);
                action(framework.value);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === framework.value ? "opacity-100" : "opacity-0"
                )}
              />
              {framework.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
