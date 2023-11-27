'use client'

import { useMutation } from '@tanstack/react-query'
import { Field, Form } from 'houseform'
import { Button, Input, LoaderCircle, StatusMessage } from '@/components'
import { MutationKey } from '@/lib/reactQuery'
import { getErrorMessage } from '@/utils/error'
import { sendMockedTest } from '../actions'
import { type TestFormSchema, testFormNameSchema } from '../validationSchemas'

export const TestForm = () => {
  const { isPending, mutate, error } = useMutation({
    mutationKey: [MutationKey.test],
    mutationFn: sendMockedTest,
    onSuccess: data => {
      alert(`Mocked response: ${JSON.stringify(data, null, 2)}`)
    }
  })
  const errorMessage = error ? getErrorMessage({ error }) : undefined

  return (
    <Form<TestFormSchema> onSubmit={({ name }) => mutate({ userName: name })}>
      {({ submit, isSubmitted }) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            submit()
          }}
          className="flex w-full max-w-xs flex-col gap-4 max-md:max-w-none"
        >
          <Field<TestFormSchema['name']>
            name="name"
            onBlurValidate={testFormNameSchema}
            onChangeValidate={isSubmitted ? testFormNameSchema : undefined}
          >
            {({ value, setValue, onBlur, errors }) => (
              <Input
                id="name"
                value={value}
                onChange={e => setValue(e.target.value)}
                onBlur={onBlur}
                placeholder="Name"
                disabled={isPending}
                label="Name"
                errorMessage={errors}
              />
            )}
          </Field>
          <Button
            disabled={isPending}
            type="submit"
          >
            {isPending && <LoaderCircle />}Submit
          </Button>
          {errorMessage && (
            <StatusMessage variant="error">{errorMessage}</StatusMessage>
          )}
        </form>
      )}
    </Form>
  )
}
