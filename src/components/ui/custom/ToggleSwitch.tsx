import * as Switch from "@radix-ui/react-switch";
import { Label } from "@/components/ui/label";

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function ToggleSwitch({
  label,
  checked,
  onCheckedChange,
}: ToggleSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch.Root
        role="toggle-switch"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
        id="toggle-switch"
      >
        <Switch.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
      </Switch.Root>
      <Label
        htmlFor="toggle-switch"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  );
}
