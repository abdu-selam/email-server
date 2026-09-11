import app from "./src/app";
import ENV from "./src/utils/env";

app.listen(ENV.PORT, () => {
  console.log(`Server Is running on PORT ${ENV.PORT}`);
});
