import { useImperativeHandle, useRef } from "react";

export type SearchBoxHandle = { focus: () => void };

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  ref?: React.Ref<SearchBoxHandle>;
};

export function SearchBox({ value, onChange, ref }: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.currentTarget.value)}
    />
  );
}
