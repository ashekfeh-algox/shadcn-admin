import { Button } from "@/components/ui/button";

type Props = {
  className: string;
};

export function SubmitButton({ className }: Props) {
  return (
    <Button type="submit" className={className}>
      Submit
    </Button>
  );
}
