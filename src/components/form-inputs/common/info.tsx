import type { AnyFieldApi } from "@tanstack/react-form";

export function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    field.state.meta.errors.length > 0 && (
      <ul className="list-disc pl-4 text-red-200 text-sm">
        {field.state.meta.errors.map((error) => (
          <li key={error?.message} className="">
            {error?.message}
          </li>
        ))}
      </ul>
    )
  );

  // return (
  //   <>
  //     {field.state.meta.isTouched && !field.state.meta.isValid ? <em>{field.state.meta.errors.join(", ")}</em> : null}
  //     {field.state.meta.isValidating ? "Validating..." : null}
  //   </>
  // );
}
