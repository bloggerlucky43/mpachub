import { Box, Fieldset, Input, Button, Field } from "@chakra-ui/react";
import { useState } from "react";
const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  return (
    <Box p={2} rounded="md" w="100%" color="white">
      <Fieldset.Root size="lg" maxW="md">
        <form>
          <Fieldset.Content display="flex" w="full" p={2}>
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input
                name="username"
                placeholder="Enter your username"
                type="email"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
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
          </Fieldset.Content>
          <Button type="submit" w="full" mt={4} borderRadius="md" bg="primary">
            Login
          </Button>
        </form>
      </Fieldset.Root>
    </Box>
  );
};
export default Login;
