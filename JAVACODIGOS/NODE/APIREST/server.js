import app from './app';
const port = 3001;
app.listen(port, () => {
  console.log();
  console.log("estou escutando na porta " + port);
  console.log("CTRL + clique em http://localhost:" + port);
})
