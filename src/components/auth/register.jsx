import { Box, Fieldset, Input, Button, Field } from "@chakra-ui/react";
import { useState } from "react";
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "+234XXXXXXXXXX",
    username: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <Box p={2} rounded="md" w="100%" color="white">
      <Fieldset.Root size="lg" maxW="md">
        <form>
          <Fieldset.Content display="flex" w="full" p={2}>
            <Field.Root>
              <Field.Label>Full name: </Field.Label>
              <Input
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                name="email"
                placeholder="Enter your email address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Phone Number</Field.Label>
              <Input
                name="phone"
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password:</Field.Label>
              <Input
                name="password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Confirm Password:</Field.Label>
              <Input
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                required
              />
            </Field.Root>
          </Fieldset.Content>
          <Button type="submit" w="full" mt={4} borderRadius="md" bg="primary">
            Apply
          </Button>
        </form>
      </Fieldset.Root>
    </Box>
  );
};
export default Register;
