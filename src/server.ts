import app from './app';

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server corriendo en puerto: ${PORT}`);
  console.log('env variable test: ', process.env.MI_VARIABLE)
});