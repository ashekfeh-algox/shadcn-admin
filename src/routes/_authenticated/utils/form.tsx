import { createFileRoute } from "@tanstack/react-router";
import { useAppForm } from "@/components/form-inputs";
import { Main } from "@/layout/main";

export const Route = createFileRoute("/_authenticated/utils/form")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: {
      name: "ahmed",
      lives: 13,
      isMarried: false,
      birthdate: new Date(),
      cars: [] as string[],
    },
  });

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
  };

  return (
    <Main>
      <form onSubmit={onSubmitHandler} className="grid grid-cols-2 gap-4">
        <form.AppField name="name">{(field) => <field.TextField label="Name" />}</form.AppField>
        <form.AppField name="lives">{(field) => <field.TextField type="number" label="Lives" />}</form.AppField>
        <form.AppField name="isMarried">{(field) => <field.CheckboxField label="Is Married" />}</form.AppField>

        <form.AppField name="cars">
          {(field) => <field.CheckboxGroupField label="Cards" options={["BMW", "Mercedes", "GMC", "BYD", "Tesla"]} />}
        </form.AppField>
      </form>

      <div className="mt-10">
        <h1 className="font-bold">Date</h1>

        <form.Subscribe selector={(state) => state.values}>
          {(values) => <pre>{JSON.stringify(values, null, 2)}</pre>}
        </form.Subscribe>
      </div>
    </Main>
  );
}
